import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { serviceMedia, serviceSlugs, technologySlugs, technologySpecs } from "@/data/site";

export function getServices(locale: Locale) {
  const dict = getDictionary(locale);
  return serviceSlugs.map((slug) => ({ slug, ...serviceMedia[slug], ...dict.services[slug] }));
}

/** Serializable service list (no icon components) for client components. */
export function getServiceCards(locale: Locale) {
  const dict = getDictionary(locale);
  return serviceSlugs.map((slug) => ({
    slug,
    image: serviceMedia[slug].image,
    title: dict.services[slug].title,
    summary: dict.services[slug].summary
  }));
}

export type ServiceCard = ReturnType<typeof getServiceCards>[number];

export function getTechnologies(locale: Locale) {
  const dict = getDictionary(locale);
  return technologySlugs.map((slug) => ({ slug, ...technologySpecs[slug], ...dict.technologies[slug] }));
}
