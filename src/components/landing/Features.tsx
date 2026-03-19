"use client";

import { motion } from "framer-motion";
import { MagicWand, Megaphone, PhoneIncoming, ListMagnifyingGlass, FlowArrow, WhatsappLogo } from "@phosphor-icons/react";

const features = [
  { icon: MagicWand, title: "Crea agentes con IA", description: "Genera asistentes de voz completos usando prompts de IA. Describe lo que necesitas y la plataforma crea el agente, su personalidad y flujo de conversación automáticamente.", gradient: "from-[var(--primary)] to-[var(--primary-light)]" },
  { icon: Megaphone, title: "Campañas de llamadas masivas", description: "Lanza campañas salientes automatizadas. Carga leads, programa llamadas y monitorea resultados en tiempo real.", gradient: "from-[var(--accent)] to-[var(--info)]" },
  { icon: PhoneIncoming, title: "Recepcionista IA 24/7", description: "Enruta llamadas entrantes a tu asistente de IA. Nunca pierdas una llamada — califica y atiende prospectos automáticamente.", gradient: "from-[var(--secondary)] to-[var(--secondary-light)]" },
  { icon: ListMagnifyingGlass, title: "Extracción inteligente de datos", description: "Define las variables que necesitas y la IA las extrae automáticamente de cada conversación. Obtén nombre, email, interés, nivel de urgencia y cualquier dato personalizado.", gradient: "from-[var(--warning)] to-[var(--primary)]" },
  { icon: FlowArrow, title: "Automatización sin código", description: "Construye workflows visuales con triggers pre y post-llamada. Actualiza CRMs, envía emails y dispara webhooks automáticamente.", gradient: "from-[var(--success)] to-[var(--accent)]" },
  { icon: WhatsappLogo, title: "WhatsApp Cloud API", description: "Conecta agentes de IA a WhatsApp. Envía mensajes automáticos post-llamada, da seguimiento a leads y crea flujos conversacionales directamente en WhatsApp.", gradient: "from-[var(--success)] to-[var(--success-light)]" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Features() {
  return (
    <section id="producto" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Producto</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">escalar tus llamadas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Desde un asistente de voz hasta campañas masivas y automatización completa — todo en una sola plataforma.</p>
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
