"use client";

import { motion } from "framer-motion";
import { Storefront, Headset, Truck, Buildings, HardHat, GraduationCap } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

const icons = [Storefront, Headset, Truck, Buildings, HardHat, GraduationCap];
const colors = ["var(--primary)", "var(--accent)", "var(--secondary)", "var(--warning)", "var(--success)", "var(--info)"];

export default function RecruitUseCases() {
  const t = useTranslation();

  const ucKeys = [
    t.recruit.useCases.uc1,
    t.recruit.useCases.uc2,
    t.recruit.useCases.uc3,
    t.recruit.useCases.uc4,
    t.recruit.useCases.uc5,
    t.recruit.useCases.uc6,
  ];

  const useCases = ucKeys.map((uc, i) => ({
    icon: icons[i],
    title: uc.title,
    description: uc.description,
    metric: uc.metric,
    color: colors[i],
  }));

  return (
    <section id="soluciones" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">{t.recruit.useCases.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.recruit.useCases.title1}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">{t.recruit.useCases.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.recruit.useCases.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row items-center gap-6 p-6 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${uc.color}15` }}>
                <uc.icon size={28} weight="duotone" style={{ color: uc.color }} />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-semibold mb-1">{uc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{uc.description}</p>
              </div>

              {/* Metric badge */}
              <div className="shrink-0">
                <span
                  className="inline-block text-sm font-bold px-4 py-2 rounded-full"
                  style={{ backgroundColor: `${uc.color}15`, color: uc.color }}
                >
                  {uc.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
