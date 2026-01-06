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
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Prices That Keep Up",
    description:
      "Recommendations that adjust as your costs, market, and inventory change.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Target,
    title: "See Demand Coming",
    description:
      "Forecast seasonality, trends, and large orders before they hit.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Scale,
    title: "Right Stock, Right Time",
    description:
      "Reorder intelligence that prevents stockouts and overstock.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Bell,
    title: "Alerts Before Problems",
    description:
      "Cost spikes, margin erosion, inventory risks — flagged before they hurt.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: BarChart3,
    title: "Data You Can Trust",
    description:
      "Every recommendation backed by real transaction history and market data.",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
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
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Everything you need to{" "}
            <span className="gradient-text">optimize operations</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
