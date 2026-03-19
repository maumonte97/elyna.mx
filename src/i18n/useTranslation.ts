"use client";

import { useLanguage } from "./LanguageContext";
import { dictionaries, Dictionary } from "./dictionaries";

export function useTranslation(): Dictionary {
  const { locale } = useLanguage();
  return dictionaries[locale];
}
