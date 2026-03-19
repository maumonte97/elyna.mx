"use client";

import { useLanguage, Locale } from "@/i18n/LanguageContext";

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-white/5 rounded-full p-0.5">
      {(["es", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            locale === l
              ? "bg-[var(--primary)] text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {l === "es" ? "ES" : "EN"}
        </button>
      ))}
    </div>
  );
}
