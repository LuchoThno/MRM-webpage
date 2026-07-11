"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ClipboardList,
  FileCheck2,
  HardHat,
  Mail,
  MapPinned,
  MoveRight,
  Phone,
  Shield,
  Waypoints,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  contactInfo,
  locations,
  metrics,
  serviceCategories,
  services,
} from "@/data/site";

const processCards = [
  {
    step: "Diagnostico en terreno",
    icon: ClipboardList,
    front: "Lectura inicial",
    back: "Levantamos el estado real de la faena antes de mover recursos.",
    image: "/assets/monitor_control_rov_embarcacion.jpg",
  },
  {
    step: "Plan de intervencion",
    icon: HardHat,
    front: "Alcance y recursos",
    back: "Definimos alcance, recursos y ventana de ejecucion junto al cliente.",
    image: "/assets/tecnico_cable_embarcacion_01.jpg",
  },
  {
    step: "Ejecucion controlada",
    icon: Camera,
    front: "Operacion con evidencia",
    back: "Ejecutamos con checklist y registro visual en cada frente de trabajo.",
    image: "/assets/inspeccion_helice_submarina.jpg",
  },
  {
    step: "Informe y cierre",
    icon: FileCheck2,
    front: "Reporte ejecutivo",
    back: "Entregamos un reporte claro, sin relleno ni informacion redundante.",
    image: "/assets/plano_georreferenciacion_muestra.jpg",
  }
] as const;

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.35em] text-[var(--blue-soft)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-slate-300/78 md:text-lg">{description}</p>
    </div>
  );
}

function SectionBackdrop({
  src,
  alt,
  imageClassName = "",
  overlayClassName = ""
}: {
  src: string;
  alt: string;
  imageClassName?: string;
  overlayClassName?: string;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover opacity-12 ${imageClassName}`}
      />
      <div
        className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(2,9,20,0.82),rgba(2,9,20,0.58)_42%,rgba(2,9,20,0.82))] ${overlayClassName}`}
      />
    </div>
  );
}

