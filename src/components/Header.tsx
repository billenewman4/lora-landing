"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <motion.a
          href="#contact"
          className="px-5 py-2.5 text-sm font-medium text-white rounded-full gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Us
        </motion.a>
      </div>
    </motion.header>
  );
}
