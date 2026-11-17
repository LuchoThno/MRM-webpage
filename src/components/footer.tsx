import Link from "next/link";

import { Logo } from "@/components/logo";
import { contactInfo, navigationAnchors, socialLinks } from "@/data/site";
import { localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.footer;

  return (
    <footer className="border-t border-white/10 bg-[#020a14]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-md text-sm leading-7 text-slate-300/75">
            {t.tagline}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">{t.navigation}</p>
          <div className="flex flex-col gap-3">
            {navigationAnchors.map((item) => (
              <Link key={item.href} href={localizePath(locale, item.href)} className="text-sm text-slate-200/80 transition hover:text-white">
                {dict.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">{t.contact}</p>
            <div className="space-y-2 text-sm text-slate-200/80">
              <a href={contactInfo.mailtoHref} className="block transition hover:text-white">
                {contactInfo.email}
              </a>
              <p>{dict.contact.location}</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">{t.social}</p>
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
        <span>© {new Date().getFullYear()} MRM Magallanes ROV Marine. {t.rights}</span>
        <span className="mx-3 text-slate-700">|</span>
        <span>{t.builtWith} </span>
        <Link
          href="https://github.com/LuchoThno"
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 transition hover:text-white"
        >
          LuchoThno
        </Link>
        <span> {t.role}</span>
      </div>
    </footer>
  );
}
