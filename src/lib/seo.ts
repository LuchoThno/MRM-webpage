import type { Metadata } from "next";

import { contactInfo, isLogisticsSlug, serviceSlugs, siteUrl } from "@/data/site";
import { localeLabels, localizePath, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const siteName = "MRM Magallanes ROV Marine";

export function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

/** Canonical + hreflang alternates for a path that exists in every language. */
export function buildAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localizePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((item) => [localeLabels[item].htmlLang, localizePath(item, path)])),
      "x-default": localizePath("es", path)
    }
  };
}

export function ogImage(locale: Locale) {
  return {
    url: `/og/og-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: getDictionary(locale).meta.ogImageAlt
  };
}

/** Company data shared by every page (Organization + local business). */
export function organizationJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "Magallanes ROV Marine",
    alternateName: "MRM",
    url: absoluteUrl(localizePath(locale, "/")),
    logo: `${siteUrl}/mrm-logo.png`,
    image: `${siteUrl}/og/og-${locale}.jpg`,
    description: dict.meta.orgDescription,
    email: contactInfo.email,
    slogan: "Vis Manet, Locus Tenetur",
    inLanguage: localeLabels[locale].htmlLang,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Punta Arenas",
      addressRegion: "Magallanes y de la Antártica Chilena",
      addressCountry: "CL"
    },
    areaServed: { "@type": "Country", name: "Chile" },
    knowsAbout: dict.meta.keywords,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.servicesSection.eyebrow,
      itemListElement: serviceSlugs.map((slug) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: dict.services[slug].title,
          url: absoluteUrl(localizePath(locale, `/services/${slug}`))
        }
      }))
    }
  };
}

export function serviceJsonLd(locale: Locale, slug: (typeof serviceSlugs)[number], image: string) {
  const dict = getDictionary(locale);
  const service = dict.services[slug];
  const url = absoluteUrl(localizePath(locale, `/services/${slug}`));

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.detail,
      url,
      image: absoluteUrl(image),
      inLanguage: localeLabels[locale].htmlLang,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      audience: { "@type": "BusinessAudience", audienceType: service.sectors.join(", ") }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.meta.breadcrumbHome, item: absoluteUrl(localizePath(locale, "/")) },
        {
          "@type": "ListItem",
          position: 2,
          name: isLogisticsSlug(slug) ? dict.meta.breadcrumbLogistics : dict.meta.breadcrumbServices,
          item: absoluteUrl(localizePath(locale, isLogisticsSlug(slug) ? "/#logistica" : "/#servicios"))
        },
        { "@type": "ListItem", position: 3, name: service.title, item: url }
      ]
    }
  ];
}
