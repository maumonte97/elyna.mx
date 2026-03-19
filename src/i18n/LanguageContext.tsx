"use client";

import { createContext, useContext, ReactNode } from "react";

export type Locale = "es" | "en";

const LanguageContext = createContext<Locale>("es");

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LanguageContext.Provider value={locale}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
