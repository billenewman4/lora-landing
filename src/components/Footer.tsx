"use client";

import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-slate-700 rounded-lg" />
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
            <span className="text-xl font-semibold tracking-tight text-white">
              Lora
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-400">
            <a
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="mailto:hello@lora.ai"
              className="hover:text-white transition-colors"
            >
              hello@lora.ai
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500">
            &copy; {currentYear} Lora AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
