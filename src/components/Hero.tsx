"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Package } from "lucide-react";
import { ProductMockup } from "./ProductMockup";

// Metrics data for the hero section
const heroMetrics = [
  {
    icon: TrendingUp,
    value: "+33%",
    label: "Profit Improvement",
    description: "Average increase",
  },
  {
    icon: Clock,
    value: "10→1",
    label: "Hours on Pricing",
    description: "Weekly time saved",
  },
  {
    icon: Package,
    value: "-50%",
    label: "Inventory Reduction",
    description: "While serving more",
  },
];

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
          AI for Distributors & Manufacturers
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 max-w-4xl mx-auto leading-[1.1]"
        >
          33% more profit.{" "}
          <span className="gradient-text">Found in your existing operations.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
        >
          Lora finds hidden margin in your pricing and inventory — automatically.
          See results in weeks, not quarters.
        </motion.p>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="relative bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all group"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
                  <metric.icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group px-8 py-4 text-base font-medium text-white rounded-full bg-neutral-900 hover:bg-neutral-800 transition-all shadow-2xl shadow-neutral-900/20 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="px-8 py-4 text-base font-medium text-neutral-900 rounded-full border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See How It Works
          </motion.a>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  );
}
