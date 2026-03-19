"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Phone, Robot } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

export default function RecruitDemoCall() {
  const t = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const trackWidth = 340;
  const bgOpacity = useTransform(x, [0, trackWidth * 0.6], [0, 1]);
  const textOpacity = useTransform(x, [0, trackWidth * 0.3], [1, 0]);

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      setError(t.recruit.demo.error);
      setTimeout(() => setError(""), 3000);
      animate(x, 0, { type: "spring", stiffness: 300 });
      return;
    }
    setSubmitted(true);

    try {
      await fetch("/api/demo-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: `+52${phone.replace(/\s/g, "")}`, source: "reclutamiento" }),
      });
    } catch {
      // silently fail — the UI already shows success
    }
  };

  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[22px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0f1029 0%, #0a1a15 50%, #0f1029 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--success)]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 p-8 md:p-14">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--success)] text-black text-xs font-semibold w-fit mb-6">
                {t.recruit.demo.badge}
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {t.recruit.demo.title1}
                <span className="text-[var(--success)]">{t.recruit.demo.titleHighlight}</span>{" "}
                {t.recruit.demo.title2}
              </h2>

              <p className="text-gray-400 mb-4">
                {t.recruit.demo.p1}
              </p>

              <p className="text-gray-400 mb-6">
                {t.recruit.demo.p2}
              </p>

              <p className="text-gray-300 text-sm font-medium">
                {t.recruit.demo.agentNote}
              </p>
            </div>

            {/* Right */}
            <div className="bg-[#0a0b1e]/80 border border-[var(--success)]/20 rounded-[22px] p-6 md:p-8 backdrop-blur-sm">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <Robot
                        size={28}
                        weight="duotone"
                        className="text-[var(--primary)]"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{t.recruit.demo.agentName}</p>
                      <p className="text-[var(--success)] text-sm font-medium">
                        {t.recruit.demo.agentRole}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {t.recruit.demo.agentTag}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <input
                      type="text"
                      placeholder={t.recruit.demo.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--success)]/40 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder={t.recruit.demo.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--success)]/40 transition-colors"
                    />
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                        +52
                      </span>
                      <input
                        type="tel"
                        placeholder={t.recruit.demo.phonePlaceholder}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[var(--success)]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-center text-xs text-red-400 mb-3">
                      {error}
                    </p>
                  )}

                  <p className="text-center text-xs text-gray-500 mb-5">
                    {t.recruit.demo.timeLimit}
                    <span className="text-[var(--success)] font-semibold">
                      {t.recruit.demo.timeLimitValue}
                    </span>
                  </p>

                  {/* Slide to call */}
                  <div
                    ref={trackRef}
                    className="relative h-16 bg-gray-800/80 rounded-full overflow-hidden select-none"
                  >
                    <motion.div
                      className="absolute inset-0 bg-[var(--success)]/20 rounded-full"
                      style={{ opacity: bgOpacity }}
                    />

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ opacity: textOpacity }}
                    >
                      <span className="text-sm font-semibold text-gray-400 tracking-wider">
                        {t.recruit.demo.slideText}
                      </span>
                    </motion.div>

                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: (trackRef.current?.offsetWidth || 380) - 60 }}
                      dragElastic={0}
                      style={{ x }}
                      onDragEnd={() => {
                        const tw = trackRef.current?.offsetWidth || 380;
                        if (x.get() > tw * 0.55) {
                          animate(x, tw - 60, { type: "spring", stiffness: 300 });
                          handleSubmit();
                        } else {
                          animate(x, 0, { type: "spring", stiffness: 300 });
                        }
                      }}
                      whileDrag={{ scale: 1.05 }}
                      className="absolute left-1 top-1 w-14 h-14 rounded-full bg-white flex items-center justify-center z-10 shadow-lg cursor-grab active:cursor-grabbing"
                    >
                      <Phone
                        size={24}
                        weight="fill"
                        className="text-[var(--success)]"
                      />
                    </motion.div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--success)]/10 flex items-center justify-center mb-6 animate-pulse-glow">
                    <Phone
                      size={36}
                      weight="fill"
                      className="text-[var(--success)]"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t.recruit.demo.successTitle}
                  </h3>
                  <p className="text-gray-400 max-w-xs">
                    {t.recruit.demo.successMsg}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
