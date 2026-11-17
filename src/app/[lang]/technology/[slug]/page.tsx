import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { getTechnologies } from "@/data/content";
import { technologySlugs } from "@/data/site";
import { isLocale, localizePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => technologySlugs.map((slug) => ({ lang, slug })));
}

export default async function TechnologyPage({ params }: PageProps<"/[lang]/technology/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const technology = getTechnologies(lang).find((item) => item.slug === slug);

  if (!technology) notFound();
  const t = getDictionary(lang).technologyPage;

  return (
    <>
      <Nav locale={lang} />
      <main className="min-h-screen bg-[#020914] px-6 pb-24 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href={localizePath(lang, "/")} className="text-xs uppercase tracking-[0.35em] text-[#8fd9ff]">
            {t.back}
          </Link>
          <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#061321]">
            <div className="h-72 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.24),transparent_35%),linear-gradient(180deg,#0c4477,#020914)]" />
            <div className="p-8 md:p-12">
              <h1 className="text-4xl font-semibold text-white md:text-6xl">{technology.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300/80">{technology.description}</p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.depth}</p>
                  <p className="mt-3 text-2xl text-white">{technology.depth}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.thrusters}</p>
                  <p className="mt-3 text-2xl text-white">{technology.thrusters}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.camera}</p>
                  <p className="mt-3 text-2xl text-white">{technology.camera}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{t.speedLights}</p>
                  <p className="mt-3 text-2xl text-white">
                    {technology.speed} / {technology.lights}
                  </p>
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
