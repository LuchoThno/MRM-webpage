import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { technologies } from "@/data/site";

export function generateStaticParams() {
  return technologies.map((technology) => ({ slug: technology.slug }));
}

export default async function TechnologyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const technology = technologies.find((item) => item.slug === slug);

  if (!technology) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#020914] px-6 pb-24 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/#tecnologia" className="text-xs uppercase tracking-[0.35em] text-[#8fd9ff]">
            Volver a tecnologia
          </Link>
          <div className="mt-8 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#061321]">
            <div className="h-72 bg-[radial-gradient(circle_at_top,rgba(0,174,239,0.24),transparent_35%),linear-gradient(180deg,#0c4477,#020914)]" />
            <div className="p-8 md:p-12">
              <h1 className="text-4xl font-semibold text-white md:text-6xl">{technology.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300/80">{technology.description}</p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Profundidad</p>
                  <p className="mt-3 text-2xl text-white">{technology.depth}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Motores</p>
                  <p className="mt-3 text-2xl text-white">{technology.thrusters}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Camara</p>
                  <p className="mt-3 text-2xl text-white">{technology.camera}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#04111c] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Velocidad / Luces</p>
                  <p className="mt-3 text-2xl text-white">
                    {technology.speed} / {technology.lights}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
