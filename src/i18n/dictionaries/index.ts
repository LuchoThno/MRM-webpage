import type { Locale } from "@/i18n/config";

import en from "./en";
import es, { type Dictionary } from "./es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
