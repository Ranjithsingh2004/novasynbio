"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Move cursor with GSAP
    let mouseX = 0;
    let mouseY = 0;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      xTo(mouseX);
      yTo(mouseY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover states for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, .magnetic");
    
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "rgba(45, 74, 62, 0.1)", // Green tint
        borderColor: "rgba(45, 74, 62, 0.5)",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(212, 175, 55, 0.5)", // Gold tint
        duration: 0.3,
      });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-primary/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
}
