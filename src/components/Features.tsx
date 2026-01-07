"use client";

import { motion } from "framer-motion";
import { DollarSign, Package, TrendingUp, Bell } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Pricing That Keeps Up",
    outcome: "Never miss a margin opportunity",
    description:
      "AI adjusts prices as costs, market conditions, and inventory levels change. Customer-specific rules built in.",
    metric: "Avg 8% margin improvement",
  },
  {
    icon: Package,
    title: "Inventory Intelligence",
    outcome: "Right stock, right time",
    description:
      "Prevent stockouts and overstock with demand-based reorder points and seasonal forecasting.",
    metric: "50% inventory reduction",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    outcome: "See what's coming",
    description:
      "Predict seasonality, trends, and large orders before they hit. Plan ahead with confidence.",
    metric: "3-month forward visibility",
  },
  {
    icon: Bell,
    title: "Proactive Alerts",
    outcome: "Problems flagged before they hurt",
    description:
      "Cost spikes, margin erosion, inventory risks — surfaced automatically so you can act fast.",
    metric: "Real-time monitoring",
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
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section className="py-24 bg-white" id="features">
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
            Built for <span className="gradient-text">operations teams</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Tools that make your team more effective — not more tools to manage.
          </p>
        </motion.div>

        {/* Features grid - 2x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon and title row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-500">
                    {feature.outcome}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span className="text-sm font-medium text-neutral-700">
                  {feature.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
