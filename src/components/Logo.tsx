"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo mark - abstract "L" with data/AI motif */}
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-neutral-900 rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 text-white"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4v16h12" />
            <circle cx="16" cy="8" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Wordmark */}
      <span className="text-xl font-semibold tracking-tight text-neutral-900">
        Lora
      </span>
    </motion.div>
  );
}
