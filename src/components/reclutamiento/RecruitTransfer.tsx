"use client";

import { motion } from "framer-motion";
import { PhoneTransfer, FileText, Star } from "@phosphor-icons/react";

const features = [
  { icon: PhoneTransfer, title: "Transferencia en caliente", description: "Si un candidato cumple todos los criterios, el agente lo transfiere directamente al reclutador humano sin colgar la llamada." },
  { icon: FileText, title: "Resumen IA pre-transferencia", description: "El reclutador recibe un resumen instantáneo: experiencia, expectativa salarial, disponibilidad y score del candidato antes de tomar la llamada." },
  { icon: Star, title: "Escalamiento inteligente", description: "Define reglas: transferir solo candidatos con score >80%, o que cumplan requisitos mínimos. El resto se archiva con su transcripción." },
];

export default function RecruitTransfer() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Handoff humano</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Del agente IA al reclutador{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">sin fricción</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Cuando un candidato sobresale, la IA lo conecta directamente con tu equipo — con todo el contexto que necesitan.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <f.icon size={20} weight="duotone" className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-6">
              {/* Transfer mockup */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                  <span className="text-xs text-[var(--success)] font-medium">Transferencia en curso</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-1">
                      <span className="text-xs font-bold text-[var(--primary)]">IA</span>
                    </div>
                    <p className="text-[10px] text-gray-500">Agente IA</p>
                  </div>
                  <div className="flex-1 mx-4 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent)] animate-pulse" />
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mx-auto mb-1">
                      <span className="text-xs font-bold text-[var(--accent)]">RH</span>
                    </div>
                    <p className="text-[10px] text-gray-500">Reclutador</p>
                  </div>
                </div>
              </div>

              {/* AI Summary */}
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Resumen IA para el reclutador</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Candidato</span><span className="font-medium">María García López</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Vacante</span><span className="font-medium">Analista Sr. Datos</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Experiencia</span><span className="font-medium text-[var(--success)]">4 años — SQL, Python</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Salario esperado</span><span className="font-medium">$35,000 MXN</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Disponibilidad</span><span className="font-medium">Inmediata</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Score</span><span className="font-bold text-[var(--primary)]">92/100</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
