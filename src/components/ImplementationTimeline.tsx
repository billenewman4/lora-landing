"use client";

import { motion } from "framer-motion";
import { Link2, Cpu, LineChart, Rocket } from "lucide-react";

const timelineSteps = [
  {
    day: "Day 1",
    milestone: "Connect",
    description: "Link your ERP or upload your data. Most integrations complete in hours.",
    icon: Link2,
  },
  {
    day: "Week 1",
    milestone: "Analyze",
    description: "AI processes your inventory, costs, and sales history to build your model.",
    icon: Cpu,
  },
  {
    day: "Week 2",
    milestone: "Recommend",
    description: "Review pricing and inventory recommendations. Approve with one click.",
    icon: LineChart,
  },
  {
    day: "Week 4",
    milestone: "Optimize",
    description: "Measure impact and continuously refine. Watch margins improve.",
    icon: Rocket,
  },
];

export function ImplementationTimeline() {
  return (
    <section className="py-24 bg-neutral-900" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Go live in weeks, not months
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            No year-long implementations. No consulting armies.
            Start seeing results in your first month.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-neutral-700">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-white origin-left"
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.milestone}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-4 lg:flex-col lg:items-center lg:text-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <step.icon className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div className="lg:mt-4">
                    <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
                      {step.day}
                    </div>
                    <div className="text-xl font-semibold text-white">
                      {step.milestone}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-400 lg:text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 text-sm">
            Most customers are seeing actionable recommendations within 2 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
}
