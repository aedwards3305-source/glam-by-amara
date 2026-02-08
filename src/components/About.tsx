"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { PiSparkle, PiHeart, PiStar } from "react-icons/pi";

const highlights = [
  {
    icon: PiSparkle,
    title: "Artistry First",
    text: "Every face is a unique canvas. I blend technique with creativity to enhance what makes you, you.",
  },
  {
    icon: PiHeart,
    title: "Luxury Experience",
    text: "From the first consultation to the final touch, enjoy a pampering experience tailored entirely to you.",
  },
  {
    icon: PiStar,
    title: "Premium Products",
    text: "Only the finest cruelty-free, high-performance products touch your skin for flawless, lasting results.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-blush-100/40">
                <Image
                  src="/images/amara.jpg"
                  alt="Amara - Professional Makeup Artist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blush-300 rounded-[2rem] -z-10" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection direction="right">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-blush-500 mb-3">
                About Me
              </p>
              <h2 className="section-title mb-6">
                Hello, I&apos;m{" "}
                <span className="text-blush-500 italic">Amara</span>
              </h2>
              <p className="font-body text-gray-500 leading-relaxed mb-6">
                With over a decade of experience in the beauty industry, I
                specialize in creating timeless, elegant looks that make my
                clients feel radiant and confident. From intimate weddings to
                high-fashion editorials, my approach blends technical precision
                with an artist&apos;s eye for color and light.
              </p>
              <p className="font-body text-gray-500 leading-relaxed mb-10">
                Based in London, I&apos;ve had the privilege of working with
                renowned brands, fashion houses, and hundreds of beautiful
                brides. My philosophy is simple: enhance, never mask. Your
                beauty is the star — I just help it shine brighter.
              </p>
            </AnimatedSection>

            <div className="grid gap-6">
              {highlights.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.15} direction="right">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blush-500" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-gray-500 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
