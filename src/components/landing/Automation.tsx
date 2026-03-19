"use client";

import { motion } from "framer-motion";
import {
  FlowArrow,
  PhoneDisconnect,
  PhoneIncoming,
  EnvelopeSimple,
  Database,
  WebhooksLogo,
  ArrowDown,
} from "@phosphor-icons/react";

export default function Automation() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            Automatización
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Workflows que trabajan{" "}
            <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              por ti
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Construye flujos de automatización sin código. Conecta tus llamadas
            con HubSpot, Google Sheets, email y más.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-8">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-[var(--primary)]/30">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                <PhoneDisconnect size={20} weight="duotone" className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--primary)] font-semibold uppercase tracking-wider">
                  Trigger
                </p>
                <p className="text-sm font-medium">Cuando la llamada termina</p>
                <p className="text-xs text-gray-500">
                  Accede a la transcripción y metadatos
                </p>
              </div>
            </div>

            <div className="flex justify-center py-3">
              <ArrowDown size={20} className="text-gray-600" />
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-[var(--warning)]/30">
              <div className="w-12 h-12 rounded-xl bg-[var(--warning)]/10 flex items-center justify-center shrink-0">
                <FlowArrow size={20} weight="duotone" className="text-[var(--warning)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--warning)] font-semibold uppercase tracking-wider">
                  Condición
                </p>
                <p className="text-sm font-medium">
                  Si el cliente agendó una cita
                </p>
                <p className="text-xs text-gray-500">
                  Analiza la transcripción con IA
                </p>
              </div>
            </div>

            <div className="flex justify-center py-3">
              <ArrowDown size={20} className="text-gray-600" />
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  icon: Database,
                  label: "Actualizar HubSpot",
                  desc: "Crear contacto + deal",
                  color: "var(--info)",
                },
                {
                  icon: EnvelopeSimple,
                  label: "Enviar confirmación",
                  desc: "Email con resumen",
                  color: "var(--success)",
                },
                {
                  icon: WebhooksLogo,
                  label: "Webhook",
                  desc: "Notificar al equipo",
                  color: "var(--secondary)",
                },
              ].map((action) => (
                <div
                  key={action.label}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: `${action.color}15` }}
                  >
                    <action.icon
                      size={18}
                      weight="duotone"
                      style={{ color: action.color }}
                    />
                  </div>
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-xs text-gray-500">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                <PhoneIncoming size={20} weight="duotone" className="text-[var(--accent)]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                  Trigger alternativo
                </p>
                <p className="text-sm font-medium">
                  Antes de que el asistente responda
                </p>
                <p className="text-xs text-gray-500">
                  Inyecta variables del CRM para personalizar la conversación en
                  tiempo real
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                Pre-llamada
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
