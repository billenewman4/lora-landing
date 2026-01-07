"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This is what we've been missing for the last eight months... the last forty-two years.",
    author: "VP of Procurement",
    company: "Food Ingredients Distributor",
  },
  {
    quote:
      "At least we have a starting point. Instead of me spending all the time doing the logic.",
    author: "Operations Manager",
    company: "Specialty Bakery Supplier",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-slate-50">
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
            Trusted by{" "}
            <span className="gradient-text">operations leaders</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our customers have to say about transforming their
            operations with Lora.
          </p>
        </motion.div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-32 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs"
            >
              Logo {i}
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 mt-2">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-300" />
                <div>
                  <div className="font-medium text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