export function HomePage() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [activeProcess, setActiveProcess] = useState(0);
  const [processPaused, setProcessPaused] = useState(false);

  useEffect(() => {
    if (!formStatus) return;
    const timer = window.setTimeout(() => setFormStatus(null), 3200);
    return () => window.clearTimeout(timer);
  }, [formStatus]);

  useEffect(() => {
    if (processPaused) return;
    const timer = window.setInterval(() => {
      setActiveProcess((current) => (current + 1) % processCards.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [processPaused]);

  const processProgress = (activeProcess / (processCards.length - 1)) * 100;

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setFormStatus("Completa nombre, correo, servicio y mensaje.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "No se pudo enviar la solicitud.");
      }

      setFormStatus("Solicitud enviada correctamente.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "No se pudo enviar la solicitud.";
      setFormStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Nav />

      <main className="relative overflow-hidden bg-[#020914] text-white">
        <section id="inicio" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated/hero-rov-underwater.png"
              alt="ROV industrial trabajando bajo el agua"
              fill
              priority
              className="object-cover object-[70%_center] opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,179,35,0.14),transparent_18%),radial-gradient(circle_at_top_right,rgba(29,75,143,0.22),transparent_24%),linear-gradient(90deg,rgba(6,18,35,0.9)_0%,rgba(6,18,35,0.54)_42%,rgba(6,18,35,0.68)_100%),linear-gradient(180deg,rgba(6,18,35,0.06),rgba(6,18,35,0.88)_82%,#05101f)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(2,9,20,0.85))]" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 md:px-8">
            <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 text-xs uppercase tracking-[0.45em] text-[var(--blue-soft)]"
                >
                  Ingenieria submarina premium para Chile
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="font-[family-name:var(--font-space)] text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.35rem]"
                >
                  Ingenieria submarina
                  <span className="mt-4 block text-2xl font-normal tracking-[0.08em] text-slate-100 md:text-3xl">
                    profesional para operaciones criticas
                  </span>
                  <span className="mt-2 block text-lg uppercase tracking-[0.42em] text-[var(--gold-soft)] md:text-xl">
                    Marine Robotics &amp; Subsea Engineering
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/80 md:text-xl"
                >
                  Inspeccion, survey y soporte tecnico con enfoque ejecutivo, trazabilidad digital y capacidad de
                  despliegue nacional para puertos, acuicultura, navieras e infraestructura maritima.
                </motion.p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {metrics.slice(0, 3).map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.35rem] border border-white/10 bg-[rgba(8,19,38,0.72)] px-5 py-4"
                    >
                      <p className="text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-[0.68rem] uppercase tracking-[0.28em] text-slate-300/72">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <Link href="#contacto" className="btn-primary">
                    Solicitar Cotizacion
                  </Link>
                  <Link href="#servicios" className="btn-secondary">
                    Nuestros Servicios
                  </Link>
                </motion.div>
                <div className="mt-14 flex items-center gap-5">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                  <p className="text-xs uppercase tracking-[0.5em] text-slate-300/75">
                    Vis Manet, Locus Tenetur
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative"
              >
                <div className="glass-panel overflow-hidden rounded-[2rem] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                    <div className="relative h-[27rem]">
                      <Image
                        src="/generated/hull-inspection-real.png"
                        alt="Inspeccion de casco con ROV"
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,31,0.02),rgba(5,16,31,0.74))]" />
                    </div>
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#081523]/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-slate-200/84">
                      ROV Inspection
                    </div>
                  </div>
                  <div className="grid gap-4 px-2 pb-2 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Capacidad operacional</p>
                      <p className="mt-3 text-2xl font-medium text-white">250 m de profundidad con despliegue nacional.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Entrega ejecutiva</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300/74">
                        Evidencia visual, hallazgos tecnicos y reportes listos para toma de decision, auditoria o continuidad operacional.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">Scroll</span>
            <div className="flex h-14 w-8 justify-center rounded-full border border-white/15">
              <motion.div
                animate={{ y: [6, 24, 6] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                className="mt-2 h-3 w-3 rounded-full bg-[var(--gold)]"
              />
            </div>
          </div>
        </section>

        <section id="empresa" className="relative mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionBackdrop
            src="/assets/equipos_rov_y_cable.jpg"
            alt=""
            imageClassName="object-[center_32%]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.92),rgba(2,9,20,0.62)_36%,rgba(2,9,20,0.9))]"
          />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <SectionHeading
                eyebrow="Quienes Somos"
                title="Un operador tecnico para decisiones submarinas con estandar ejecutivo."
                description="MRM ejecuta inspeccion, survey y soporte operacional con foco en continuidad, trazabilidad y velocidad de respuesta."
              />
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(8,19,38,0.72)] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Perfil</p>
                  <p className="mt-3 text-lg font-medium text-white">ROV, survey e informes tecnicos.</p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(8,19,38,0.72)] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Cobertura</p>
                  <p className="mt-3 text-lg font-medium text-white">Puertos, acuicultura y activos criticos.</p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(8,19,38,0.72)] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Entrega</p>
                  <p className="mt-3 text-lg font-medium text-white">Evidencia visual y lectura ejecutiva.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.85 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,75,143,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(240,179,35,0.08),transparent_28%)]" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                <div className="relative min-h-[360px]">
                  <Image
                    src="/generated/team-deck-operations.png"
                    alt="Equipo MRM preparando despliegue de ROV"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.12),rgba(1,7,13,0.88))]" />
                  <div className="absolute inset-x-0 bottom-0 grid gap-4 border-t border-white/10 bg-[rgba(4,17,34,0.78)] p-6 md:grid-cols-[1.15fr_0.85fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--blue-soft)]">Equipo y Operacion</p>
                      <p className="mt-3 max-w-xl text-lg leading-8 text-slate-200/84">
                        Operamos con protocolos claros, movilizacion coordinada y evidencia lista para cliente,
                        gerencia tecnica o auditoria.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <Shield className="text-[var(--gold)]" size={18} />
                        <span className="text-sm text-slate-100">Seguridad operacional y control documental</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <MoveRight className="text-[var(--gold)]" size={18} />
                        <span className="text-sm text-slate-100">Respuesta tecnica desde Magallanes a nivel nacional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

       <section
  id="servicios"
  className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-8"
