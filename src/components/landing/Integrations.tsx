"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";

const integrations: { name: string; logo: string; whiteBg?: boolean }[] = [
  { name: "HubSpot", logo: "/integrations/hubspot.png" },
  { name: "Salesforce", logo: "/integrations/salesforce.png" },
  { name: "Google Sheets", logo: "/integrations/google-sheets.png" },
  { name: "Cal.com", logo: "/integrations/cal.png", whiteBg: true },
  { name: "GoHighLevel", logo: "/integrations/gohighlevel.png" },
  { name: "Zapier", logo: "/integrations/zapier.png" },
  { name: "Make", logo: "/integrations/make.png" },
  { name: "Telegram", logo: "/integrations/telegram.png", whiteBg: true },
  { name: "Slack", logo: "/integrations/slack.png" },
  { name: "Stripe", logo: "/integrations/stripe.png" },
  { name: "WhatsApp", logo: "/integrations/whatsapp.png" },
  { name: "Twilio", logo: "/integrations/twilio.png" },
];

export default function Integrations() {
  const t = useTranslation();

  return (
    <section id="integraciones" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            {t.integrations.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.integrations.title1}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              {t.integrations.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.integrations.subtitle}
          </p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-5 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-all text-center cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center overflow-hidden ${int.whiteBg ? "bg-white" : ""}`}>
                <Image
                  src={int.logo}
                  alt={int.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {int.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* API callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 pr-6 rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
              <span className="text-[var(--primary)] font-mono text-sm font-bold">
                {"{ }"}
              </span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{t.integrations.apiTitle}</p>
              <p className="text-xs text-gray-500">
                {t.integrations.apiDesc}
              </p>
            </div>
            <a
              href="#"
              className="text-sm text-[var(--primary)] hover:underline ml-4"
            >
              {t.integrations.apiLink}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
