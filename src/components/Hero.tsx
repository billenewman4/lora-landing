"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium mb-10 shadow-lg shadow-slate-900/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          AI for SKU-Intensive Distributors
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.05]"
        >
          Express your strategy.
          <br />
          <span className="gradient-text">Lora executes it.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-slate-400 max-w-lg mx-auto leading-relaxed"
        >
          AI agents that execute pricing, procurement, and demand planning
          for SKU-intensive distributors.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full bg-slate-900 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
