"use client";

import { motion } from "framer-motion";
import { Layers, TrendingDown, Brain } from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    title: "Coverage gap",
    stat: "~50 of 1,000+",
    statLabel: "SKUs priced carefully per week",
    description:
      "Your team can only review a fraction of the catalog. The rest default to static markups — leaving margin on the table.",
  },
  {
    icon: TrendingDown,
    title: "Silent margin leakage",
    stat: "Daily",
    statLabel: "cost shifts go unpriced",
    description:
      "Costs shift constantly. By the time you update prices, margin has already leaked across hundreds of SKUs.",
  },
  {
    icon: Brain,
    title: "Context overload",
    stat: "5+",
    statLabel: "systems hold pricing inputs",
    description:
      "Vendor calls, inventory levels, customer tiers, market data — the inputs that shape pricing live everywhere except one place.",
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

export function Problem() {
  return (
    <section className="py-24 bg-white relative grain-overlay">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 mb-4">
            You can&apos;t price 10,000 SKUs{" "}
            <span className="gradient-text">in Excel</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The gap between operator judgment and execution capacity creates
            silent margin leakage across your entire catalog.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="group relative bg-[#faf9f7] rounded-2xl p-8 border border-slate-200/80 hover:border-amber-200/60 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-slate-900 transition-colors duration-300">
                <point.icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">
                  {point.stat}
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-0.5">
                  {point.statLabel}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Customer quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm italic max-w-xl mx-auto">
            &ldquo;It is hard to keep up with information and prices across
            hundreds of SKUs and customers&rdquo;{" "}
            <span className="not-italic text-slate-500">— Pricing team lead</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
