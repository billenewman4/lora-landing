"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How accurate are Lora's prices?",
    answer:
      "Consistently within 5% of human pricing managers — and improving with every cycle. Every recommendation comes with a transparent \"Why this price?\" breakdown so you can verify the reasoning yourself.",
  },
  {
    question: "Do I lose control of pricing?",
    answer:
      "No. You accept, edit, or override every recommendation. Lora executes your strategy — it doesn't replace your judgment. The system learns from your decisions to get better over time.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most customers see actionable recommendations within 2 weeks. We connect to your ERP (Aspen, SAP, NetSuite, etc.) or work from Excel uploads. No year-long implementations required.",
  },
  {
    question: "How do you protect our pricing data?",
    answer:
      "Encryption at rest and in transit, dedicated data isolation, and strict access controls. Your data is never shared or used to train models for other customers.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="divide-y divide-slate-200/80"
        >
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="font-medium text-slate-900 group-hover:text-amber-800 transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-slate-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@lora.ai"
            className="text-slate-900 font-medium hover:text-amber-800 transition-colors"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
