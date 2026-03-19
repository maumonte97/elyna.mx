"use client";

import { motion } from "framer-motion";
import { GearSix, Microphone, RocketLaunch } from "@phosphor-icons/react";

const steps = [
  { icon: GearSix, step: "01", title: "Configura tu asistente", description: "Define el prompt, selecciona la voz y conecta las herramientas que necesitas. Sin código requerido.", color: "var(--primary)" },
  { icon: Microphone, step: "02", title: "Asigna un número", description: "Provisiona un número telefónico local o conecta tu propio trunk SIP. Disponible en múltiples países.", color: "var(--accent)" },
  { icon: RocketLaunch, step: "03", title: "Lanza y escala", description: "Activa llamadas entrantes o lanza campañas salientes. Monitorea todo desde tu dashboard en tiempo real.", color: "var(--secondary)" },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Cómo funciona</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Listo en 30 minutos,{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">no en semanas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tres pasos para transformar tu comunicación telefónica con IA.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-30" />
          </div>
          {steps.map((step, index) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.5 }} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6">
                <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2" style={{ borderColor: step.color, backgroundColor: `${step.color}10` }}>
                  <step.icon size={28} weight="duotone" style={{ color: step.color }} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: step.color }}>{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
