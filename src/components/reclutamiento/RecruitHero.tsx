"use client";

import { motion } from "framer-motion";
import { UserCirclePlus, ArrowRight } from "@phosphor-icons/react";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };

export default function RecruitHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--secondary)]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[140px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium">
            <UserCirclePlus size={14} weight="fill" />
            Reclutamiento con IA
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Filtra 100 candidatos{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--accent)] bg-clip-text text-transparent">en el tiempo que tomas un café</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Tu agente de IA llama a los candidatos, hace las preguntas de filtro, evalúa respuestas y te entrega un ranking listo para entrevistar — sin que levantes el teléfono.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#demo" className="group flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-8 py-3.5 rounded-[22px] hover:bg-[var(--primary-dark)] transition-all animate-pulse-glow">
            Prueba una entrevista IA
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#como-funciona" className="flex items-center gap-2 border border-white/10 text-white px-8 py-3.5 rounded-[22px] hover:bg-white/5 transition-all">Ver cómo funciona</a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 relative max-w-3xl mx-auto">
          <div className="relative bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg h-7 flex items-center px-3">
                <span className="text-xs text-gray-500">app.elyna.mx — Prefiltro Candidatos</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                    <UserCirclePlus size={18} weight="fill" className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Entrevista de filtro</p>
                    <p className="text-xs text-gray-500">María García — Analista Sr.</p>
                  </div>
                  <span className="ml-auto text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />03:12
                  </span>
                </div>
                <div className="flex items-center justify-center gap-[3px] h-12">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="w-1 bg-[var(--primary)]/60 rounded-full" style={{ height: `${Math.random() * 100}%`, animation: `wave ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate`, animationDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Transcripción en vivo</p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2"><span className="text-[var(--primary)] font-medium shrink-0">IA:</span><span className="text-gray-300">Hola María, gracias por tu interés en la vacante de Analista Sr. ¿Cuántos años de experiencia tienes en análisis de datos?</span></div>
                  <div className="flex gap-2"><span className="text-[var(--accent)] font-medium shrink-0">María:</span><span className="text-gray-300">Tengo 4 años trabajando con SQL y Python.</span></div>
                  <div className="flex gap-2"><span className="text-[var(--primary)] font-medium shrink-0">IA:</span><span className="text-gray-300">Excelente. ¿Cuál es tu expectativa salarial mensual?</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/10 via-transparent to-[var(--secondary)]/10 rounded-[30px] blur-xl -z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
