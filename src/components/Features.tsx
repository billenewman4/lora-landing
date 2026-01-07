"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Target,
  Scale,
  Bell,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Find Hidden Margin",
    description:
      "Surface pricing gaps and profit leaks you didn't know existed.",
  },
  {
    icon: TrendingUp,
    title: "Prices That Keep Up",
    description:
      "Recommendations that adjust as your costs, market, and inventory change.",
  },
  {
    icon: Target,
    title: "See Demand Coming",
    description:
      "Forecast seasonality, trends, and large orders before they hit.",
  },
  {
    icon: Scale,
    title: "Right Stock, Right Time",
    description:
      "Reorder intelligence that prevents stockouts and overstock.",
  },
  {
    icon: Bell,
    title: "Alerts Before Problems",
    description:
      "Cost spikes, margin erosion, inventory risks — flagged before they hurt.",
  },
  {
    icon: BarChart3,
    title: "Data You Can Trust",
    description:
      "Every recommendation backed by real transaction history and market data.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Everything you need to{" "}
            <span className="gradient-text">optimize operations</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From pricing to forecasting to inventory — Lora handles the
            complexity so you can focus on growing your business.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-900 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-32 h-1 bg-neutral-900 transform rotate-45 translate-x-8 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
