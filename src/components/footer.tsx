import Link from "next/link";

import { Logo } from "@/components/logo";
import { contactInfo, navigation, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020a14]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-md text-sm leading-7 text-slate-300/75">
            Vis Manet, Locus Tenetur. Ingenieria submarina, robotica y evidencia tecnica para activos
            criticos a lo largo de Chile.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">Navegacion</p>
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-200/80 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">Contacto</p>
            <div className="space-y-2 text-sm text-slate-200/80">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.location}</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">Redes</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-slate-200/80 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        Copyright {new Date().getFullYear()} MRM Magallanes ROV Marine. All rights reserved.
      </div>
    </footer>
  );
}
