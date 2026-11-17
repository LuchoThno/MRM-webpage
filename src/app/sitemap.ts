import type { MetadataRoute } from "next";

import { serviceSlugs, siteUrl, technologySlugs } from "@/data/site";
import { localizePath, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, priority: 0.7 })),
    ...technologySlugs.map((slug) => ({ path: `/technology/${slug}`, priority: 0.5 }))
  ];

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localizePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((item) => [item, `${siteUrl}${localizePath(item, path)}`]))
      }
    }))
  );
}
