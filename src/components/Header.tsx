"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        {/* Navigation links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#results" className="hover:text-neutral-900 transition-colors">
            Results
          </a>
          <a href="#how-it-works" className="hover:text-neutral-900 transition-colors">
            How It Works
          </a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">
            FAQ
          </a>
        </nav>

        <motion.a
          href="#contact"
          className="px-5 py-2.5 text-sm font-medium text-white rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a Demo
        </motion.a>
      </div>
    </motion.header>
  );
}
