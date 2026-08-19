"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Capabilities from "@/components/Capabilities";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ParticleField />
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Capabilities />
      <Statistics />
      <CTA />
      <Footer />
    </main>
  );
}
