"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, Clock } from "@phosphor-icons/react";

const candidates = [
  { name: "María García L.", role: "Analista Sr.", score: 92, exp: "4 años", salary: "$35,000", status: "qualified" },
  { name: "Carlos Mendoza R.", role: "Analista Sr.", score: 85, exp: "3 años", salary: "$30,000", status: "qualified" },
  { name: "Ana Torres V.", role: "Analista Sr.", score: 71, exp: "2 años", salary: "$28,000", status: "qualified" },
  { name: "Roberto Díaz P.", role: "Analista Sr.", score: 45, exp: "1 año", salary: "$40,000", status: "rejected" },
  { name: "Laura Ruiz M.", role: "Analista Sr.", score: 0, exp: "—", salary: "—", status: "pending" },
];

export default function RecruitResults() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Copy */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Resultados</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              De cientos de CVs a una{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">lista corta con score</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Después del prefiltro, recibes un ranking claro con los datos que importan. Tu equipo solo dedica tiempo a los candidatos que ya pasaron el primer filtro.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[var(--success)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={18} weight="duotone" className="text-[var(--success)]" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Score basado en tus criterios</p>
                  <p className="text-xs text-gray-400">Tú defines el peso: experiencia 40%, salario 30%, disponibilidad 30%.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={18} weight="duotone" className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Transcripción y resumen de cada llamada</p>
                  <p className="text-xs text-gray-400">Revisa exactamente qué dijo cada candidato sin escuchar la grabación completa.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={18} weight="duotone" className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Variables extraídas automáticamente</p>
                  <p className="text-xs text-gray-400">Experiencia, salario, disponibilidad, ubicación — todo estructurado y listo para exportar.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold">Vacante: Analista Sr. Datos</p>
                  <p className="text-xs text-gray-500">Campaña finalizada — 47 de 50 contactados</p>
                </div>
                <span className="text-xs font-medium text-[var(--success)] bg-[var(--success)]/10 px-3 py-1 rounded-full">94% contactados</span>
              </div>

              {/* Table */}
              <div className="rounded-xl overflow-hidden border border-[var(--dark-border)]">
                {/* Table header */}
                <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-white/5 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                  <span className="col-span-4">Candidato</span>
                  <span className="col-span-2 text-center">Exp.</span>
                  <span className="col-span-3 text-center">Salario</span>
                  <span className="col-span-3 text-center">Score</span>
                </div>

                {/* Rows */}
                {candidates.map((c, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 px-4 py-3 border-t border-[var(--dark-border)] items-center text-sm">
                    <div className="col-span-4 flex items-center gap-2">
                      {c.status === "qualified" && <CheckCircle size={14} weight="fill" className="text-[var(--success)] shrink-0" />}
                      {c.status === "rejected" && <XCircle size={14} weight="fill" className="text-[var(--danger)] shrink-0" />}
                      {c.status === "pending" && <Clock size={14} weight="fill" className="text-gray-500 shrink-0" />}
                      <span className="text-xs font-medium truncate">{c.name}</span>
                    </div>
                    <span className="col-span-2 text-center text-xs text-gray-400">{c.exp}</span>
                    <span className="col-span-3 text-center text-xs text-gray-400">{c.salary}</span>
                    <div className="col-span-3 flex justify-center">
                      {c.score > 0 ? (
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          c.score >= 70
                            ? "bg-[var(--success)]/10 text-[var(--success)]"
                            : "bg-[var(--danger)]/10 text-[var(--danger)]"
                        }`}>
                          {c.score}/100
                        </span>
                      ) : (
                        <span className="text-xs text-gray-600">Pendiente</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
