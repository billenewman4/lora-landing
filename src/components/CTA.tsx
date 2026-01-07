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
          className="relative overflow-hidden rounded-3xl bg-neutral-900 p-12 md:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-800 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Ready to stop leaving money on the table?
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
              Join the distributors and manufacturers who are transforming their
              operations with AI. Let&apos;s talk about what Lora can do for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:hello@lora.ai"
                className="group px-8 py-4 text-base font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-100 transition-colors shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              No commitment required. We&apos;ll show you how it works.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
