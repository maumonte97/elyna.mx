"use client";

import { useLocale } from "./LanguageContext";
import { dictionaries, Dictionary } from "./dictionaries";

export function useTranslation(): Dictionary {
  const locale = useLocale();
  return dictionaries[locale];
}
