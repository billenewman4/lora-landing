"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How long does implementation take?",
    answer:
      "Most customers see actionable recommendations within 2 weeks. Full optimization typically happens within 30 days. We handle the heavy lifting — your team just needs to review and approve.",
  },
  {
    question: "Do I need to replace my ERP?",
    answer:
      "No. Lora integrates with your existing systems — SAP, NetSuite, Dynamics, QuickBooks, and more. We can also work with simple data exports if you prefer. No rip-and-replace required.",
  },
  {
    question: "How do you protect our pricing data?",
    answer:
      "Enterprise-grade security is our baseline. We're SOC 2 Type II compliant, with encryption at rest and in transit, dedicated data isolation, and strict access controls. Your data is never shared or used to train models for other customers.",
  },
  {
    question: "What if the AI recommendations are wrong?",
    answer:
      "You're always in control. Review and approve every recommendation before it's applied. Our AI learns from your decisions to improve over time. Most customers approve 80%+ of recommendations out of the box.",
  },
  {
    question: "What's the pricing model?",
    answer:
      "Pricing is based on your SKU count and transaction volume. We offer flexible plans for businesses of all sizes. Book a demo for a custom quote — there's no commitment to get started.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Every customer gets a dedicated success manager. We provide hands-on onboarding, regular check-ins, and responsive support. We're invested in your success — our business depends on your results.",
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
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to know about getting started with Lora.
          </p>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="divide-y divide-neutral-200"
        >
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="font-medium text-neutral-900">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-neutral-500" />
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
                    <p className="pt-4 text-neutral-600 leading-relaxed">
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
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@lora.ai"
            className="text-neutral-900 font-medium hover:underline"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
