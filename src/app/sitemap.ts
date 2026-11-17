import type { MetadataRoute } from "next";

import { serviceSlugs } from "@/data/site";
import { localizePath, locales } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, priority: 0.8 }))
  ];

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizePath(locale, path)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((item) => [item, absoluteUrl(localizePath(item, path))]))
      }
    }))
  );
}
