"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider locale="es">{children}</LanguageProvider>;
}
