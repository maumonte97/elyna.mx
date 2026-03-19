"use client";

import { motion } from "framer-motion";
import { MagicWand, Megaphone, PhoneIncoming, ListMagnifyingGlass, FlowArrow, WhatsappLogo } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Features() {
  const t = useTranslation();

  const features = [
    { icon: MagicWand, title: t.features.f1.title, description: t.features.f1.description, gradient: "from-[var(--primary)] to-[var(--primary-light)]" },
    { icon: Megaphone, title: t.features.f2.title, description: t.features.f2.description, gradient: "from-[var(--accent)] to-[var(--info)]" },
    { icon: PhoneIncoming, title: t.features.f3.title, description: t.features.f3.description, gradient: "from-[var(--secondary)] to-[var(--secondary-light)]" },
    { icon: ListMagnifyingGlass, title: t.features.f4.title, description: t.features.f4.description, gradient: "from-[var(--warning)] to-[var(--primary)]" },
    { icon: FlowArrow, title: t.features.f5.title, description: t.features.f5.description, gradient: "from-[var(--success)] to-[var(--accent)]" },
    { icon: WhatsappLogo, title: t.features.f6.title, description: t.features.f6.description, gradient: "from-[var(--success)] to-[var(--success-light)]" },
  ];

  return (
    <section id="producto" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">{t.features.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.features.title1}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.features.subtitle}</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp} className="group relative p-[1.875rem] rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-all duration-300 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-white/5">
                <feature.icon size={24} weight="duotone" className="text-white/80" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
