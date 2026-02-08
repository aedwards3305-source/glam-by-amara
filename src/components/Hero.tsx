"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blush-50 via-cream to-blush-100"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blush-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blush-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-blush-500 mb-4"
          >
            Professional Makeup Artistry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-gray-800 leading-tight mb-6"
          >
            Elevate Your
            <br />
            <span className="text-blush-500 italic">Natural Beauty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-lg text-gray-500 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Bespoke luxury makeup for your most unforgettable moments. From
            bridal elegance to editorial glamour, every look is crafted with
            artistry, precision, and love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="btn-primary">
              Book a Consultation
            </a>
            <a href="#portfolio" className="btn-outline">
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* Right: Image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
            {/* Main image */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-blush-200/50">
              <Image
                src="/images/amara.jpg"
                alt="Amara - Professional Makeup Artist"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-5 animate-fade-in">
              <p className="font-display text-3xl text-blush-500">500+</p>
              <p className="font-body text-sm text-gray-500 tracking-wide">
                Happy Clients
              </p>
            </div>

            {/* Floating accent card 2 */}
            <div className="absolute -top-4 -right-4 glass-card p-5 animate-fade-in">
              <p className="font-display text-3xl text-blush-500">10+</p>
              <p className="font-body text-sm text-gray-500 tracking-wide">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-blush-500 transition-colors">
          <span className="font-body text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
