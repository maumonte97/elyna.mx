"use client";

import { motion } from "framer-motion";
import { ChatText, ChartBar, Translate, ClockCountdown, Brain, Database } from "@phosphor-icons/react";

const features = [
  { icon: ChatText, title: "Preguntas personalizables por vacante", description: "Define las preguntas de filtro para cada posición: experiencia, disponibilidad, expectativa salarial, habilidades técnicas, ubicación y cualquier criterio que necesites.", gradient: "from-[var(--primary)] to-[var(--primary-light)]" },
  { icon: ChartBar, title: "Score automático de candidatos", description: "La IA evalúa cada respuesta y asigna un puntaje basado en tus criterios. Recibe un ranking ordenado de los candidatos más calificados.", gradient: "from-[var(--accent)] to-[var(--info)]" },
  { icon: Database, title: "Extracción de datos estructurados", description: "Obtén automáticamente: años de experiencia, rango salarial, disponibilidad, idiomas, certificaciones y cualquier variable personalizada que definas.", gradient: "from-[var(--secondary)] to-[var(--secondary-light)]" },
  { icon: ClockCountdown, title: "Llamadas simultáneas 24/7", description: "Contacta a cientos de candidatos en paralelo, cualquier día y hora. Si no contestan, el agente reintenta automáticamente hasta 5 veces.", gradient: "from-[var(--warning)] to-[var(--primary)]" },
  { icon: Brain, title: "Knowledge base por vacante", description: "Sube la descripción del puesto y el agente responde preguntas de los candidatos sobre la empresa, beneficios, ubicación y proceso — sin que intervengas.", gradient: "from-[var(--success)] to-[var(--accent)]" },
  { icon: Translate, title: "Multilingüe — 30+ idiomas", description: "Entrevista candidatos en su idioma nativo. Ideal para posiciones bilingües o reclutamiento internacional.", gradient: "from-[var(--info)] to-[var(--accent-light)]" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function RecruitFeatures() {
  return (
    <section id="producto" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">escalar tu reclutamiento</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Desde el prefiltro hasta la transferencia al reclutador — todo automatizado con IA de voz.</p>
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
