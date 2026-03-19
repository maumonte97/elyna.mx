"use client";

import { motion } from "framer-motion";
import { Phone, GitBranch, EnvelopeSimple, Database, WebhooksLogo, Spreadsheet } from "@phosphor-icons/react";

export default function RecruitAutomation() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Automatización</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Post-entrevista en{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">piloto automático</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Conecta el resultado de cada entrevista con tus herramientas de RRHH automáticamente.</p>
        </motion.div>

        {/* Workflow visual */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-8 md:p-12">

            {/* Trigger */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl px-5 py-3">
                <Phone size={20} weight="duotone" className="text-[var(--primary)]" />
                <div>
                  <p className="text-sm font-semibold">Trigger: Entrevista finalizada</p>
                  <p className="text-xs text-gray-500">Score, transcripción y datos extraídos disponibles</p>
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
                  <p className="text-sm font-semibold">Condición: ¿Score &gt; 70?</p>
                  <p className="text-xs text-gray-500">Filtra candidatos calificados vs. descartados</p>
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
                <p className="text-center text-xs font-semibold text-[var(--success)] uppercase tracking-wider mb-4">Calificado</p>
                {[
                  { icon: Database, label: "Actualizar ATS/CRM", detail: "Mover candidato a etapa 'Entrevista RRHH'" },
                  { icon: EnvelopeSimple, label: "Email al candidato", detail: "Confirmar siguiente paso del proceso" },
                  { icon: WebhooksLogo, label: "Webhook a Slack", detail: "Notificar al reclutador asignado" },
                ].map((action, i) => (
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
                <p className="text-center text-xs font-semibold text-[var(--warning)] uppercase tracking-wider mb-4">No calificado</p>
                {[
                  { icon: Spreadsheet, label: "Registrar en Google Sheets", detail: "Archivo de candidatos descartados con motivo" },
                  { icon: EnvelopeSimple, label: "Email de agradecimiento", detail: "Notificar amablemente que no avanza" },
                  { icon: Database, label: "Actualizar ATS", detail: "Marcar como 'No apto' con resumen IA" },
                ].map((action, i) => (
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
