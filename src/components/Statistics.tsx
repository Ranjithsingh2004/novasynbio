"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { STATS } from "@/lib/constants";
import TextReveal from "./TextReveal";

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;
    const isFloat = value % 1 !== 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="relative py-32 overflow-hidden">
      <div className="section-line mb-32" />

      {/* Dark layered background */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-4">
              Our Impact
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal className="inline-block mr-3">Measurable</TextReveal>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block pb-2"
              >
                Results
              </motion.span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to advancing human health through innovation.
            </p>
          </div>
        </SectionReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative text-center p-8 md:p-10 rounded-2xl glass group"
              >
                {/* Glow top accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-text-primary to-text-muted bg-clip-text text-transparent mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-text-muted text-sm md:text-base font-medium">
                  {stat.label}
                </div>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Trust Badges */}
        <SectionReveal delay={0.6}>
          <div className="mt-20 text-center">
            <p className="text-text-dim text-sm mb-8 tracking-wide uppercase">
              Trusted by leading research institutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
              {["MIT", "Stanford", "NIH", "WHO", "Nature"].map((name) => (
                <span
                  key={name}
                  className="font-heading text-xl md:text-2xl font-bold text-text-muted hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