>
  <SectionBackdrop
    src="/assets/centro_cultivo_aereo.jpg"
    alt=""
    imageClassName="object-[center_38%]"
    overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.94),rgba(2,9,20,0.7)_34%,rgba(2,9,20,0.9))]"
  />
  <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
    {/* Título y reseña */}
    <div className="max-w-3xl">
      <SectionHeading
        eyebrow="Nuestros Servicios"
        title="Capacidades submarinas para una industria que no admite error."
        description="Diseñamos cada faena con trazabilidad, evidencia y criterios técnicos claros para que tu equipo decida rápido y ejecute con seguridad."
      />
    </div>

    {/* Sectores atendidos */}
    <div className="flex flex-col gap-5 lg:items-end">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
        Sectores que atendemos
      </p>

      <div className="flex max-w-lg flex-wrap gap-3 lg:justify-end">
        {serviceCategories.map((category) => (
          <span
            key={category}
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.05]
              px-5 py-2.5
              text-xs font-medium uppercase
              tracking-[0.22em]
              text-slate-200
              backdrop-blur-sm
              transition duration-300
              hover:border-[rgba(240,179,35,0.35)]
              hover:bg-[rgba(240,179,35,0.08)]
              hover:text-[var(--gold-soft)]
            "
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  </div>

  <div className="relative z-10 mt-16 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
    {services.map((service, index) => {
      const Icon = service.icon;

      return (
        <motion.div
          key={service.slug}
          className="h-full"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.65,
            delay: index * 0.04,
          }}
        >
          <Link
            href={`/services/${service.slug}`}
            className="
              group relative flex h-full min-h-[380px]
              overflow-hidden rounded-[1.8rem]
              border border-white/10 bg-[#071524]
              transition duration-500
              hover:-translate-y-1
              hover:border-[rgba(240,179,35,0.3)]
              hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]
            "
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,11,21,0.1)_0%,rgba(3,11,21,0.5)_42%,rgba(3,11,21,0.97)_100%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,179,35,0.16),transparent_30%),radial-gradient(circle_at_top_left,rgba(157,183,222,0.16),transparent_32%)] opacity-90" />

            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-7">
              {/* Parte superior */}
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(4,17,34,0.65)] text-[var(--blue-soft)] backdrop-blur-md">
                  <Icon size={26} strokeWidth={1.8} />
                </span>

                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[rgba(4,17,34,0.55)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--gold-soft)] backdrop-blur-md">
                  Ver servicio
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>

              {/* Título y reseña de cada servicio */}
              <div className="mt-auto pt-20">
                <div className="rounded-[1.35rem] border border-white/10 bg-[rgba(4,17,34,0.68)] p-5 backdrop-blur-md sm:p-6">
                  <h3 className="max-w-[95%] text-[1.55rem] font-medium leading-[1.2] tracking-[-0.025em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 max-w-[95%] text-sm leading-6 text-slate-200/75">
                    {service.summary}
                  </p>

                  <div className="mt-5 h-px w-16 bg-[var(--gold-soft)]/60 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      );
    })}
  </div>
