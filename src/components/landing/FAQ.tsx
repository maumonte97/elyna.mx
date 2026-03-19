"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "¿Qué tan natural suena el asistente de IA?",
    answer:
      "Nuestros asistentes utilizan tecnología de voz de ElevenLabs, líder mundial en síntesis de voz. Puedes elegir entre docenas de voces predefinidas o clonar tu propia voz con solo una muestra de audio. Los asistentes incluyen muletillas naturales y pausas para una conversación fluida.",
  },
  {
    question: "¿En qué idiomas funciona?",
    answer:
      "Elyna soporta más de 30 idiomas incluyendo español, inglés, portugués, francés, alemán, y muchos más. El asistente puede detectar automáticamente el idioma del interlocutor y responder en el mismo idioma.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar la plataforma?",
    answer:
      "No. Elyna está diseñada como una plataforma sin código (no-code). Configuras tu asistente con un prompt en lenguaje natural, seleccionas la voz, y estás listo. Para integraciones avanzadas, ofrecemos API REST y webhooks con documentación completa.",
  },
  {
    question: "¿Cómo funciona la facturación?",
    answer:
      "Facturamos por plan mensual o anual con minutos incluidos. El plan Starter incluye 120 minutos. Los minutos adicionales se cobran según tu plan (desde $0.22/min en Enterprise hasta $0.39/min en Starter). Los planes anuales tienen hasta un 20% de descuento.",
  },
  {
    question: "¿Puedo integrar Elyna con mi CRM?",
    answer:
      "Sí. Ofrecemos integraciones nativas con HubSpot, GoHighLevel, y más. Además, puedes conectar cualquier herramienta a través de nuestra API REST, webhooks, o plataforma de automatización visual compatible con Zapier y Make.",
  },
  {
    question: "¿Cómo funciona la integración con WhatsApp?",
    answer:
      "Elyna se conecta directamente con WhatsApp Cloud API. Puedes enviar mensajes automáticos después de una llamada (resúmenes, confirmaciones, links de pago), dar seguimiento a leads por WhatsApp y crear agentes conversacionales que atienden mensajes entrantes de forma autónoma.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium pr-4">{faq.question}</span>
                <CaretDown
                  size={18}
                  className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
