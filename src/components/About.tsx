"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal from "./SectionReveal";
import { ABOUT_PILLARS } from "@/lib/constants";
import TextReveal from "./TextReveal";

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: { delay: i * 0.15 + 0.3, type: "spring" as const, stiffness: 200 },
  }),
};

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Section line */}
      <div className="section-line mb-32" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-4">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal className="inline-block mr-3">Pioneering</TextReveal>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block pb-2"
              >
                Innovation
              </motion.span>
            </h2>
            <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              At NovaSyn Biosciences, we converge artificial intelligence with molecular biology
              to accelerate the discovery of life-changing therapeutics. Our multidisciplinary
              team of scientists, engineers, and clinicians is redefining what&apos;s possible in
              modern medicine.
            </p>
          </div>
        </SectionReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <SectionReveal direction="left" delay={0.2}>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  ref={imgRef}
                  src="/images/about-innovation.jpg"
                  alt="AI-driven molecular discovery visualization"
                  width={800}
                  height={600}
                  className="w-full h-[120%] object-cover absolute top-0 left-0 transition-transform duration-700 group-hover:scale-[1.15]"
                />
                {/* Maintain aspect ratio container */}
                <div className="w-full aspect-[4/3]" />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Glowing border effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-5 py-3"
              >
                <div className="text-primary font-heading text-2xl font-bold">$2.4B</div>
                <div className="text-text-muted text-xs">Research Investment</div>
              </motion.div>
            </div>
          </SectionReveal>

          {/* Right: Text + Pillars */}
          <div className="space-y-8">
            <SectionReveal direction="right" delay={0.3}>
              <h3 className="font-heading text-2xl md:text-3xl font-bold leading-snug">
                Where{" "}
                <span className="text-primary">Artificial Intelligence</span>{" "}
                Meets{" "}
                <span className="text-secondary">Molecular Biology</span>
              </h3>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.4}>
              <p className="text-text-muted leading-relaxed">
                Founded in 2019, NovaSyn has rapidly grown into a leading force in computational
                biotechnology. Our proprietary AI platforms analyze billions of molecular
                interactions to identify promising drug candidates in weeks, not years.
              </p>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.5}>
              <p className="text-text-muted leading-relaxed">
                We believe the future of medicine lies at the intersection of data science and
                biological innovation — and we&apos;re building that future today.
              </p>
            </SectionReveal>

            {/* Pillars */}
            <div className="grid gap-4 pt-4">
              {ABOUT_PILLARS.map((pillar, i) => (
                <SectionReveal key={pillar.title} direction="right" delay={0.6 + i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-border hover:border-primary/30 transition-all duration-300 group">
                    <motion.div
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={iconVariants}
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-primary font-heading font-bold text-lg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
