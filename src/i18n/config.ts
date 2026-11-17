export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeLabels: Record<Locale, { short: string; name: string; htmlLang: string; ogLocale: string }> = {
  es: { short: "ES", name: "Español", htmlLang: "es", ogLocale: "es_CL" },
  en: { short: "EN", name: "English", htmlLang: "en", ogLocale: "en_US" }
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Builds a public URL path for a locale. Spanish (default) lives at the root,
 * English under /en. Accepts "/", "/#anchor" or "/some/path".
 */
export function localizePath(locale: Locale, path: string = "/"): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Removes any locale prefix (public "/en" or internal "/es") from a pathname. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname || "/";
}
