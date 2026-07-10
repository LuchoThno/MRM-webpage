"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CirclePlay, Download, Mail, MapPinned, MoveRight, Phone, Shield, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Footer } from "@/components/footer";
import { HeroCanvas } from "@/components/hero-canvas";
import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";
import {
  clients,
  complementaryTechnology,
  galleryItems,
  locations,
  metrics,
  processSteps,
  serviceCategories,
  services,
  technologies
} from "@/data/site";

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
      <p className="text-xs uppercase tracking-[0.35em] text-[#8fd9ff]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-slate-300/78 md:text-lg">{description}</p>
    </div>
  );
}

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-[#020914]"
    >
      <div className="text-center">
        <div className="mx-auto mb-6 h-20 w-20 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/10 shadow-[0_0_60px_rgba(0,174,239,0.18)]" />
        <p className="font-[family-name:var(--font-space)] text-4xl font-bold tracking-[0.35em] text-white">MRM</p>
        <p className="mt-3 text-xs uppercase tracking-[0.45em] text-slate-300/80">Marine Robotics</p>
      </div>
    </motion.div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[60] hidden h-8 w-8 rounded-full border border-[#8fd9ff]/35 bg-[#00aeef]/10 backdrop-blur-sm xl:block"
      style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px)` }}
    />
  );
}

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1850);
    return () => window.clearTimeout(timer);
  }, []);

  const galleryGradient = useMemo(
    () => [
      "from-[#0a3f74] via-[#02111f] to-[#01070d]",
      "from-[#083b59] via-[#041B33] to-[#01070d]",
      "from-[#0f4475] via-[#03111f] to-[#02060a]",
      "from-[#0c274f] via-[#02111f] to-[#02060a]",
      "from-[#093b6f] via-[#031120] to-[#02111f]",
      "from-[#062845] via-[#02111f] to-[#02060a]"
    ],
    []
  );

  const galleryVisuals = [
    "/generated/hull-inspection-real.png",
    "/generated/port-structure-inspection.png",
    "/generated/team-deck-operations.png",
    "/generated/hero-rov-underwater.png",
    "/generated/hull-inspection-real.png",
    "/generated/port-structure-inspection.png"
  ];

  const techVisuals = [
    "/generated/hero-rov-underwater.png",
    "/generated/hull-inspection-real.png",
    "/generated/port-structure-inspection.png"
  ];

  return (
    <>
      {loading ? <Loader /> : null}
      <CustomCursor />
      <Nav />

      <main className="relative overflow-hidden bg-[#020914] text-white">
        <section id="inicio" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated/hero-rov-underwater.png"
              alt="ROV industrial trabajando bajo el agua"
              fill
              priority
              className="object-cover object-[72%_center] opacity-55"
            />
          </div>
          <HeroCanvas />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.14),transparent_22%),linear-gradient(90deg,rgba(2,9,20,0.92)_0%,rgba(2,9,20,0.66)_46%,rgba(2,9,20,0.8)_100%),linear-gradient(180deg,rgba(2,9,20,0.08),rgba(2,9,20,0.92)_78%,#020914)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(2,9,20,0.85))]" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 md:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <Logo compact className="w-fit bg-white/90 shadow-[0_24px_70px_rgba(0,0,0,0.35)]" priority />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 text-xs uppercase tracking-[0.45em] text-[#8fd9ff]"
                >
                  Ingenieria submarina premium para Chile
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="font-[family-name:var(--font-space)] text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                  Subsea operations
                  <span className="mt-4 block text-2xl font-normal tracking-[0.18em] text-slate-200 md:text-3xl">
                    Marine Robotics
                  </span>
                  <span className="mt-2 block text-lg uppercase tracking-[0.42em] text-[#FFC72C] md:text-xl">
                    Subsea Engineering
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/80 md:text-xl"
                >
                  Operaciones submarinas de alto estandar para puertos, acuicultura, navieras e industria
                  critica. Robotica, inspeccion y reportes tecnicos para decidir con precision y ejecutar con
                  confianza.
                </motion.p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["ROV Inspection", "Hull Cleaning", "USBL", "Technical Reports"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-slate-950/45 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-slate-200/82 backdrop-blur-xl"
                    >
                      {item}
                    </span>
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
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#FFC72C] to-transparent" />
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
                <div className="glass-panel overflow-hidden rounded-[2rem] p-6">
                  <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-[#8fd9ff]/60 to-transparent" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Live Feed</p>
                      <div className="relative mt-4 h-64 overflow-hidden rounded-[1.25rem]">
                        <Image
                          src="/generated/hull-inspection-real.png"
                          alt="Inspeccion de casco con ROV"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,27,51,0.12),rgba(1,6,12,0.88))] p-5" />
                        <div className="relative flex h-full items-end justify-between">
                          <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-[#8fd9ff]">ROV Deployment</p>
                            <p className="mt-2 text-2xl font-medium text-white">Skyring / Hull Inspection</p>
                          </div>
                          <CirclePlay className="text-white/85" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Operational Range</p>
                        <p className="mt-3 text-5xl font-semibold text-white">250 m</p>
                        <p className="mt-2 text-sm text-slate-300/70">Industrial fleet ready for Chilean subsea conditions.</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">National Response</p>
                        <p className="mt-3 text-2xl font-medium text-white">Magallanes to Valparaiso</p>
                        <p className="mt-2 text-sm text-slate-300/70">
                          Coordinacion tecnica, movilizacion y entregables digitales.
                        </p>
                      </div>
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
                className="mt-2 h-3 w-3 rounded-full bg-[#8fd9ff]"
              />
            </div>
          </div>
        </section>

        <section id="empresa" className="relative mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <SectionHeading
                eyebrow="Quienes Somos"
                title="Ingenieria submarina con criterio operacional y presencia nacional."
                description="MRM integra robotica, inspeccion, posicionamiento y analisis tecnico para ejecutar operaciones submarinas con seguridad, precision y capacidad de respuesta."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel rounded-[1.75rem] p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Capacidad</p>
                  <p className="mt-4 text-2xl font-medium text-white">Operaciones en puertos, acuicultura y activos submarinos criticos.</p>
                </div>
                <div className="glass-panel rounded-[1.75rem] p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Entrega</p>
                  <p className="mt-4 text-2xl font-medium text-white">Inspecciones digitales, informes ejecutivos y evidencia trazable.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.85 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,239,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,199,44,0.08),transparent_28%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,64,111,0.6),rgba(2,10,20,0.9))] p-5">
                  <div className="relative h-full min-h-[360px] overflow-hidden rounded-[1.4rem] border border-white/8">
                    <Image
                      src="/generated/team-deck-operations.png"
                      alt="Equipo MRM preparando despliegue de ROV"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.08),rgba(1,7,13,0.86))] p-6" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#8fd9ff]">Team / Field Operations</p>
                        <Shield className="text-[#FFC72C]" size={18} />
                      </div>
                      <p className="max-w-xs text-lg leading-8 text-slate-200/80">
                        Equipos especializados, protocolos operacionales y tecnologia desplegada para entornos
                        maritimos de alta exigencia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-[#041423]/80 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Cobertura Chile</p>
                  <div className="relative mt-6 h-[320px] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,#08233f,#020914)]">
                    <div className="absolute left-[45%] top-[6%] h-[82%] w-[13%] rounded-[50%] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03))] blur-[1px]" />
                    {locations.map((location) => (
                      <div key={location.city} className="absolute" style={{ top: location.top, left: location.left }}>
                        <span className="absolute -left-2 -top-2 h-4 w-4 animate-ping rounded-full bg-[#00AEEF]/30" />
                        <span className="relative block h-4 w-4 rounded-full border border-white/40 bg-[#00AEEF] shadow-[0_0_18px_rgba(0,174,239,0.55)]" />
                        <div className="absolute left-6 top-1 whitespace-nowrap text-xs uppercase tracking-[0.24em] text-slate-200/75">
                          {location.city}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Nuestros Servicios"
              title="Capacidades submarinas para una industria que no admite error."
              description="Cada servicio se diseña con foco operacional, trazabilidad y reporte tecnico. Las cards enlazan a fichas propias para crecer la arquitectura comercial desde el dia uno."
            />
            <div className="flex flex-wrap gap-3">
              {serviceCategories.map((category) => (
                <span key={category} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300/80">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.65, delay: index * 0.04 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group card-3d relative block min-h-[280px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,239,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,199,44,0.08),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#8fd9ff]">
                          <Icon size={26} />
                        </span>
                        <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl font-medium text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300/76">{service.summary}</p>
                      <div className="mt-auto flex items-center gap-2 pt-8 text-sm uppercase tracking-[0.28em] text-[#FFC72C]">
                        Ver pagina <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="tecnologia" className="relative mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionHeading
            eyebrow="Tecnologia"
            title="Flota y sistemas preparados para ejecutar bajo condicion real."
            description="Kirke, Skyring y Patagonia M8 articulan una base tecnologica escalable para inspeccion, survey y monitoreo submarino de alto estandar."
          />

          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {technologies.map((tech, index) => (
              <motion.article
                key={tech.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#061321]"
              >
                <div className="relative h-72 overflow-hidden border-b border-white/10 p-7">
                  <Image src={techVisuals[index]} alt={tech.imageLabel} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,63,116,0.15),rgba(2,9,20,0.82))]" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-slate-300/80">
                    {tech.imageLabel}
                  </div>
                  <div className="absolute inset-x-10 bottom-10 h-20 rounded-full bg-[#8fd9ff]/15 blur-3xl" />
                  <div className="absolute inset-x-12 bottom-14 h-24 rounded-[2rem] border border-white/12 bg-[#08111d]/45 backdrop-blur-sm" />
                </div>
                <div className="space-y-6 p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-medium text-white">{tech.title}</h3>
                    <Link href={`/technology/${tech.slug}`} className="text-xs uppercase tracking-[0.3em] text-[#8fd9ff]">
                      Ver especificaciones
                    </Link>
                  </div>
                  <p className="text-sm leading-7 text-slate-300/75">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-200/85">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Profundidad</p>
                      <p className="mt-2">{tech.depth}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Motores</p>
                      <p className="mt-2">{tech.thrusters}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Camara</p>
                      <p className="mt-2">{tech.camera}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Velocidad / Luces</p>
                      <p className="mt-2">
                        {tech.speed} / {tech.lights}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Tecnologia Complementaria"
              title="Instrumentacion para convertir inspeccion en inteligencia util."
              description="USBL, sensores multiparametricos y medicion ambiental completan una oferta capaz de responder tanto a continuidad operacional como a cumplimiento."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {complementaryTechnology.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="glass-panel rounded-[1.7rem] p-6">
                    <Icon className="text-[#8fd9ff]" size={24} />
                    <p className="mt-6 text-xl font-medium text-white">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300/75">
                      Integracion con reportes tecnicos, adquisicion de datos y criterio de decision en terreno.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Certificaciones"
                  title="Respaldo tecnico alineado a estandares de confianza internacional."
                  description="La presentacion de certificaciones debe proyectar rigor documental, trazabilidad y una posicion de socio confiable para activos de alto valor."
                />
                <div className="mt-8 flex flex-wrap gap-4">
                  <span className="rounded-full border border-[#FFC72C]/25 bg-[#FFC72C]/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#ffd978]">
                    Lloyd&apos;s Register
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300/80">
                    Audit-ready
                  </span>
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-[#061321] p-6">
                <div className="rounded-[1.4rem] border border-dashed border-[#8fd9ff]/35 bg-[linear-gradient(180deg,rgba(0,174,239,0.12),rgba(255,255,255,0.02))] p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8fd9ff]">Certificate Preview</p>
                  <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-[#02101f] p-8">
                    <p className="text-lg font-medium text-white">Lloyd&apos;s Register</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300/75">
                      Espacio listo para incorporar el PDF real y su previsualizacion institucional.
                    </p>
                  </div>
                  <Link href="#" className="btn-secondary mt-6 inline-flex">
                    <Download size={16} />
                    Descargar PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <SectionHeading
            eyebrow="Galeria"
            title="Evidencia visual pensada para confianza comercial y lectura tecnica."
            description="La galeria mezcla fotos y video para demostrar trabajo real, control operacional y cercania al entorno maritimo donde MRM opera."
          />

          <div className="mt-14 columns-1 gap-5 md:columns-2 xl:columns-3">
            {galleryItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className="group relative mb-5 block w-full overflow-hidden rounded-[1.8rem] border border-white/10 text-left"
                onClick={() => setActiveGallery(index)}
              >
                <div className="absolute inset-0">
                  <Image src={galleryVisuals[index]} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${galleryGradient[index % galleryGradient.length]} opacity-35`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,22,0.08),rgba(3,12,22,0.82))]" />
                </div>
                <div className="relative flex min-h-[300px] flex-col justify-between p-6">
                  <span className="inline-flex w-fit rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-slate-200/80">
                    {item.type}
                  </span>
                  <div>
                    <p className="text-2xl font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#8fd9ff]">Abrir en lightbox</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionHeading
              eyebrow="Cobertura Nacional"
              title="Presencia estrategica en nodos maritimos clave de Chile."
              description="La cobertura comunica capacidad de despliegue, conocimiento local y solvencia operacional para clientes que requieren rapidez, control y continuidad."
            />

            <div className="glass-panel rounded-[2rem] p-7">
              <div className="relative h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#072344,#020914)]">
                <div className="absolute left-[46%] top-[6%] h-[82%] w-[10%] rounded-[40%] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 }}
                    className="absolute"
                    style={{ top: location.top, left: location.left }}
                  >
                    <span className="absolute -left-3 -top-3 h-6 w-6 animate-ping rounded-full bg-[#00AEEF]/20" />
                    <span className="relative block h-6 w-6 rounded-full border border-white/50 bg-[#00AEEF]" />
                    <div className="absolute left-8 top-1 whitespace-nowrap">
                      <p className="text-sm uppercase tracking-[0.28em] text-white">{location.city}</p>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{location.region}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Proceso de Trabajo"
              title="Una metodologia clara para ejecutar y reportar sin friccion."
              description="La experiencia comercial debe mostrar un proceso ordenado, confiable y facil de auditar para equipos tecnicos y ejecutivos."
            />
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step} className="group rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#8fd9ff]/30 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#041B33] text-sm font-semibold text-[#8fd9ff]">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-medium text-white">{step}</p>
                      {index < processSteps.length - 1 ? <MoveRight className="text-[#FFC72C]" size={18} /> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clientes" className="overflow-hidden border-y border-white/10 bg-[#03111f] py-10">
          <div className="marquee">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client}-${index}`} className="mx-5 flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4">
                  <div className="h-2 w-2 rounded-full bg-[#8fd9ff]" />
                  <span className="whitespace-nowrap text-sm uppercase tracking-[0.32em] text-slate-200/78">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Contacto"
                title="Conversemos un alcance tecnico listo para cotizar."
                description="La seccion final debe sentirse tan premium como el hero: clara, ejecutiva y preparada para convertir una consulta en una oportunidad seria."
              />
              <div className="space-y-4">
                <div className="glass-panel flex items-center gap-4 rounded-[1.6rem] p-5">
                  <Mail className="text-[#8fd9ff]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Correo</p>
                    <p className="mt-1 text-white">contacto@magallanesrovmarine.cl</p>
                  </div>
                </div>
                <div className="glass-panel flex items-center gap-4 rounded-[1.6rem] p-5">
                  <Phone className="text-[#8fd9ff]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Telefono</p>
                    <p className="mt-1 text-white">+56 9 8765 4321</p>
                  </div>
                </div>
                <div className="glass-panel flex items-center gap-4 rounded-[1.6rem] p-5">
                  <MapPinned className="text-[#8fd9ff]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Base Operacional</p>
                    <p className="mt-1 text-white">Punta Arenas / Cobertura Nacional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.84fr]">
              <form className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-7">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="field-input" placeholder="Nombre" />
                  <input className="field-input" placeholder="Empresa" />
                  <input className="field-input" placeholder="Correo" type="email" />
                  <input className="field-input" placeholder="Telefono" />
                  <select className="field-input md:col-span-2" defaultValue="">
                    <option value="" disabled>
                      Servicio
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <textarea className="field-input min-h-36 md:col-span-2" placeholder="Mensaje" />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full justify-center">
                  Enviar Solicitud
                </button>
              </form>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/10 bg-[#061321] p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Mapa</p>
                  <div className="mt-5 h-64 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.18),transparent_28%),linear-gradient(180deg,#072344,#020914)] p-5">
                    <div className="flex h-full items-end justify-between rounded-[1.2rem] border border-dashed border-white/10 p-4">
                      <p className="max-w-[10rem] text-sm leading-7 text-slate-300/75">Placeholder listo para integrar Google Maps o mapa vectorial propio.</p>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[#8fd9ff]">
                        Chile
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-[#061321] p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Canales Rapidos</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Link href="https://wa.me/56987654321" className="btn-secondary justify-center">
                      WhatsApp
                    </Link>
                    <Link href="mailto:contacto@magallanesrovmarine.cl" className="btn-secondary justify-center">
                      Correo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {activeGallery !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020914]/92 p-6 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#05101d] p-6">
            <button
              type="button"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
              onClick={() => setActiveGallery(null)}
              aria-label="Cerrar galeria"
            >
              <X size={18} />
            </button>
            <div className={`rounded-[1.5rem] bg-gradient-to-br ${galleryGradient[activeGallery % galleryGradient.length]} p-8`}>
              <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.2rem] p-8">
                <Image
                  src={galleryVisuals[activeGallery]}
                  alt={galleryItems[activeGallery].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,22,0.08),rgba(3,12,22,0.85))]" />
                <span className="mb-4 inline-flex w-fit rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200/80">
                  {galleryItems[activeGallery].type}
                </span>
                <p className="relative text-4xl font-medium text-white">{galleryItems[activeGallery].title}</p>
                <p className="relative mt-4 max-w-2xl text-base leading-8 text-slate-200/76">
                  Lightbox listo para conectar imagenes y video reales de operaciones MRM cuando se agreguen los
                  assets finales del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
