"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6→8%", label: "Gross margin improvement" },
  { value: "10→1 hr", label: "Weekly pricing time" },
  { value: "5x", label: "More SKUs priced" },
];

export function ResultsMetrics() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="results">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-900/8 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-amber-400 uppercase tracking-widest mb-3">
            Measured results
          </p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-white">
            Proven at a $500M food distributor
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x sm:divide-slate-700"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center px-8"
            >
              <div className="font-display text-5xl sm:text-6xl text-white tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
