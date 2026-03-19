"use client";

import { motion } from "framer-motion";
import { Phone, GitBranch, EnvelopeSimple, Database, WebhooksLogo, Table } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

export default function RecruitAutomation() {
  const t = useTranslation();

  const qualifiedActions = [
    { icon: Database, label: t.recruit.automation.q1.label, detail: t.recruit.automation.q1.detail },
    { icon: EnvelopeSimple, label: t.recruit.automation.q2.label, detail: t.recruit.automation.q2.detail },
    { icon: WebhooksLogo, label: t.recruit.automation.q3.label, detail: t.recruit.automation.q3.detail },
  ];

  const notQualifiedActions = [
    { icon: Table, label: t.recruit.automation.nq1.label, detail: t.recruit.automation.nq1.detail },
    { icon: EnvelopeSimple, label: t.recruit.automation.nq2.label, detail: t.recruit.automation.nq2.detail },
    { icon: Database, label: t.recruit.automation.nq3.label, detail: t.recruit.automation.nq3.detail },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">{t.recruit.automation.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.recruit.automation.title1}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">{t.recruit.automation.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.recruit.automation.subtitle}</p>
        </motion.div>

        {/* Workflow visual */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-8 md:p-12">

            {/* Trigger */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl px-5 py-3">
                <Phone size={20} weight="duotone" className="text-[var(--primary)]" />
                <div>
                  <p className="text-sm font-semibold">{t.recruit.automation.trigger}</p>
                  <p className="text-xs text-gray-500">{t.recruit.automation.triggerDesc}</p>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-8">
              <div className="w-[2px] h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]" />
            </div>

            {/* Condition */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-2xl px-5 py-3">
                <GitBranch size={20} weight="duotone" className="text-[var(--accent)]" />
                <div>
                  <p className="text-sm font-semibold">{t.recruit.automation.condition}</p>
                  <p className="text-xs text-gray-500">{t.recruit.automation.conditionDesc}</p>
                </div>
              </div>
            </div>

            {/* Connector split */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <div className="absolute left-1/2 top-0 w-[2px] h-4 bg-[var(--accent)]" />
                <div className="absolute left-[15%] right-[15%] top-4 h-[2px] bg-gradient-to-r from-[var(--success)] to-[var(--warning)]" />
                <div className="absolute left-[15%] top-4 w-[2px] h-4 bg-[var(--success)]" />
                <div className="absolute right-[15%] top-4 w-[2px] h-4 bg-[var(--warning)]" />
                <div className="h-8" />
              </div>
            </div>

            {/* Two branches */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Qualified */}
              <div className="space-y-3">
                <p className="text-center text-xs font-semibold text-[var(--success)] uppercase tracking-wider mb-4">{t.recruit.automation.qualified}</p>
                {qualifiedActions.map((action, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[var(--success)]/5 border border-[var(--success)]/10 rounded-xl px-4 py-3">
                    <action.icon size={18} weight="duotone" className="text-[var(--success)] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold">{action.label}</p>
                      <p className="text-[10px] text-gray-500">{action.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Not qualified */}
              <div className="space-y-3">
                <p className="text-center text-xs font-semibold text-[var(--warning)] uppercase tracking-wider mb-4">{t.recruit.automation.notQualified}</p>
                {notQualifiedActions.map((action, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[var(--warning)]/5 border border-[var(--warning)]/10 rounded-xl px-4 py-3">
                    <action.icon size={18} weight="duotone" className="text-[var(--warning)] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold">{action.label}</p>
                      <p className="text-[10px] text-gray-500">{action.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
