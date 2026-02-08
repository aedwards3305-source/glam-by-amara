"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = ["All", "Bridal", "Editorial", "Glam", "Natural"];

const portfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80",
    category: "Bridal",
    title: "Classic Bridal Elegance",
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    category: "Editorial",
    title: "Vogue Cover Look",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    category: "Natural",
    title: "Effortless Radiance",
  },
  {
    src: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=600&q=80",
    category: "Glam",
    title: "Red Carpet Ready",
  },
  {
    src: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=600&q=80",
    category: "Bridal",
    title: "Romantic Rose",
  },
  {
    src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80",
    category: "Editorial",
    title: "High Fashion Bold",
  },
  {
    src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
    category: "Natural",
    title: "Sun-Kissed Glow",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    category: "Glam",
    title: "Evening Glamour",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-blush-500 mb-3">
            My Work
          </p>
          <h2 className="section-title">
            The <span className="text-blush-500 italic">Portfolio</span>
          </h2>
          <p className="section-subtitle mt-4">
            A curated collection of my favourite transformations and creative
            work.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-body text-sm tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-blush-500 text-white shadow-lg shadow-blush-200"
                  : "bg-blush-50 text-gray-500 hover:bg-blush-100 hover:text-blush-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div>
                    <p className="font-body text-xs text-blush-300 tracking-widest uppercase mb-1">
                      {item.category}
                    </p>
                    <p className="font-display text-lg text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