</section>

        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-8">
          <SectionBackdrop
            src="/assets/hero_barco_faena.jpg"
            alt=""
            imageClassName="object-[center_42%]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.94),rgba(2,9,20,0.74)_40%,rgba(2,9,20,0.92))]"
          />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <SectionHeading
              eyebrow="Cobertura Nacional"
              title="Presencia estrategica en nodos maritimos clave de Chile."
              description="Una lectura visual simple de cobertura y despliegue, con foco en zonas portuarias, salmoneras y operaciones maritimas de alta exigencia."
            />

            <div className="glass-panel rounded-[2rem] p-6">
              <div className="relative h-[520px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#0c2445,#061223)]">
                <div className="absolute left-5 top-5 z-10 max-w-[16rem] overflow-hidden rounded-[1.25rem] border border-[rgba(240,179,35,0.18)] bg-[linear-gradient(180deg,rgba(7,21,36,0.96),rgba(7,21,36,0.82))] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-md">
                  <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,var(--gold),rgba(240,179,35,0.18))]" />
                  <p className="pl-3 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold-soft)]">
                    Presencia Operativa
                  </p>
                  <p className="pl-3 pt-1 text-sm font-medium tracking-[0.08em] text-white">
                    Cobertura Nacional
                  </p>
                </div>
                <Image
                  src="/cl.svg"
                  alt="Mapa de Chile para cobertura nacional"
                  fill
                  className="object-contain p-8 opacity-95"
                />
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 }}
                    className="absolute"
                    style={{ top: location.top, left: location.left }}
                  >
                    <span className="absolute -left-3 -top-3 h-6 w-6 animate-ping rounded-full bg-[rgba(240,179,35,0.16)]" />
                    <span className="relative block h-5 w-5 rounded-full border border-white/60 bg-[var(--gold)] shadow-[0_0_24px_rgba(240,179,35,0.34)]" />
                    <div
                      className={`absolute whitespace-nowrap rounded-full border border-white/10 bg-[#071524]/90 px-3 py-1 backdrop-blur-sm ${location.labelClass}`}
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white">{location.city}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-8">
          <SectionBackdrop
            src="/assets/rov_patagonia_m8.jpg"
            alt=""
            imageClassName="object-[center_48%]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.94),rgba(2,9,20,0.76)_40%,rgba(2,9,20,0.94))]"
          />
          <div className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7"
              >
                <p className="text-5xl font-semibold text-white">{metric.value}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.32em] text-slate-300/72">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-8">
          <SectionBackdrop
            src="/assets/diagrama_inspeccion_tensores.jpg"
            alt=""
            imageClassName="object-contain opacity-10"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.96),rgba(2,9,20,0.78)_40%,rgba(2,9,20,0.96))]"
          />
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#060f1d_0%,#0b1a2e_100%)] p-8 md:p-10">
            <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="Proceso de Trabajo"
                  title="De la orden de trabajo al informe final."
                  description="Cuatro etapas, un responsable por fase y una lectura clara del avance para el cliente."
                />
            </div>

            <div
              className="mt-16"
              onMouseEnter={() => setProcessPaused(true)}
              onMouseLeave={() => setProcessPaused(false)}
            >
              <div className="relative flex flex-wrap items-start justify-between gap-y-8">
                <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 sm:block" />
                <div
                  className="absolute left-0 top-6 hidden h-px transition-all duration-700 ease-out sm:block"
                  style={{
                    width: `${processProgress}%`,
                    background:
                      "linear-gradient(90deg, rgba(240,179,35,1), rgba(157,183,222,1))",
                  }}
                />

                {processCards.map((card, index) => {
                  const Icon = card.icon;
                  const isActive = index === activeProcess;
                  const isDone = index < activeProcess;

                  return (
                    <button
                      key={card.step}
                      onClick={() => setActiveProcess(index)}
                      className="group relative z-10 flex w-1/2 flex-col items-start gap-3 pr-4 text-left focus:outline-none sm:w-auto"
                      aria-pressed={isActive}
                      type="button"
                    >
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-full border text-sm font-medium transition-colors duration-300"
                        style={{
                          borderColor:
                            isActive || isDone ? "rgba(240,179,35,1)" : "rgba(255,255,255,0.18)",
                          backgroundColor: isActive
                            ? "rgba(240,179,35,1)"
                            : isDone
                              ? "rgba(240,179,35,0.12)"
                              : "rgba(11,26,46,1)",
                          color: isActive
                            ? "rgba(11,26,46,1)"
                            : isDone
                              ? "rgba(233,193,101,1)"
                              : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="max-w-[13rem] text-sm font-medium leading-5 transition-colors duration-300"
                        style={{ color: isActive ? "white" : "rgba(255,255,255,0.55)" }}
                      >
                        {card.step}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                key={activeProcess}
                className="relative mt-10 overflow-hidden rounded-[1.7rem] border border-white/10 p-8"
              >
                <Image
                  src={processCards[activeProcess].image}
                  alt={processCards[activeProcess].step}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,24,0.92)_0%,rgba(4,12,24,0.82)_42%,rgba(4,12,24,0.55)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,179,35,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(157,183,222,0.16),transparent_30%)]" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-[rgba(157,183,222,0.12)] text-[var(--blue-soft)] backdrop-blur-sm">
                    {(() => {
                      const ActiveIcon = processCards[activeProcess].icon;
                      return <ActiveIcon size={26} />;
                    })()}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold-soft)]">
                      {processCards[activeProcess].front}
                    </p>
                    <p className="mt-3 text-xl font-medium text-white">
                      {processCards[activeProcess].step}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/84">
                      {processCards[activeProcess].back}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-8">
          <SectionBackdrop
            src="/assets/tecnico_boya_costa.jpg"
            alt=""
            imageClassName="object-[center_35%]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.94),rgba(2,9,20,0.72)_36%,rgba(2,9,20,0.92))]"
          />
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
            <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
              <div className="space-y-7">
                <SectionHeading
                  eyebrow="Cotizar"
                  title="Conversemos un alcance tecnico claro, rapido y listo para evaluar."
                  description="Un solo punto de contacto para levantar necesidad, definir alcance y preparar una cotizacion seria."
                />
                <div className="grid gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(8,19,38,0.7)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tiempo de respuesta</p>
                    <p className="mt-3 text-2xl font-medium text-white">Respuesta comercial en menos de 48 horas.</p>
                  </div>
                  <div className="glass-panel flex items-center gap-4 rounded-[1.4rem] p-5">
                    <Mail className="text-[var(--blue-soft)]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Correo</p>
                      <p className="mt-1 text-white">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="glass-panel flex items-center gap-4 rounded-[1.4rem] p-5">
                    <Phone className="text-[var(--blue-soft)]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Telefono</p>
                      <p className="mt-1 text-white">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="glass-panel flex items-center gap-4 rounded-[1.4rem] p-5">
                    <MapPinned className="text-[var(--blue-soft)]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Base Operacional</p>
                      <p className="mt-1 text-white">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form
                  className="rounded-[1.7rem] border border-white/10 bg-[#061321]/72 p-7"
                  onSubmit={handleContactSubmit}
                >
                  <div className="mb-6 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--blue-soft)]">Formulario Ejecutivo</p>
                      <p className="mt-3 text-2xl font-medium text-white">Cuéntanos el alcance y te contactamos.</p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      className="field-input"
                      placeholder="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      required
                    />
                    <input
                      className="field-input"
                      placeholder="Empresa"
                      name="company"
                      value={formData.company}
                      onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                    />
                    <input
                      className="field-input"
                      placeholder="Correo"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      required
                    />
                    <input
                      className="field-input"
                      placeholder="Telefono"
                      name="phone"
                      value={formData.phone}
                      onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                    />
                    <select
                      className="field-input md:col-span-2"
                      name="service"
                      value={formData.service}
                      onChange={(event) => setFormData((current) => ({ ...current, service: event.target.value }))}
                      required
                    >
                      <option value="" disabled>
                        Servicio
                      </option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    <textarea
                      className="field-input min-h-36 md:col-span-2"
                      placeholder="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                      required
                    />
                  </div>
                  {formStatus ? <p className="mt-4 text-sm text-slate-200">{formStatus}</p> : null}
                  <button type="submit" className="btn-primary mt-6 w-full justify-center" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
