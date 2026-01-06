"use client";

import { motion } from "framer-motion";
import { Link2, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect",
    description:
      "Link your ERP or upload your data. We integrate with your existing systems in minutes.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Analyze",
    description:
      "AI processes your inventory, costs, sales history, and market data to find opportunities.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Act",
    description:
      "Review recommendations and approve with one click. Or let Lora handle it automatically.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Up and running in{" "}
            <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No complex implementations. No months of setup. Start seeing value
            in days, not quarters.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 gradient-bg rounded-full text-white text-sm font-semibold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
