"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28 bg-slate-900 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-900/8 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-5">
            Ready to see it in action?
          </h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto mb-12">
            See how Lora can execute your pricing, procurement, and
            demand planning strategy.
          </p>

          <motion.a
            href="mailto:hello@lora.ai?subject=Demo Request"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-slate-900 rounded-full bg-white hover:bg-amber-50 transition-all shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="mt-6 text-sm text-slate-500">
            Free consultation · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
