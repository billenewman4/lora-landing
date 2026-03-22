"use client";

import { motion } from "framer-motion";
import { Link2, FileText, BarChart3, Zap } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect",
    description: "Plug into your ERP or upload Excel.",
  },
  {
    icon: FileText,
    title: "Define strategy",
    description: "Write your rules in plain English.",
  },
  {
    icon: BarChart3,
    title: "Review",
    description: "Accept, edit, or override recommendations.",
  },
  {
    icon: Zap,
    title: "Monitor",
    description: "Alerts on margin leakage and cost changes.",
  },
];

export function ImplementationTimeline() {
  return (
    <section className="py-24 bg-[#faf9f7]" id="how-it-works">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto">
            Live in weeks, not months. No consulting armies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                Step {index + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
