import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { services } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#020914] px-6 pb-24 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/#servicios" className="text-xs uppercase tracking-[0.35em] text-[#8fd9ff]">
            Volver a servicios
          </Link>
          <div className="mt-8 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#8fd9ff]">
              <Icon size={30} />
            </div>
            <h1 className="mt-8 text-4xl font-semibold text-white md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300/80">{service.detail}</p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#061321] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Aplicacion</p>
                <p className="mt-3 text-white">Puertos, navieras, acuicultura e infraestructura critica.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-[#061321] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Salida</p>
                <p className="mt-3 text-white">Evidencia digital, observaciones tecnicas y recomendaciones accionables.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-[#061321] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Disponibilidad</p>
                <p className="mt-3 text-white">Operaciones coordinadas para respuesta nacional 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
