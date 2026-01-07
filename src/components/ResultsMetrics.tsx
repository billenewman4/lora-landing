"use client";

import { motion } from "framer-motion";
import { DollarSign, Package, TrendingUp, ArrowRight } from "lucide-react";

const resultsPillars = [
  {
    id: "pricing",
    icon: DollarSign,
    metric: {
      value: "10 hrs → 1 hr",
      label: "Weekly pricing time",
    },
    title: "Pricing Intelligence",
    before: "Manual spreadsheet analysis, outdated prices, margin leakage",
    after: "AI-generated recommendations ready in minutes",
    capabilities: [
      "Cost-plus and market-based pricing",
      "Customer-specific margin rules",
      "Competitive price monitoring",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    metric: {
      value: "50%",
      label: "Average inventory reduction",
    },
    title: "Inventory Optimization",
    before: "Overstocked slow-movers, stockouts on best-sellers",
    after: "Right stock, right time, right quantity",
    capabilities: [
      "Demand-based reorder points",
      "Seasonal forecasting",
      "Overstock liquidation alerts",
    ],
  },
  {
    id: "profit",
    icon: TrendingUp,
    metric: {
      value: "+33%",
      label: "Average profit increase",
    },
    title: "Profit Maximization",
    before: "Hidden margin leaks across thousands of SKUs",
    after: "Every product optimized for profitability",
    capabilities: [
      "Margin erosion detection",
      "Cost change pass-through",
      "Category-level optimization",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ResultsMetrics() {
  return (
    <section className="py-24 bg-white" id="results">
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
            Results that <span className="gradient-text">move the needle</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Three ways Lora transforms your operations — with measurable outcomes
            from day one.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {resultsPillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              className="group relative bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon and title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {pillar.title}
                </h3>
              </div>

              {/* Big metric */}
              <div className="mb-6 pb-6 border-b border-neutral-200">
                <div className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-1">
                  {pillar.metric.value}
                </div>
                <div className="text-sm text-neutral-500 font-medium">
                  {pillar.metric.label}
                </div>
              </div>

              {/* Before/After */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mt-0.5 w-14 shrink-0">
                    Before
                  </span>
                  <span className="text-sm text-neutral-600 line-through decoration-neutral-300">
                    {pillar.before}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mt-0.5 w-14 shrink-0">
                    After
                  </span>
                  <span className="text-sm text-neutral-900 font-medium">
                    {pillar.after}
                  </span>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-2">
                {pillar.capabilities.map((capability, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <ArrowRight className="w-3 h-3 text-neutral-400 shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
