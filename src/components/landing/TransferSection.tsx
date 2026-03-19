"use client";

import { motion } from "framer-motion";
import { UserSwitch, PhoneTransfer, FileText, UserCircle } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

export default function TransferSection() {
  const t = useTranslation();

  const features = [
    { icon: PhoneTransfer, title: t.transfer.f1.title, desc: t.transfer.f1.desc },
    { icon: FileText, title: t.transfer.f2.title, desc: t.transfer.f2.desc },
    { icon: UserCircle, title: t.transfer.f3.title, desc: t.transfer.f3.desc },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--info)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-[var(--info)]/10 text-[var(--info)]">
              <UserSwitch size={14} weight="bold" />
              {t.transfer.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.transfer.title1}
              <span className="bg-gradient-to-r from-[var(--info)] to-[var(--secondary)] bg-clip-text text-transparent">{t.transfer.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              {t.transfer.subtitle}
            </p>
            <div className="space-y-4">
              {features.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--info)]/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} weight="duotone" className="text-[var(--info)]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--info)]/20 flex items-center justify-center">
                    <PhoneTransfer size={16} className="text-[var(--info)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.transfer.transferring}</p>
                    <p className="text-xs text-gray-500">+52 55 8765 4321</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 animate-pulse">{t.transfer.inTransfer}</span>
              </div>

              <div className="bg-[var(--info)]/5 border border-[var(--info)]/20 rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <FileText size={16} weight="duotone" className="text-[var(--info)]" />
                  <p className="text-xs font-semibold text-[var(--info)] uppercase tracking-wider">{t.transfer.aiSummary}</p>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex gap-2"><span className="text-gray-500 shrink-0">{t.transfer.client}</span><span>{t.transfer.clientVal}</span></div>
                  <div className="flex gap-2"><span className="text-gray-500 shrink-0">{t.transfer.topic}</span><span>{t.transfer.topicVal}</span></div>
                  <div className="flex gap-2"><span className="text-gray-500 shrink-0">{t.transfer.context}</span><span>{t.transfer.contextVal}</span></div>
                  <div className="flex gap-2"><span className="text-gray-500 shrink-0">{t.transfer.sentiment}</span><span className="text-yellow-400">{t.transfer.sentimentVal}</span></div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-sm font-bold text-green-400">JR</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.transfer.agentName}</p>
                  <p className="text-xs text-gray-500">{t.transfer.agentTeam}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">{t.transfer.available}</span>
              </div>

              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[var(--info)]/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
