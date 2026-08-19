"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolledRef = useRef(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only trigger a re-render when the boolean state actually changes
    const isScrolled = latest > 50;
    if (isScrolled !== scrolledRef.current) {
      scrolledRef.current = isScrolled;
      setScrolled(isScrolled);
    }
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" className="w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0AFFEF" />
                    <stop offset="100%" stopColor="#7B61FF" />
                  </linearGradient>
                </defs>
                <path
                  d="M18 2 L32 10 L32 26 L18 34 L4 26 L4 10 Z"
                  fill="none"
                  stroke="url(#logoGrad)"
                  strokeWidth="2"
                  className="group-hover:stroke-[3] transition-all duration-300"
                />
                <circle cx="18" cy="18" r="5" fill="url(#logoGrad)" opacity="0.8" />
                <circle cx="18" cy="18" r="2" fill="#040B14" />
              </svg>
            </div>
            <span className="font-heading text-xl font-bold tracking-tight">
              <span className="text-primary">Nova</span>
              <span className="text-text-primary">Syn</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Magnetic key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-text-muted hover:text-primary text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              </Magnetic>
            ))}
            <Magnetic>
              <button
                onClick={() => handleNavClick("#cta")}
                className="btn-primary text-sm !py-2.5 !px-5"
              >
                Get Started
              </button>
            </Magnetic>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-text-primary block transition-colors group-hover:bg-primary"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-text-primary block transition-colors group-hover:bg-primary"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-text-primary block transition-colors group-hover:bg-primary"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 md:hidden"
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0 bg-background/80"
          onClick={() => setMobileOpen(false)}
        />
        <div className="absolute right-0 top-0 h-full w-72 bg-surface border-l border-border p-8 pt-24 flex flex-col gap-6">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-lg text-text-muted hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.6 }}
            onClick={() => handleNavClick("#cta")}
            className="btn-primary mt-4 justify-center"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
