"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";

type FeatureItem = {
  text: string;
  included: boolean;
  highlight?: string;
};

const plans = [
  {
    name: "Starter",
    monthly: "$47",
    yearly: "$38",
    description: "Empieza automatizando llamadas con un Agente IA.",
    features: [
      { text: "120 minutos incluidos", included: true, highlight: "$0.39 / min extra" },
      { text: "1 asistente", included: true },
      { text: "1 campaña saliente", included: true },
      { text: "Llamadas en paralelo", included: false },
      { text: "1 voz clonada", included: true },
      { text: "800 ejecuciones no-code/mes", included: true },
      { text: "Knowledgebases", included: false },
      { text: "Mid-call tools", included: false },
      { text: "Números propios ilimitados", included: true, highlight: "Ilimitados" },
      { text: "Web Widget", included: false },
      { text: "Idiomas secundarios", included: true },
      { text: "Plataforma de automatización", included: true },
      { text: "Integraciones de calendario", included: true },
      { text: "Dashboards personalizados", included: false },
      { text: "AI prompt editor", included: true },
      { text: "Flow builder", included: true },
    ] as FeatureItem[],
    cta: "Comprar plan",
    popular: false,
  },
  {
    name: "Growth",
    monthly: "$224",
    yearly: "$179.20",
    description: "Para PYMES automatizando llamadas entrantes y salientes.",
    features: [
      { text: "700 minutos incluidos", included: true, highlight: "$0.32 / min extra" },
      { text: "5 asistentes", included: true },
      { text: "5 campañas salientes", included: true },
      { text: "3 llamadas en paralelo", included: true },
      { text: "5 voces clonadas", included: true },
      { text: "7,000 ejecuciones no-code/mes", included: true },
      { text: "1 knowledgebase", included: true },
      { text: "5 mid-call tools", included: true },
      { text: "Números propios ilimitados", included: true, highlight: "Ilimitados" },
      { text: "Web Widget", included: true },
      { text: "Idiomas secundarios", included: true },
      { text: "Plataforma de automatización", included: true },
      { text: "Integraciones de calendario", included: true },
      { text: "Dashboards personalizados", included: false },
      { text: "AI prompt editor", included: true },
      { text: "Flow builder", included: true },
    ] as FeatureItem[],
    cta: "Comprar plan",
    popular: true,
  },
  {
    name: "Business Pro",
    monthly: "$476",
    yearly: "$380.75",
    description: "Ideal para empresas y agencias que operan alto volumen de llamadas con IA.",
    features: [
      { text: "1,700 minutos incluidos", included: true, highlight: "$0.28 / min extra" },
      { text: "10 asistentes", included: true },
      { text: "10 campañas salientes", included: true },
      { text: "10 llamadas en paralelo", included: true },
      { text: "10 voces clonadas", included: true },
      { text: "20,000 ejecuciones no-code/mes", included: true },
      { text: "3 knowledgebases", included: true },
      { text: "20 mid-call tools", included: true },
      { text: "Números propios ilimitados", included: true, highlight: "Ilimitados" },
      { text: "Web Widget", included: true },
      { text: "Idiomas secundarios", included: true },
      { text: "Plataforma de automatización", included: true },
      { text: "Integraciones de calendario", included: true },
      { text: "Dashboards personalizados", included: true },
      { text: "AI prompt editor", included: true },
      { text: "Flow builder", included: true },
    ] as FeatureItem[],
    cta: "Comprar plan",
    popular: false,
  },
  {
    name: "Enterprise",
    monthly: "$1,035",
    yearly: "$828",
    description: "Para empresas y agencias que requieren asistencia 1 on 1.",
    features: [
      { text: "4,500 minutos incluidos", included: true, highlight: "$0.22 / min extra" },
      { text: "Asistentes ilimitados", included: true, highlight: "Ilimitados" },
      { text: "Campañas ilimitadas", included: true, highlight: "Ilimitadas" },
      { text: "Llamadas en paralelo ilimitadas", included: true, highlight: "Ilimitadas" },
      { text: "Voces clonadas ilimitadas", included: true, highlight: "Ilimitadas" },
      { text: "Ejecuciones no-code ilimitadas", included: true, highlight: "Ilimitadas" },
      { text: "Knowledgebases ilimitadas", included: true, highlight: "Ilimitadas" },
      { text: "Mid-call tools ilimitados", included: true, highlight: "Ilimitados" },
      { text: "Números propios ilimitados", included: true, highlight: "Ilimitados" },
      { text: "Web Widget", included: true },
      { text: "Idiomas secundarios", included: true },
      { text: "Plataforma de automatización", included: true },
      { text: "Integraciones de calendario", included: true },
      { text: "Dashboards personalizados", included: true },
      { text: "AI prompt editor", included: true },
      { text: "Flow builder", included: true },
      { text: "Account Manager 1-on-1", included: true },
    ] as FeatureItem[],
    cta: "Comprar plan",
    popular: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            Precios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Planes que se adaptan a{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
              tu crecimiento
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Paga mensual o ahorra hasta un 20% con facturación anual.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              !annual
                ? "bg-[var(--primary)] text-white"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              annual
                ? "bg-[var(--primary)] text-white"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            Anual
            <span className="ml-1.5 text-xs opacity-80">-20%</span>
          </button>
        </div>

        {/* Plans */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative p-6 rounded-[22px] border transition-all flex flex-col ${
                plan.popular
                  ? "bg-[var(--dark-card)] border-[var(--primary)]/30 shadow-[0_0_30px_rgba(255,107,44,0.1)]"
                  : "bg-[var(--dark-card)] border-[var(--dark-border)] hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold bg-[var(--primary)] text-white">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-4 min-h-[32px]">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">
                    {annual ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-gray-500 text-sm">/mo</span>
                </div>
              </div>

              <a
                href="#"
                className={`block text-center font-semibold py-3 rounded-[22px] transition-all mb-5 ${
                  plan.popular
                    ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </a>

              <p className="text-xs font-semibold text-gray-400 mb-3">Incluye:</p>
              <div className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <Check
                        size={14}
                        weight="bold"
                        className="shrink-0 mt-0.5 text-[var(--primary)]"
                      />
                    ) : (
                      <X
                        size={14}
                        weight="bold"
                        className="shrink-0 mt-0.5 text-gray-600"
                      />
                    )}
                    <span className={`text-xs leading-relaxed ${feature.included ? "text-gray-300" : "text-gray-600"}`}>
                      {feature.highlight ? (
                        <>
                          <span className="text-[var(--primary)] font-semibold">{feature.highlight}</span>
                          {" "}{feature.text.replace(feature.highlight, "").trim()}
                        </>
                      ) : (
                        feature.text
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
