"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { localeLabels, localizePath, locales, stripLocale, type Locale } from "@/i18n/config";

type NavClientProps = {
  locale: Locale;
  items: { label: string; href: string }[];
  homeHref: string;
  labels: { openMenu: string; closeMenu: string; switchLanguage: string };
};

function LanguageSwitch({ locale, label, className = "" }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname() ?? "/";
  const basePath = stripLocale(pathname);
  const target = locales.find((item) => item !== locale) ?? locale;

  return (
    <Link
      href={localizePath(target, basePath)}
      hrefLang={localeLabels[target].htmlLang}
      lang={localeLabels[target].htmlLang}
      aria-label={label}
      title={label}
      className={`inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:border-[rgba(240,179,35,0.45)] hover:text-[var(--gold-soft)] ${className}`}
    >
      <Globe size={15} aria-hidden="true" />
      <span aria-hidden="true">
        <span className="text-white/45">{localeLabels[locale].short}</span>
        <span className="mx-1 text-white/25">/</span>
        {localeLabels[target].short}
      </span>
    </Link>
  );
}

export function NavClient({ locale, items, homeHref, labels }: NavClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "px-4 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center transition-all duration-500 ${
          scrolled
            ? "rounded-full border border-white/10 bg-slate-950/55 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "px-5 py-4 md:px-8"
        }`}
      >
        <Link href={homeHref} className="min-w-0">
          <Logo compact priority className={scrolled ? "" : "border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"} />
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.28em] text-slate-200/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-self-end gap-3">
          <LanguageSwitch locale={locale} label={labels.switchLanguage} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? labels.closeMenu : labels.openMenu}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-4 mt-3 rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.28em] text-slate-100/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
