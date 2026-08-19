"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextReveal({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const words = containerRef.current?.querySelectorAll(".word");
    if (!words || words.length === 0) return;

    const tween = gsap.fromTo(
      words,
      { y: "100%", rotationZ: 10, opacity: 0 },
      {
        y: "0%",
        rotationZ: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-1 mr-[0.25em]"
        >
          <span className="word inline-block origin-bottom-left">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
