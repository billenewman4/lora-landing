"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This is what we've been missing for the last eight months... the last forty-two years.",
    author: "VP of Procurement",
    company: "Food Ingredients Distributor",
    industry: "Food & Beverage",
    result: "Reduced pricing time by 85%",
  },
  {
    quote:
      "At least we have a starting point. Instead of me spending all the time doing the logic.",
    author: "Operations Manager",
    company: "Specialty Bakery Supplier",
    industry: "Food Manufacturing",
    result: "Cut inventory analysis from days to hours",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            What operations leaders say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hear from teams who transformed their pricing and inventory operations with Lora.
          </p>
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
              className="relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Industry badge */}
              <div className="mb-4 mt-2">
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                  {testimonial.industry}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg text-neutral-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Result highlight */}
              <div className="mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-xs text-neutral-500 uppercase tracking-wide font-medium mb-1">
                  Result
                </div>
                <div className="text-neutral-900 font-semibold">
                  {testimonial.result}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-500 text-sm font-medium">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-500">
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
