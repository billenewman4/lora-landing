"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Ready to stop leaving money on the table?
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
              Join the distributors and manufacturers who are transforming their
              operations with AI. Let&apos;s talk about what Lora can do for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:hello@lora.ai"
                className="group px-8 py-4 text-base font-medium text-indigo-600 bg-white rounded-full hover:bg-indigo-50 transition-colors shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <p className="mt-6 text-sm text-indigo-200">
              No commitment required. We&apos;ll show you how it works.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
