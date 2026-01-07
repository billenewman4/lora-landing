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
            Trusted by{" "}
            <span className="gradient-text">operations leaders</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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
          className="flex flex-wrap items-center justify-center gap-12 mb-16 opacity-40"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-28 h-10 bg-neutral-400 rounded flex items-center justify-center text-white text-xs font-medium"
            >
              Client {i}
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
              className="relative bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg text-neutral-700 leading-relaxed mb-6 mt-2">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

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
