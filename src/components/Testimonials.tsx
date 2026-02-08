"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { PiStarFill, PiCaretLeft, PiCaretRight } from "react-icons/pi";

const testimonials = [
  {
    name: "Sophie L.",
    role: "Bride",
    text: "Diamond made me feel like the most beautiful version of myself on my wedding day. She listened to every detail and created a look that was timeless, elegant, and utterly perfect. I cried happy tears — and the makeup didn't budge!",
    rating: 5,
  },
  {
    name: "Charlotte M.",
    role: "Fashion Editor",
    text: "Working with Diamond on our editorial shoots is always a dream. She brings creative vision, flawless execution, and an incredible energy to set. The looks she creates are pure art.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Bride",
    text: "From the trial to the big day, Diamond was an absolute professional. She understood my skin tone and cultural preferences perfectly. My makeup looked stunning in every photo. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emma R.",
    role: "Private Client",
    text: "I booked Diamond for a special birthday dinner and felt like a Hollywood star. She has a gift for making you look glamorous while still looking like yourself. I get compliments every time I share those photos.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-blush-50/30 to-blush-100/20"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-blush-500 mb-3">
            Client Love
          </p>
          <h2 className="section-title">
            Kind <span className="text-blush-500 italic">Words</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <PiStarFill
                      key={i}
                      className="w-5 h-5 text-blush-400"
                    />
                  )
                )}
              </div>

              {/* Quote */}
              <p className="font-display text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <p className="font-display text-lg text-gray-800">
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm text-blush-500 tracking-wider uppercase">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-blush-500 hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <PiCaretLeft className="w-5 h-5" />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-blush-500 w-6"
                      : "bg-blush-200 hover:bg-blush-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-blush-500 hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <PiCaretRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
