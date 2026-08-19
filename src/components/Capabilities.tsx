"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { CAPABILITIES } from "@/lib/constants";

const icons: Record<string, React.ReactElement> = {
  dna: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  brain: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  target: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
  chart: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  microscope: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

export default function Capabilities() {
  const triggerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (triggerRef.current && containerRef.current) {
      const container = containerRef.current;
      
      const getScrollAmount = () => {
        let containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth + 200); // 200px buffer
      };

      const mm = gsap.matchMedia();

      // Desktop animation: horizontal scroll pinning
      mm.add("(min-width: 768px)", () => {
        const tween = gsap.to(container, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.kill();
        };
      });

      return () => {
        mm.revert();
      };
    }
  }, []);

  return (
    <section id="capabilities" ref={triggerRef} className="relative bg-background overflow-hidden md:h-screen flex flex-col justify-center py-24 md:py-0">
      {/* Title Area with Gradient Mask (Pinned on Desktop) */}
      <div className="md:absolute top-0 left-0 w-full md:w-[45%] h-auto md:h-full px-6 md:px-16 z-10 flex flex-col justify-center md:pointer-events-none md:bg-gradient-to-r from-background via-background/95 to-transparent mb-12 md:mb-0">
        <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-4 mt-20 md:mt-0">
          What We Do
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 pr-8">
          <TextReveal className="inline-block mr-3">Our</TextReveal>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block pb-2"
          >
            Capabilities
          </motion.span>
        </h2>
        <p className="text-text-muted text-lg max-w-sm leading-relaxed pr-8">
          From molecular discovery to clinical validation, our integrated platform
          capabilities accelerate every stage of therapeutic development.
        </p>
      </div>

      <div className="w-full overflow-hidden flex items-center md:mt-32">
        <div ref={containerRef} className="flex flex-col md:flex-row gap-8 px-6 md:px-16 md:pl-[30vw] items-center">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className="relative w-[320px] md:w-[400px] h-[450px] flex-shrink-0 p-8 rounded-3xl bg-surface/40 border border-border hover:border-primary/40 transition-all duration-500 group overflow-hidden flex flex-col will-change-transform"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-500 flex-shrink-0">
                {icons[cap.icon]}
              </div>

              <h3 className="relative font-heading text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {cap.title}
              </h3>

              <p className="relative text-text-muted text-base leading-relaxed flex-grow">
                {cap.description}
              </p>

              {/* Arrow indicator */}
              <div className="relative mt-auto flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
