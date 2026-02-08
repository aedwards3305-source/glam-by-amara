"use client";

import AnimatedSection from "./AnimatedSection";
import { PiFlower, PiCamera, PiCrown, PiPalette } from "react-icons/pi";

const services = [
  {
    icon: PiFlower,
    title: "Bridal Makeup",
    description:
      "Your dream look for your dream day. Includes a full trial, touch-up kit, and on-site application for a flawless finish that lasts from ceremony to last dance.",
    price: "From £350",
  },
  {
    icon: PiCamera,
    title: "Editorial & Fashion",
    description:
      "Bold, creative looks for magazine shoots, campaigns, and runway shows. I bring high-fashion vision to life with precision and artistry.",
    price: "From £250",
  },
  {
    icon: PiCrown,
    title: "Special Occasions",
    description:
      "Galas, red carpets, birthdays, or date nights — look and feel extraordinary for life's most memorable celebrations.",
    price: "From £150",
  },
  {
    icon: PiPalette,
    title: "Makeup Lessons",
    description:
      "Learn professional techniques in a personalised one-on-one session. Discover the products and methods that work best for your unique features.",
    price: "From £120",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-blush-50/50 to-cream"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-blush-500 mb-3">
            What I Offer
          </p>
          <h2 className="section-title">
            My <span className="text-blush-500 italic">Services</span>
          </h2>
          <p className="section-subtitle mt-4">
            Every service is tailored to you. Luxury, care, and artistry
            are at the heart of everything I do.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col text-center group hover:shadow-xl hover:shadow-blush-100/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-blush-50 flex items-center justify-center mb-6 group-hover:bg-blush-100 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blush-500" />
                </div>
                <h3 className="font-display text-xl text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <p className="font-display text-lg text-blush-500 mb-4">
                  {service.price}
                </p>
                <a
                  href="#contact"
                  className="font-body text-sm text-blush-500 tracking-wider uppercase hover:text-blush-600 transition-colors border-b border-blush-300 pb-1 self-center"
                >
                  Book Now
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
