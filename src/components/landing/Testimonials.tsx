"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Elyna transformó nuestra operación de ventas. Pasamos de 50 llamadas diarias a 500 sin contratar un solo agente más.",
    name: "Roberto Hernández",
    role: "Director Comercial",
    company: "TechSales MX",
    rating: 5,
  },
  {
    quote:
      "El asistente de IA atiende nuestras llamadas 24/7 y agenda citas directamente en nuestro calendario. La tasa de no-show bajó un 40%.",
    name: "Laura Méndez",
    role: "CEO",
    company: "Clínica Vitae",
    rating: 5,
  },
  {
    quote:
      "La integración con WhatsApp fue un game changer. Después de cada llamada, el agente envía automáticamente el resumen y próximos pasos por WhatsApp. Nuestros clientes lo aman.",
    name: "Daniel Ortiz",
    role: "Fundador",
    company: "AgencyPro",
    rating: 5,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Lo que dicen{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
              nuestros clientes
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="p-[1.875rem] rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    weight="fill"
                    className="text-[var(--warning)]"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--primary)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
