"use client";

import { motion } from "framer-motion";
import {
  Buildings,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Car,
  ShieldCheck,
  Bank,
  HeartHalf,
  Briefcase,
} from "@phosphor-icons/react";

const industries = [
  { icon: Buildings, name: "Inmobiliarias", gradient: "from-blue-500 to-cyan-400" },
  { icon: Stethoscope, name: "Salud", gradient: "from-emerald-500 to-teal-400" },
  { icon: GraduationCap, name: "Educación", gradient: "from-purple-500 to-pink-400" },
  { icon: ShoppingCart, name: "E-commerce", gradient: "from-orange-500 to-yellow-400" },
  { icon: Car, name: "Automotriz", gradient: "from-red-500 to-orange-400" },
  { icon: ShieldCheck, name: "Seguros", gradient: "from-indigo-500 to-blue-400" },
  { icon: Bank, name: "Finanzas", gradient: "from-emerald-600 to-green-400" },
  { icon: HeartHalf, name: "Bienestar", gradient: "from-pink-500 to-rose-400" },
  { icon: Briefcase, name: "Servicios B2B", gradient: "from-slate-500 to-gray-400" },
];

const doubled = [...industries, ...industries];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            Industrias
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Diseñado para{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warning)] bg-clip-text text-transparent">
              tu industria
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde inmobiliarias hasta salud — Elyna se adapta a las necesidades
            de cada sector.
          </p>
        </motion.div>
      </div>

      <div className="relative group mb-4">
        <div className="flex gap-4 hover:[animation-play-state:paused]" style={{ animation: "marquee-left 30s linear infinite" }}>
          {doubled.map((ind, i) => (
            <div
              key={`r1-${i}`}
              className="shrink-0 flex items-center gap-3 px-6 py-4 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)]"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${ind.gradient}`}
              >
                <ind.icon size={18} weight="fill" className="text-white" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative group">
        <div className="flex gap-4 hover:[animation-play-state:paused]" style={{ animation: "marquee-right 30s linear infinite" }}>
          {[...doubled].reverse().map((ind, i) => (
            <div
              key={`r2-${i}`}
              className="shrink-0 flex items-center gap-3 px-6 py-4 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)]"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${ind.gradient}`}
              >
                <ind.icon size={18} weight="fill" className="text-white" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
