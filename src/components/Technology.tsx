"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal from "./SectionReveal";
import { TECH_PILLARS } from "@/lib/constants";
import TextReveal from "./TextReveal";

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imgRef.current && sectionRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1, y: "-10%" },
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="section-line mb-32" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="text-center mb-20">
            <span className="text-secondary text-sm font-medium tracking-[0.2em] uppercase block mb-4">
              Our Technology
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal className="inline-block mr-3">Research &</TextReveal>
              <TextReveal delay={0.2} className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent inline-block pb-2">
                Innovation
              </TextReveal>
            </h2>
            <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Our proprietary technology platforms combine cutting-edge AI with deep biological
              expertise to unlock new frontiers in drug discovery and gene therapy.
            </p>
          </div>
        </SectionReveal>

        {/* Hero Image */}
        <SectionReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden mb-20 group h-64 md:h-96">
              <Image
                ref={imgRef}
                src="/images/technology-research.jpg"
                alt="CRISPR gene editing technology visualization"
                width={1200}
                height={600}
                className="w-full h-[120%] object-cover absolute top-0 left-0 transition-transform duration-700 group-hover:scale-[1.15]"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap gap-3">
                {["AI/ML", "CRISPR", "Multi-Omics", "Protein Engineering"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-primary border border-primary/30 rounded-full bg-background/40 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Tech Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {TECH_PILLARS.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={0.3 + i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-8 rounded-2xl bg-surface/60 border border-border hover:border-primary/30 transition-all duration-500 group overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number badge */}
                <div className="relative mb-6">
                  <span className="font-heading text-6xl font-black text-surface-light group-hover:text-primary/10 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative">
                  <span className="text-primary text-xs font-medium tracking-[0.15em] uppercase block mb-2">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Research Pipeline */}
        <SectionReveal delay={0.6}>
          <div className="mt-20 p-8 md:p-12 rounded-2xl glass">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Research Pipeline</h3>
                <p className="text-text-muted text-sm">Active programs across multiple therapeutic areas</p>
              </div>
              <div className="flex flex-wrap gap-6 md:gap-10">
                {[
                  { stage: "Discovery", count: 12, color: "bg-primary" },
                  { stage: "Preclinical", count: 8, color: "bg-secondary" },
                  { stage: "Phase I", count: 4, color: "bg-accent" },
                  { stage: "Phase II", count: 3, color: "bg-primary" },
                ].map((item) => (
                  <div key={item.stage} className="text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-text-muted text-xs">{item.stage}</span>
                    </div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="font-heading text-3xl font-bold text-text-primary"
                    >
                      {item.count}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline progress bar */}
            <div className="mt-8 h-1.5 bg-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-text-dim text-xs">Early Discovery</span>
              <span className="text-text-dim text-xs">Market Approval</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
