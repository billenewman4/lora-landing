"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductMockup } from "./ProductMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient orbs - subtle depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neutral-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          AI-Powered Operations
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]"
        >
          AI that prices, forecasts, and reorders —{" "}
          <span className="gradient-text">so you don&apos;t have to</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Intelligent operations for distributors and manufacturers. Surface
          hidden margin, prevent stockouts, and make data-backed decisions.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group px-8 py-4 text-base font-medium text-white rounded-full bg-neutral-900 hover:bg-neutral-800 transition-all shadow-2xl shadow-neutral-900/20 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#features"
            className="px-8 py-4 text-base font-medium text-neutral-900 rounded-full border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See Features
          </motion.a>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 relative"
        >
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  );
}
