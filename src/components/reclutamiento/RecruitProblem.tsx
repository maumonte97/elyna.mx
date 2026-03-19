"use client";

import { motion } from "framer-motion";
import { Clock, PhoneX, UsersThree, TrendDown } from "@phosphor-icons/react";

const problems = [
  { icon: Clock, value: "70%", label: "del tiempo de RRHH se va en llamadas de filtro que no avanzan", color: "var(--danger)", source: "SHRM, 2024" },
  { icon: PhoneX, value: "5+ días", label: "promedio para contactar a un candidato después de aplicar", color: "var(--warning)", source: "Glassdoor Research" },
  { icon: UsersThree, value: "60%", label: "de los candidatos abandonan el proceso por falta de respuesta rápida", color: "var(--primary)", source: "CareerBuilder" },
  { icon: TrendDown, value: "$4,700", label: "USD costo promedio por contratación en México", color: "var(--secondary)", source: "SHRM Benchmarking" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function RecruitProblem() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--danger)] text-sm font-semibold uppercase tracking-wider">El problema</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            El reclutamiento masivo{" "}
            <span className="bg-gradient-to-r from-[var(--danger)] to-[var(--warning)] bg-clip-text text-transparent">está roto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tu equipo de RRHH pierde horas en llamadas repetitivas mientras los mejores candidatos se van con la competencia.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <motion.div key={problem.label} variants={fadeUp} className="text-center p-6 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${problem.color}20` }}>
                <problem.icon size={22} weight="duotone" style={{ color: problem.color }} />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-2" style={{ background: `linear-gradient(135deg, ${problem.color}, white)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{problem.value}</p>
              <p className="text-sm text-gray-400 mb-2">{problem.label}</p>
              <p className="text-[10px] text-gray-600 italic">{problem.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
