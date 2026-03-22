"use client";

import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: DollarSign,
    label: "Pricing",
    title: "Price thousands of SKUs in minutes",
    description:
      "Write your pricing rules in plain English. Lora applies them across your entire catalog with transparent, explainable recommendations your team can accept, edit, or override.",
    details: [
      "Customer and category-specific pricing",
      "Cost pass-through and margin monitoring",
      "Learns from every decision your team makes",
    ],
  },
  {
    icon: ShoppingCart,
    label: "Procurement",
    title: "Buy smarter, not just cheaper",
    description:
      "Lora monitors vendor costs, lead times, and reliability to surface procurement opportunities — from renegotiation targets to alternative sourcing — before margin erodes.",
    details: [
      "Vendor cost benchmarking and alerts",
      "Reorder point optimization",
      "Supplier reliability scoring",
    ],
  },
  {
    icon: BarChart3,
    label: "Demand Planning",
    title: "See what's coming before it hits",
    description:
      "Forecast demand across your catalog using sales history, seasonality, and market signals. Reduce stockouts and overstock without adding headcount.",
    details: [
      "Seasonal and trend-based forecasting",
      "Overstock and stockout risk alerts",
      "Category-level demand visibility",
    ],
  },
];

export function Features() {
  return (
    <section className="py-28 bg-white" id="features">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-slate-900 mb-4">
            One platform for the decisions that matter
          </h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto">
            Pricing, procurement, and demand planning — coordinated from a shared strategy layer.
          </p>
        </motion.div>

        <div className="space-y-28">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Label pill */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
                  <pillar.icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  {pillar.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-slate-900 mb-5 max-w-lg">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg text-lg">
                {pillar.description}
              </p>

              {/* Details */}
              <ul className="flex flex-wrap gap-3">
                {pillar.details.map((detail) => (
                  <li
                    key={detail}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#faf9f7] rounded-full text-sm text-slate-600 border border-slate-200/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Divider between pillars */}
              {index < pillars.length - 1 && (
                <div className="mt-28 border-t border-slate-100" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
