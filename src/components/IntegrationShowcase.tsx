"use client";

import { motion } from "framer-motion";
import { Database, Warehouse, Calculator, Code2 } from "lucide-react";

const integrationCategories = [
  {
    icon: Database,
    name: "ERP Systems",
    description: "Aspen, SAP, NetSuite, Dynamics",
  },
  {
    icon: Warehouse,
    name: "Market Data",
    description: "USDA commodity prices, market reports",
  },
  {
    icon: Calculator,
    name: "Your Data",
    description: "Excel uploads, CSV, data exports",
  },
  {
    icon: Code2,
    name: "Output Formats",
    description: "Dashboard, Excel reports, ERP feed-back",
  },
];

export function IntegrationShowcase() {
  return (
    <section className="py-24 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 mb-4">
            Works with your existing systems
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            No rip-and-replace. Lora connects to your ERP and market data sources
            — or works from simple Excel uploads.
          </p>
        </motion.div>

        {/* Integration categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-200/80 text-center hover:border-amber-200/60 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-900 transition-colors">
                <category.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-slate-500">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm">
            Most customers connect in under a day. No IT department required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
