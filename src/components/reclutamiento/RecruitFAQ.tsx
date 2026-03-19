"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "¿Los candidatos saben que hablan con una IA?",
    answer: "Puedes configurar el agente para que se presente como asistente de IA o como representante de tu empresa. La voz es tan natural que muchos candidatos no notan la diferencia. Recomendamos transparencia — en nuestra experiencia, los candidatos valoran la rapidez del proceso más que el medio.",
  },
  {
    question: "¿Qué preguntas puede hacer el agente?",
    answer: "Cualquier pregunta que definas en el prompt: experiencia laboral, disponibilidad horaria, expectativa salarial, ubicación, idiomas, certificaciones, habilidades técnicas, disposición a viajar — y preguntas de seguimiento dinámicas basadas en las respuestas del candidato.",
  },
  {
    question: "¿Cómo se genera el score de cada candidato?",
    answer: "Tú defines los criterios y su peso (ej: experiencia 40%, disponibilidad 30%, salario 30%). La IA extrae las variables de la conversación y calcula el score automáticamente. Puedes ver el desglose completo en el dashboard.",
  },
  {
    question: "¿Puedo integrar esto con mi ATS actual?",
    answer: "Sí. Elyna se integra vía API REST, webhooks y automatizaciones no-code con herramientas como HubSpot, Salesforce, Google Sheets, Zapier, Make y más. Los datos del candidato (score, transcripción, variables) se envían automáticamente a tu sistema.",
  },
  {
    question: "¿Qué pasa si el candidato no contesta?",
    answer: "El agente reintenta automáticamente según las reglas que configures: hasta 5 reintentos, con intervalos de 10 minutos a 3 días. También puede dejar mensaje de buzón de voz automáticamente.",
  },
  {
    question: "¿Cuántos candidatos puede llamar a la vez?",
    answer: "Depende de tu plan. Desde 1 llamada simultánea en Starter hasta llamadas en paralelo ilimitadas en Enterprise. Un plan Growth con 3 líneas paralelas puede procesar más de 200 entrevistas al día.",
  },
];

export default function RecruitFAQ() {
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
