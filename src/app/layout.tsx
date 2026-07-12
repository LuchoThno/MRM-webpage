import type { Metadata } from "next";

import "@/app/globals.css";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MRM | Marine Robotics & Subsea Engineering",
    template: "%s | MRM"
  },
  description:
    "Magallanes ROV Marine entrega robotica submarina, inspeccion con ROV, cavitacion, survey y reportes tecnicos para puertos, acuicultura, navieras e industria critica.",
  keywords: [
    "MRM",
    "Magallanes ROV Marine",
    "ROV Chile",
    "robotica submarina",
    "inspeccion submarina",
    "USBL",
    "batimetria",
    "inspeccion de cascos",
    "acuicultura"
  ],
  openGraph: {
    title: "MRM | Marine Robotics & Subsea Engineering",
    description:
      "Ingenieria submarina premium para Chile: inspeccion con ROV, survey, limpieza por cavitacion y reportes tecnicos de alto estandar.",
    url: siteUrl,
    siteName: "MRM",
    locale: "es_CL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MRM | Marine Robotics & Subsea Engineering",
    description:
      "Robotica submarina, inspeccion industrial y evidencia tecnica para operaciones maritimas en Chile."
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" }
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon/favicon.ico"]
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#020914] font-[family-name:var(--font-inter)] text-white antialiased">{children}</body>
    </html>
  );
}
