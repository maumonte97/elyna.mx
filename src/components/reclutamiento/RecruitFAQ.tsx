"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

export default function RecruitFAQ() {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t.recruit.faq.q1.q, answer: t.recruit.faq.q1.a },
    { question: t.recruit.faq.q2.q, answer: t.recruit.faq.q2.a },
    { question: t.recruit.faq.q3.q, answer: t.recruit.faq.q3.a },
    { question: t.recruit.faq.q4.q, answer: t.recruit.faq.q4.a },
    { question: t.recruit.faq.q5.q, answer: t.recruit.faq.q5.a },
    { question: t.recruit.faq.q6.q, answer: t.recruit.faq.q6.a },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            {t.recruit.faq.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            {t.recruit.faq.title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium pr-4">{faq.question}</span>
                <CaretDown
                  size={18}
                  className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
