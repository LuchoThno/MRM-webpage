"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
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

import type { ServiceCard } from "@/data/content";
import { contactInfo, getServiceIcon, locations } from "@/data/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const processMedia = [
  { icon: ClipboardList, image: "/assets/monitor_control_rov_embarcacion.jpg" },
  { icon: HardHat, image: "/assets/tecnico_cable_embarcacion_01.jpg" },
  { icon: Camera, image: "/assets/inspeccion_helice_submarina.jpg" },
  { icon: FileCheck2, image: "/assets/plano_georreferenciacion_muestra.jpg" }
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

type HomePageProps = {
  locale: Locale;
  dict: Dictionary;
  services: ServiceCard[];
};

export function HomePage({ locale, dict, services }: HomePageProps) {
  const processCards = dict.process.steps.map((step, index) => ({ ...step, ...processMedia[index] }));
  const metrics = dict.metrics;
  const subseaServices = services.filter((service) => service.category === "subsea");
  const logisticsServices = services.filter((service) => service.category === "logistics");
  const t = dict.contact;
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
  }, [processPaused, processCards.length]);

  const processProgress = (activeProcess / (processCards.length - 1)) * 100;

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setFormStatus(t.missingFields);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? t.error);
      }

      setFormStatus(t.success);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : t.error;
      setFormStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <main className="relative overflow-hidden bg-[#020914] text-white">
        <section id="inicio" className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated/hero-rov-underwater.png"
              alt={dict.hero.imageAlt}
              fill
              sizes="100vw"
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
                  className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.32em] text-[var(--gold-soft)] sm:text-sm"
                >
                  <span aria-hidden="true" className="h-px w-10 bg-[var(--gold)]" />
                  {dict.hero.tagline}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="font-[family-name:var(--font-space)] text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-[3.4rem] lg:text-[3.7rem]"
                >
                  {dict.hero.title}{" "}
                  <span className="block font-medium text-slate-300/90">{dict.hero.subtitle}</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/80 md:text-xl"
                >
                  {dict.hero.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
                >
                  <Link href={localizePath(locale, "/#contacto")} className="btn-primary">
                    {dict.hero.primaryCta}
                  </Link>
                  <Link href={localizePath(locale, "/#servicios")} className="btn-secondary">
                    {dict.hero.secondaryCta}
                  </Link>
                  <Link
                    href={localizePath(locale, "/#logistica")}
                    className="inline-flex items-center gap-2 px-2 py-3 text-xs font-medium uppercase tracking-[0.28em] text-[var(--gold-soft)] transition hover:text-white"
                  >
                    {dict.hero.tertiaryCta}
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
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
                        alt={dict.hero.cardImageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,31,0.02),rgba(5,16,31,0.74))]" />
                    </div>
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#081523]/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-slate-200/84">
                      {dict.hero.cardBadge}
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{dict.hero.deliveryLabel}</p>
                    <p className="mt-3 text-base leading-7 text-slate-200/85">{dict.hero.deliveryValue}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-400">{dict.hero.scroll}</span>
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
                eyebrow={dict.about.eyebrow}
                title={dict.about.title}
                description={dict.about.description}
              />
              <div className="grid gap-4 sm:grid-cols-3">
                {dict.about.cards.map((card) => (
                  <div key={card.label} className="rounded-[1.6rem] border border-white/10 bg-[rgba(8,19,38,0.72)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{card.label}</p>
                    <p className="mt-3 text-lg font-medium text-white">{card.value}</p>
                  </div>
                ))}
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
                    alt={dict.about.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.12),rgba(1,7,13,0.88))]" />
                  <div className="absolute inset-x-0 bottom-0 grid gap-4 border-t border-white/10 bg-[rgba(4,17,34,0.78)] p-6 md:grid-cols-[1.15fr_0.85fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--blue-soft)]">{dict.about.teamLabel}</p>
                      <p className="mt-3 max-w-xl text-lg leading-8 text-slate-200/84">
                        {dict.about.teamText}
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <Shield className="text-[var(--gold)]" size={18} />
                        <span className="text-sm text-slate-100">{dict.about.safety}</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                        <MoveRight className="text-[var(--gold)]" size={18} />
                        <span className="text-sm text-slate-100">{dict.about.response}</span>
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
        eyebrow={dict.servicesSection.eyebrow}
        title={dict.servicesSection.title}
        description={dict.servicesSection.description}
      />
    </div>

    {/* Sectores atendidos */}
    <div className="flex flex-col gap-5 lg:items-end">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
        {dict.servicesSection.sectorsLabel}
      </p>

      <div className="flex max-w-lg flex-wrap gap-3 lg:justify-end">
        {dict.servicesSection.sectors.map((category) => (
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
    {subseaServices.map((service, index) => {
      const Icon = getServiceIcon(service.slug);

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
            href={localizePath(locale, `/services/${service.slug}`)}
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
                  {dict.servicesSection.viewService}
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

        <section id="logistica" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-8">
          <SectionBackdrop
            src="/assets/hero_barco_faena.jpg"
            alt=""
            imageClassName="object-[center_45%]"
            overlayClassName="bg-[linear-gradient(180deg,rgba(2,9,20,0.94),rgba(2,9,20,0.72)_36%,rgba(2,9,20,0.92))]"
          />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SectionHeading
              eyebrow={dict.logisticsSection.eyebrow}
              title={dict.logisticsSection.title}
              description={dict.logisticsSection.description}
            />
            <div className="rounded-[1.8rem] border border-[rgba(240,179,35,0.22)] bg-[linear-gradient(180deg,rgba(240,179,35,0.08),rgba(6,19,33,0.9))] p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--gold-soft)]">{dict.logisticsSection.coverageLabel}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{dict.logisticsSection.coverageValue}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300/80">{dict.logisticsSection.coverageNote}</p>
              <ul className="mt-5 space-y-2">
                {dict.logisticsSection.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-3 text-sm text-slate-100">
                    <CheckCircle2 size={16} className="shrink-0 text-[var(--gold-soft)]" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2">
            {logisticsServices.map((service, index) => {
              const Icon = getServiceIcon(service.slug);
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link
                    href={localizePath(locale, `/services/${service.slug}`)}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(7,21,36,0.88)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[rgba(240,179,35,0.3)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex gap-5 p-6 sm:p-7">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(4,17,34,0.65)] text-[var(--gold-soft)]">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-medium leading-snug text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300/80">{service.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--gold-soft)]">
                        {dict.logisticsSection.viewService}
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
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
              eyebrow={dict.coverage.eyebrow}
              title={dict.coverage.title}
              description={dict.coverage.description}
            />

            <div className="glass-panel rounded-[2rem] p-6">
              <div className="relative h-[460px] overflow-hidden rounded-[1.6rem] sm:h-[520px] border border-white/10 bg-[linear-gradient(180deg,#0c2445,#061223)]">
                <div className="absolute left-5 top-5 z-10 max-w-[16rem] overflow-hidden rounded-[1.25rem] border border-[rgba(240,179,35,0.18)] bg-[linear-gradient(180deg,rgba(7,21,36,0.96),rgba(7,21,36,0.82))] px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-md">
                  <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,var(--gold),rgba(240,179,35,0.18))]" />
                  <p className="pl-3 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold-soft)]">
                    {dict.coverage.badgeEyebrow}
                  </p>
                  <p className="pl-3 pt-1 text-sm font-medium tracking-[0.08em] text-white">
                    {dict.coverage.badgeTitle}
                  </p>
                </div>
                <div className="absolute inset-x-2 bottom-4 top-24 flex items-center justify-center sm:inset-8">
                  <div className="relative aspect-square w-full max-w-[28.5rem]">
                    <Image
                      src="/cl.svg"
                      alt={dict.coverage.mapAlt}
                      fill
                      sizes="(max-width: 1024px) 80vw, 456px"
                      className="object-contain opacity-95"
                    />
                    {locations.map((location, index) => (
                      <motion.div
                        key={location.city}
                        initial={{ opacity: 0.3, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ top: location.top, left: location.left }}
                      >
                        <span className="absolute -left-0.5 -top-0.5 h-6 w-6 animate-ping rounded-full bg-[rgba(240,179,35,0.16)] motion-reduce:animate-none" />
                        <span className="relative block h-5 w-5 rounded-full border border-white/60 bg-[var(--gold)] shadow-[0_0_24px_rgba(240,179,35,0.34)]" />
                        <div
                          className={`absolute whitespace-nowrap rounded-full border border-white/10 bg-[#071524]/90 px-3 py-1 backdrop-blur-sm ${location.labelClass}`}
                        >
                          <p className="text-[0.6rem] uppercase tracking-[0.18em] text-white sm:text-[0.68rem] sm:tracking-[0.24em]">{location.city}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
                  eyebrow={dict.process.eyebrow}
                  title={dict.process.title}
                  description={dict.process.description}
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
                  eyebrow={t.eyebrow}
                  title={t.title}
                  description={t.description}
                />
                <div className="grid gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(8,19,38,0.7)] p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{t.responseLabel}</p>
                    <p className="mt-3 text-2xl font-medium text-white">{t.responseValue}</p>
                  </div>
                  <div className="glass-panel flex items-center gap-4 rounded-[1.4rem] p-5">
                    <Mail className="text-[var(--blue-soft)]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.emailLabel}</p>
                      <a href={contactInfo.mailtoHref} className="mt-1 block break-all text-white transition hover:text-[var(--gold-soft)]">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="glass-panel flex items-center gap-4 rounded-[1.4rem] p-5">
                    <MapPinned className="text-[var(--blue-soft)]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.baseLabel}</p>
                      <p className="mt-1 text-white">{t.location}</p>
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
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--blue-soft)]">{t.formEyebrow}</p>
                      <p className="mt-3 text-2xl font-medium text-white">{t.formTitle}</p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      className="field-input"
                      placeholder={t.fields.name}
                      aria-label={t.fields.name}
                      name="name"
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      required
                    />
                    <input
                      className="field-input"
                      placeholder={t.fields.company}
                      aria-label={t.fields.company}
                      name="company"
                      value={formData.company}
                      onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                    />
                    <input
                      className="field-input"
                      placeholder={t.fields.email}
                      aria-label={t.fields.email}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      required
                    />
                    <input
                      className="field-input"
                      placeholder={t.fields.phone}
                      aria-label={t.fields.phone}
                      name="phone"
                      value={formData.phone}
                      onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                    />
                    <select
                      className="field-input md:col-span-2"
                      name="service"
                      aria-label={t.fields.service}
                      value={formData.service}
                      onChange={(event) => setFormData((current) => ({ ...current, service: event.target.value }))}
                      required
                    >
                      <option value="" disabled>
                        {t.fields.service}
                      </option>
                      <optgroup label={t.fields.subseaGroup}>
                        {subseaServices.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t.fields.logisticsGroup}>
                        {logisticsServices.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    <textarea
                      className="field-input min-h-36 md:col-span-2"
                      placeholder={t.fields.message}
                      aria-label={t.fields.message}
                      name="message"
                      value={formData.message}
                      onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                      required
                    />
                  </div>
                  {formStatus ? (
                    <p className="mt-4 text-sm text-slate-200" role="status">
                      {formStatus}
                    </p>
                  ) : null}
                  <button type="submit" className="btn-primary mt-6 w-full justify-center" disabled={isSubmitting}>
                    {isSubmitting ? t.submitting : t.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
