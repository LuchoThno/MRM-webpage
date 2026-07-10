"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigation } from "@/data/site";
import { Logo } from "@/components/logo";

export function Nav() {
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
        <Link href="#inicio" className="min-w-0">
          <Logo compact priority className={scrolled ? "" : "border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.22)]"} />
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.28em] text-slate-200/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden w-[7.8rem] lg:block" />

        <button
          type="button"
          className="col-start-3 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="mx-4 mt-3 rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
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
