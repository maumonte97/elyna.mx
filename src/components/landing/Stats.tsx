"use client";

import { motion } from "framer-motion";
import { PhoneCall, Clock, Globe, Lightning } from "@phosphor-icons/react";

const stats = [
  { icon: PhoneCall, value: "10M+", label: "Llamadas procesadas", color: "var(--primary)" },
  { icon: Clock, value: "24/7", label: "Disponibilidad total", color: "var(--accent)" },
  { icon: Globe, value: "30+", label: "Idiomas soportados", color: "var(--secondary)" },
  { icon: Lightning, value: "30min", label: "Setup completo", color: "var(--warning)" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center p-6 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                <stat.icon size={22} weight="duotone" style={{ color: stat.color }} />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-1" style={{ background: `linear-gradient(135deg, ${stat.color}, white)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
