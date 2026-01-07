"use client";

import { motion } from "framer-motion";
import { Database, Warehouse, Calculator, Code2 } from "lucide-react";

const integrationCategories = [
  {
    icon: Database,
    name: "ERP Systems",
    description: "SAP, NetSuite, Dynamics, and more",
  },
  {
    icon: Warehouse,
    name: "Warehouse Management",
    description: "Real-time inventory sync",
  },
  {
    icon: Calculator,
    name: "Accounting Software",
    description: "QuickBooks, Sage, Xero",
  },
  {
    icon: Code2,
    name: "Custom APIs",
    description: "Or simple data exports",
  },
];

export function IntegrationShowcase() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Works with your existing systems
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            No rip-and-replace. Lora connects to your ERP, WMS, and accounting
            software — or works from simple data exports.
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
              className="bg-white rounded-xl p-6 border border-neutral-200 text-center hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <category.icon className="w-6 h-6 text-neutral-700" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-neutral-500">{category.description}</p>
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
          <p className="text-neutral-500 text-sm">
            Most customers connect in under a day. No IT department required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
