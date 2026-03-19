"use client";

import { motion } from "framer-motion";
import { PhoneOutgoing, PhoneIncoming, Brain, ChartBar, ChatCircleText, CalendarCheck } from "@phosphor-icons/react";

const solutions = [
  {
    tag: "Ventas", title: "Campañas de llamadas salientes con IA",
    description: "Automatiza tus llamadas de prospección, calificación y seguimiento. Tu asistente IA contacta leads, agenda citas y actualiza tu CRM — todo en piloto automático.",
    features: [
      { icon: PhoneOutgoing, text: "Llamadas masivas automatizadas" },
      { icon: CalendarCheck, text: "Agendamiento inteligente con Cal.com" },
      { icon: ChartBar, text: "Analytics de conversión en tiempo real" },
    ],
    visual: "outbound" as const, gradient: "from-[var(--primary)] to-[var(--warning)]",
  },
  {
    tag: "Soporte", title: "Recepcionista IA para llamadas entrantes",
    description: "Tu asistente de IA atiende cada llamada 24/7. Responde preguntas, transfiere a agentes humanos cuando es necesario y nunca pierde una oportunidad.",
    features: [
      { icon: PhoneIncoming, text: "Atención 24/7 sin esperas" },
      { icon: Brain, text: "Base de conocimiento integrada" },
      { icon: ChatCircleText, text: "Transferencia inteligente a humanos" },
    ],
    visual: "inbound" as const, gradient: "from-[var(--accent)] to-[var(--info)]",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">Soluciones</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Transforma tus ventas y soporte</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Mejora cada interacción con clientes usando agentes de voz con IA, insights en tiempo real y automatización completa.</p>
        </motion.div>

        <div className="space-y-20">
          {solutions.map((sol, index) => (
            <motion.div key={sol.tag} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${sol.gradient} text-white`}>{sol.tag}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{sol.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{sol.description}</p>
                <div className="space-y-4">
                  {sol.features.map((feat) => (
                    <div key={feat.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <feat.icon size={18} weight="duotone" className="text-[var(--primary)]" />
                      </div>
                      <span className="text-sm text-gray-300">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-[22px] p-6 overflow-hidden">
                  {sol.visual === "outbound" ? <OutboundVisual /> : <InboundVisual />}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${sol.gradient} opacity-10 rounded-full blur-3xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutboundVisual() {
  const leads = [
    { name: "María García", status: "Conectada", time: "Hace 2 min" },
    { name: "Carlos López", status: "Agenda confirmada", time: "Hace 5 min" },
    { name: "Ana Rodríguez", status: "En cola", time: "Pendiente" },
    { name: "Pedro Martínez", status: "No contestó", time: "Hace 8 min" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <div><p className="text-sm font-medium">Campaña: Q1 Prospección</p><p className="text-xs text-gray-500">47/200 leads contactados</p></div>
        <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">Activa</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4"><div className="h-full w-[23%] bg-gradient-to-r from-[var(--primary)] to-[var(--warning)] rounded-full" /></div>
      {leads.map((lead) => (
        <div key={lead.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-xs font-semibold text-[var(--primary)]">{lead.name.charAt(0)}</div>
            <div><p className="text-sm font-medium">{lead.name}</p><p className="text-xs text-gray-500">{lead.time}</p></div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${lead.status === "Conectada" ? "bg-green-500/10 text-green-400" : lead.status === "Agenda confirmada" ? "bg-blue-500/10 text-blue-400" : lead.status === "En cola" ? "bg-yellow-500/10 text-yellow-400" : "bg-red-500/10 text-red-400"}`}>{lead.status}</span>
        </div>
      ))}
    </div>
  );
}

function InboundVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div><p className="text-sm font-medium">Llamadas hoy</p><p className="text-2xl font-bold text-[var(--accent)]">127</p></div>
        <div className="text-right"><p className="text-sm font-medium">Tasa de resolución</p><p className="text-2xl font-bold text-green-400">94%</p></div>
      </div>
      <div className="space-y-3 bg-white/5 rounded-2xl p-4">
        <p className="text-xs text-gray-500 text-center mb-2">Llamada entrante — +52 33 9876 5432</p>
        <div className="flex gap-2"><div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0"><span className="text-[10px]">AI</span></div><div className="bg-[var(--accent)]/10 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-gray-300 max-w-[80%]">Hola, bienvenido a Acme Corp. ¿En qué puedo ayudarte hoy?</div></div>
        <div className="flex gap-2 justify-end"><div className="bg-white/10 rounded-2xl rounded-tr-sm px-3 py-2 text-sm text-gray-300 max-w-[80%]">Quiero saber el estado de mi pedido #4521</div></div>
        <div className="flex gap-2"><div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0"><span className="text-[10px]">AI</span></div><div className="bg-[var(--accent)]/10 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-gray-300 max-w-[80%]">Tu pedido #4521 fue enviado ayer y llegará mañana entre 2-4pm. ¿Necesitas algo más?</div></div>
      </div>
    </div>
  );
}
