"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

type FeatureItem = {
  text: string;
  included: boolean;
  highlight?: string;
};

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
  const t = useTranslation();
  const tf = t.pricing.features;

  const plans = [
    {
      name: "Starter",
      monthly: "$47",
      yearly: "$38",
      description: t.pricing.starter.description,
      features: [
        { text: tf.minutes("120"), included: true, highlight: tf.extraMin("$0.39") },
        { text: tf.assistants("1"), included: true },
        { text: tf.campaigns("1"), included: true },
        { text: tf.noParallelCalls, included: false },
        { text: tf.clonedVoices("1"), included: true },
        { text: tf.nocodeRuns("800"), included: true },
        { text: tf.noKnowledgebases, included: false },
        { text: tf.noMidcallTools, included: false },
        { text: tf.unlimitedNumbers, included: true, highlight: tf.unlimited },
        { text: tf.webWidget, included: false },
        { text: tf.secondaryLanguages, included: true },
        { text: tf.automationPlatform, included: true },
        { text: tf.calendarIntegrations, included: true },
        { text: tf.customDashboards, included: false },
        { text: tf.aiPromptEditor, included: true },
        { text: tf.flowBuilder, included: true },
      ] as FeatureItem[],
      popular: false,
    },
    {
      name: "Growth",
      monthly: "$224",
      yearly: "$179.20",
      description: t.pricing.growth.description,
      features: [
        { text: tf.minutes("700"), included: true, highlight: tf.extraMin("$0.32") },
        { text: tf.assistants("5"), included: true },
        { text: tf.campaigns("5"), included: true },
        { text: tf.parallelCalls("3"), included: true },
        { text: tf.clonedVoices("5"), included: true },
        { text: tf.nocodeRuns("7,000"), included: true },
        { text: tf.knowledgebases("1"), included: true },
        { text: tf.midcallTools("5"), included: true },
        { text: tf.unlimitedNumbers, included: true, highlight: tf.unlimited },
        { text: tf.webWidget, included: true },
        { text: tf.secondaryLanguages, included: true },
        { text: tf.automationPlatform, included: true },
        { text: tf.calendarIntegrations, included: true },
        { text: tf.customDashboards, included: false },
        { text: tf.aiPromptEditor, included: true },
        { text: tf.flowBuilder, included: true },
      ] as FeatureItem[],
      popular: true,
    },
    {
      name: "Business Pro",
      monthly: "$476",
      yearly: "$380.75",
      description: t.pricing.businessPro.description,
      features: [
        { text: tf.minutes("1,700"), included: true, highlight: tf.extraMin("$0.28") },
        { text: tf.assistants("10"), included: true },
        { text: tf.campaigns("10"), included: true },
        { text: tf.parallelCalls("10"), included: true },
        { text: tf.clonedVoices("10"), included: true },
        { text: tf.nocodeRuns("20,000"), included: true },
        { text: tf.knowledgebases("3"), included: true },
        { text: tf.midcallTools("20"), included: true },
        { text: tf.unlimitedNumbers, included: true, highlight: tf.unlimited },
        { text: tf.webWidget, included: true },
        { text: tf.secondaryLanguages, included: true },
        { text: tf.automationPlatform, included: true },
        { text: tf.calendarIntegrations, included: true },
        { text: tf.customDashboards, included: true },
        { text: tf.aiPromptEditor, included: true },
        { text: tf.flowBuilder, included: true },
      ] as FeatureItem[],
      popular: false,
    },
    {
      name: "Enterprise",
      monthly: "$1,035",
      yearly: "$828",
      description: t.pricing.enterprise.description,
      features: [
        { text: tf.minutes("4,500"), included: true, highlight: tf.extraMin("$0.22") },
        { text: tf.unlimitedAssistants, included: true, highlight: tf.unlimited },
        { text: tf.unlimitedCampaigns, included: true, highlight: tf.unlimitedFem },
        { text: tf.unlimitedParallelCalls, included: true, highlight: tf.unlimitedFem },
        { text: tf.unlimitedClonedVoices, included: true, highlight: tf.unlimitedFem },
        { text: tf.unlimitedNocodeRuns, included: true, highlight: tf.unlimitedFem },
        { text: tf.unlimitedKnowledgebases, included: true, highlight: tf.unlimitedFem },
        { text: tf.unlimitedMidcallTools, included: true, highlight: tf.unlimited },
        { text: tf.unlimitedNumbers, included: true, highlight: tf.unlimited },
        { text: tf.webWidget, included: true },
        { text: tf.secondaryLanguages, included: true },
        { text: tf.automationPlatform, included: true },
        { text: tf.calendarIntegrations, included: true },
        { text: tf.customDashboards, included: true },
        { text: tf.aiPromptEditor, included: true },
        { text: tf.flowBuilder, included: true },
        { text: tf.accountManager, included: true },
      ] as FeatureItem[],
      popular: false,
    },
  ];

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
            {t.pricing.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.pricing.title1}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
              {t.pricing.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.pricing.subtitle}
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
            {t.pricing.monthly}
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              annual
                ? "bg-[var(--primary)] text-white"
                : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            {t.pricing.annual}
            <span className="ml-1.5 text-xs opacity-80">{t.pricing.discount}</span>
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
                    {t.pricing.mostPopular}
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
                  <span className="text-gray-500 text-sm">{t.pricing.mo}</span>
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
                {t.pricing.buy}
              </a>

              <p className="text-xs font-semibold text-gray-400 mb-3">{t.pricing.includes}</p>
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
