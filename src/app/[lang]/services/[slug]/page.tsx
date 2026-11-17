import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import type { Metadata } from "next";

import { getServices } from "@/data/content";
import { serviceSlugs } from "@/data/site";
import { isLocale, localizePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => serviceSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const service = getServices(lang).find((item) => item.slug === slug);
  if (!service) return {};
  const path = `/services/${slug}`;

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: localizePath(lang, path),
      languages: { es: localizePath("es", path), en: localizePath("en", path), "x-default": localizePath("es", path) }
    }
  };
}

export default async function ServicePage({ params }: PageProps<"/[lang]/services/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const service = getServices(lang).find((item) => item.slug === slug);

  if (!service) notFound();
  const t = getDictionary(lang).servicePage;

  const Icon = service.icon;

  return (
    <>
      <Nav locale={lang} />
      <main className="min-h-screen bg-[#020914] px-6 pb-24 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href={localizePath(lang, "/#servicios")}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#8fd9ff] transition hover:text-white"
          >
            <ArrowLeft size={14} />
            {t.back}
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
            <div className="relative min-h-[24rem] overflow-hidden border-b border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,11,21,0.14),rgba(3,11,21,0.72)_60%,rgba(3,11,21,0.92)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,179,35,0.14),transparent_25%),radial-gradient(circle_at_top_left,rgba(157,183,222,0.12),transparent_24%)]" />

              <div className="relative flex min-h-[24rem] flex-col justify-end p-8 md:p-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(4,17,34,0.54)] text-[#8fd9ff] backdrop-blur-sm">
                  <Icon size={30} />
                </div>
                <p className="mt-8 text-xs uppercase tracking-[0.38em] text-[var(--gold-soft)]">
                  {service.sectors.join(" / ")}
                </p>
                <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white md:text-6xl">{service.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/84">{service.summary}</p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-[#8fd9ff]">{t.overview}</p>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300/82">{service.detail}</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex gap-3 rounded-[1.35rem] border border-white/10 bg-[#061321] p-4">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--gold-soft)]" size={18} />
                        <p className="text-sm leading-7 text-slate-200/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.6rem] border border-white/10 bg-[#061321] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.sectors}</p>
                    <p className="mt-3 text-white">{service.sectors.join(", ")}.</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-[#061321] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.application}</p>
                    <p className="mt-3 text-white">{service.application}</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-[#061321] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.deliverable}</p>
                    <p className="mt-3 text-white">{service.deliverable}</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-[#061321] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.availability}</p>
                    <p className="mt-3 text-white">{service.availability}</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-[rgba(240,179,35,0.18)] bg-[linear-gradient(180deg,rgba(240,179,35,0.07),rgba(6,19,33,0.9))] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">{t.nextStep}</p>
                    <p className="mt-3 text-white">{t.nextStepText}</p>
                    <Link
                      href={localizePath(lang, "/#contacto")}
                      className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[var(--gold-soft)] transition hover:text-white"
                    >
                      {t.nextStepCta} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={lang} />
    </>
  );
}
