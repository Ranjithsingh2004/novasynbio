"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      <div className="section-line mb-32" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-secondary/8 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-text-muted tracking-wider">
                NOW ACCEPTING PARTNERSHIPS
              </span>
            </motion.div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal className="inline-block mr-3">Ready to</TextReveal>
              <TextReveal delay={0.2} className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent inline-block pb-2">
                Transform
              </TextReveal>
              <br />
              <TextReveal delay={0.4} className="inline-block mt-2">Healthcare?</TextReveal>
            </h2>

            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Join the next generation of biotech innovation. Whether you&apos;re a researcher,
              investor, or healthcare organization, let&apos;s shape the future together.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3.5 rounded-full bg-surface border border-border text-text-primary placeholder:text-text-dim text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                    required
                    aria-label="Email address"
                  />
                </div>
                <Magnetic>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary whitespace-nowrap h-full"
                  >
                    {submitted ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Thank You!
                      </span>
                    ) : (
                      "Get in Touch"
                    )}
                  </motion.button>
                </Magnetic>
              </div>
            </form>

            <p className="text-text-dim text-xs">
              By submitting, you agree to our Privacy Policy. We&apos;ll never share your information.
            </p>

            {/* Contact alternatives */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
              <Magnetic>
                <a href="mailto:hello@novasyn.bio" className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">hello@novasyn.bio</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a href="tel:+14155551234" className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">+1 (415) 555-1234</span>
                </a>
              </Magnetic>

              <Magnetic>
                <div className="flex items-center gap-3 text-text-muted cursor-default">
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">San Francisco, CA</span>
                </div>
              </Magnetic>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
