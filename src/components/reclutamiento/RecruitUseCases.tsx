"use client";

import { motion } from "framer-motion";
import { Storefront, Headset, Truck, Buildings, HardHat, GraduationCap } from "@phosphor-icons/react";

const useCases = [
  { icon: Storefront, title: "Retail y tiendas", description: "Filtra cientos de candidatos para temporada alta en días. Preguntas de disponibilidad horaria, experiencia en punto de venta y cercanía geográfica.", metric: "500+ candidatos/día" },
  { icon: Headset, title: "Call centers", description: "Evalúa habilidades de comunicación directamente por teléfono. El agente detecta tono, fluidez y capacidad de seguir scripts.", metric: "80% menos tiempo de filtro" },
  { icon: Truck, title: "Logística y operaciones", description: "Verifica licencias, disponibilidad de turnos y experiencia con vehículos o maquinaria de forma automatizada.", metric: "3x más candidatos contactados" },
  { icon: Buildings, title: "Staffing y agencias", description: "Escala tu operación sin escalar tu equipo. Maneja múltiples clientes y vacantes con agentes personalizados para cada una.", metric: "10 vacantes simultáneas" },
  { icon: HardHat, title: "Manufactura", description: "Filtra por turnos disponibles, experiencia en planta, certificaciones de seguridad y disposición de reubicación.", metric: "24/7 sin pausas" },
  { icon: GraduationCap, title: "Filtro técnico básico", description: "Haz preguntas técnicas de primer nivel: conocimiento de herramientas, lenguajes de programación, metodologías o certificaciones.", metric: "Score automático" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function RecruitUseCases() {
  return (
    <section id="soluciones" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Casos de uso</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Diseñado para{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">reclutamiento de alto volumen</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Industrias donde el prefiltro con IA marca la diferencia.</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <motion.div key={uc.title} variants={fadeUp} className="group p-[1.875rem] rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--primary)]/10">
                  <uc.icon size={24} weight="duotone" className="text-[var(--primary)]" />
                </div>
                <span className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">{uc.metric}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{uc.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
