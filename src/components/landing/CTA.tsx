"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";

export default function CTA() {
  const t = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[22px] bg-gradient-to-br from-[var(--primary)]/10 via-[var(--dark-card)] to-[var(--secondary)]/10 border border-[var(--primary)]/20 p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[var(--primary)]/15 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <Image
              src="/logo.svg"
              alt="Elyna"
              width={80}
              height={30}
              className="mx-auto mb-8"
            />

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              {t.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-8 py-3.5 rounded-[22px] hover:bg-[var(--primary-dark)] transition-all"
              >
                {t.cta.cta1}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t.cta.cta2}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
