"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";
import { useTranslation } from "@/i18n/useTranslation";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  const t = useTranslation();

  const testimonials = [
    { quote: t.testimonials.t1.quote, name: t.testimonials.t1.name, role: t.testimonials.t1.role, company: t.testimonials.t1.company, rating: 5 },
    { quote: t.testimonials.t2.quote, name: t.testimonials.t2.name, role: t.testimonials.t2.role, company: t.testimonials.t2.company, rating: 5 },
    { quote: t.testimonials.t3.quote, name: t.testimonials.t3.name, role: t.testimonials.t3.role, company: t.testimonials.t3.company, rating: 5 },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-wider">
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t.testimonials.title1}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
              {t.testimonials.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className="p-[1.875rem] rounded-[22px] bg-[var(--dark-card)] border border-[var(--dark-border)] hover:border-white/10 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    weight="fill"
                    className="text-[var(--warning)]"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--primary)]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
