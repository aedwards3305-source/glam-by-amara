"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  PiMapPin,
  PiEnvelope,
  PiPhone,
  PiInstagramLogo,
  PiTiktokLogo,
  PiPinterestLogo,
} from "react-icons/pi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-blush-500 mb-3">
            Get In Touch
          </p>
          <h2 className="section-title">
            Book Your <span className="text-blush-500 italic">Session</span>
          </h2>
          <p className="section-subtitle mt-4">
            Ready to look and feel your absolute best? Let&apos;s create
            something beautiful together.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-gray-800 mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="font-body text-gray-500 leading-relaxed">
                  Whether you have a question, want to discuss your vision, or
                  are ready to book — I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-50 flex items-center justify-center flex-shrink-0">
                    <PiMapPin className="w-5 h-5 text-blush-500" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-400 uppercase tracking-wider">
                      Based In
                    </p>
                    <p className="font-body text-gray-700">London, UK</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-50 flex items-center justify-center flex-shrink-0">
                    <PiEnvelope className="w-5 h-5 text-blush-500" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-body text-gray-700">
                      hello@glambydiamond.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-50 flex items-center justify-center flex-shrink-0">
                    <PiPhone className="w-5 h-5 text-blush-500" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-400 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-body text-gray-700">+44 7700 900 123</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-body text-sm text-gray-400 uppercase tracking-wider mb-3">
                  Follow Along
                </p>
                <div className="flex gap-3">
                  {[PiInstagramLogo, PiTiktokLogo, PiPinterestLogo].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full bg-blush-50 flex items-center justify-center text-blush-500 hover:bg-blush-500 hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blush-50 flex items-center justify-center mb-4">
                    <PiEnvelope className="w-8 h-8 text-blush-500" />
                  </div>
                  <h3 className="font-display text-2xl text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="font-body text-gray-500">
                    Your message has been sent. I&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-sm text-gray-500 uppercase tracking-wider block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-blush-50/50 border border-blush-100 font-body text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-gray-500 uppercase tracking-wider block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-blush-50/50 border border-blush-100 font-body text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition-all"
                        placeholder="jane@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-sm text-gray-500 uppercase tracking-wider block mb-2">
                      Service Interested In
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-blush-50/50 border border-blush-100 font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option>Bridal Makeup</option>
                      <option>Editorial &amp; Fashion</option>
                      <option>Special Occasions</option>
                      <option>Makeup Lessons</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-sm text-gray-500 uppercase tracking-wider block mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl bg-blush-50/50 border border-blush-100 font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm text-gray-500 uppercase tracking-wider block mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-blush-50/50 border border-blush-100 font-body text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your vision..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
