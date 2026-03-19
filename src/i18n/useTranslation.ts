"use client";

import { useLocale } from "./LanguageContext";
import { dictionaries, Dictionary } from "./dictionaries";

export function useTranslation() {
  const locale = useLocale();
  return dictionaries[locale] as Dictionary;
}
