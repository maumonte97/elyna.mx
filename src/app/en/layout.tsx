"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider locale="en">{children}</LanguageProvider>;
}
