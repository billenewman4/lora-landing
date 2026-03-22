"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Lora is the basis of the minimum $1M pricing opportunity.",
    author: "CEO",
    company: "Beef Distributor",
  },
  {
    quote:
      "This is what we've been missing for the last eight months... the last forty-two years.",
    author: "VP of Procurement",
    company: "Food Ingredients Distributor",
  },
];

export function SocialProof() {
  return (
    <section className="py-28 bg-[#faf9f7] relative grain-overlay">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
            Trusted by pricing teams
          </p>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-[1.3] tracking-tight max-w-3xl mx-auto mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-500 text-xs font-semibold">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div className="text-sm text-slate-400">
                  <span className="text-slate-600 font-medium">{t.author}</span>
                  {" · "}
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
