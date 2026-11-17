import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function requiredEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessage(payload: Required<ContactPayload>, locale: "es" | "en") {
  return {
    text: [
      `Nombre: ${payload.name}`,
      `Empresa: ${payload.company || "-"}`,
      `Correo: ${payload.email}`,
      `Telefono: ${payload.phone || "-"}`,
      `Servicio: ${payload.service}`,
      `Idioma del sitio: ${locale === "en" ? "Inglés" : "Español"}`,
      "",
      "Mensaje:",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">Nueva solicitud desde magallanesrovmarine.cl</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(payload.company || "-")}</p>
        <p><strong>Correo:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(payload.phone || "-")}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(payload.service)}</p>
        <p><strong>Idioma del sitio:</strong> ${locale === "en" ? "Inglés" : "Español"}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(payload.message)}</p>
      </div>
    `,
  };
}

const errors = {
  es: {
    missing: "Completa nombre, correo, servicio y mensaje.",
    failed: "No se pudo enviar la solicitud. Intenta nuevamente o escríbenos a contacto@magallanesrovmarine.cl."
  },
  en: {
    missing: "Please fill in your name, email, service and message.",
    failed: "We couldn’t send your request. Please try again or email contacto@magallanesrovmarine.cl."
  }
} as const;

export async function POST(request: Request) {
  let locale: keyof typeof errors = "es";

  try {
    const body = (await request.json()) as ContactPayload & { locale?: string };
    locale = body.locale === "en" ? "en" : "es";

    const payload = {
      name: body.name?.trim() ?? "",
      company: body.company?.trim() ?? "",
      email: body.email?.trim() ?? "",
      phone: body.phone?.trim() ?? "",
      service: body.service?.trim() ?? "",
      message: body.message?.trim() ?? "",
    };

    if (!payload.name || !payload.email || !payload.service || !payload.message) {
      return NextResponse.json(
        { error: errors[locale].missing },
        { status: 400 }
      );
    }

    const smtpHost = requiredEnv("SMTP_HOST", "mail.magallanesrovmarine.cl");
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = requiredEnv("SMTP_USER", "contacto@magallanesrovmarine.cl");
    const smtpPass = requiredEnv("SMTP_PASS");
    const contactTo = requiredEnv("CONTACT_FORM_TO", smtpUser);
    const content = formatMessage(payload, locale);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web MRM" <${smtpUser}>`,
      to: contactTo,
      replyTo: payload.email,
      subject: `Nueva solicitud web: ${payload.service}`,
      text: content.text,
      html: content.html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: errors[locale].failed },
      { status: 500 }
    );
  }
}
