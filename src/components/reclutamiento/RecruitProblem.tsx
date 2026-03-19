"use client";

import { motion } from "framer-motion";
import { Clock, PhoneX, UsersThree, FunnelSimple } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

const icons = [Clock, PhoneX, UsersThree, FunnelSimple];
const colors = ["var(--danger)", "var(--warning)", "var(--primary)", "var(--secondary)"];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function RecruitProblem() {
  const t = useTranslation();

  const problems = [
    { icon: icons[0], ...t.recruit.problem.p1, color: colors[0] },
    { icon: icons[1], ...t.recruit.problem.p2, color: colors[1] },
    { icon: icons[2], ...t.recruit.problem.p3, color: colors[2] },
    { icon: icons[3], ...t.recruit.problem.p4, color: colors[3] },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--danger)] text-sm font-semibold uppercase tracking-wider">{t.recruit.problem.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.recruit.problem.title1}
            <span className="bg-gradient-to-r from-[var(--danger)] to-[var(--warning)] bg-clip-text text-transparent">{t.recruit.problem.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.recruit.problem.subtitle}</p>
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
