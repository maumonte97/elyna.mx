"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LanguageContext";

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();

  function getAlternatePath() {
    if (locale === "es") {
      // Spanish → English: add /en prefix
      return `/en${pathname}`;
    } else {
      // English → Spanish: remove /en prefix
      return pathname.replace(/^\/en/, "") || "/";
    }
  }

  return (
    <div className="flex items-center bg-white/5 rounded-full p-0.5">
      <Link
        href={locale === "es" ? pathname : (pathname.replace(/^\/en/, "") || "/")}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          locale === "es"
            ? "bg-[var(--primary)] text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        ES
      </Link>
      <Link
        href={locale === "en" ? pathname : `/en${pathname}`}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
          locale === "en"
            ? "bg-[var(--primary)] text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
