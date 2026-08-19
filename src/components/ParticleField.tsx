"use client";

import { useRef, useMemo, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  const lastFrameTime = useRef<number>(0);

  const particles = useMemo(() => {
    if (dimensions.width === 0) return [];
    const count = Math.min(20, Math.floor((dimensions.width * dimensions.height) / 60000));
    const ps: Particle[] = [];
    for (let i = 0; i < count; i++) {
      ps.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
    return ps;
  }, [dimensions]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || particles.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let frame = 0;
    const FRAME_INTERVAL = 1000 / 30; // Cap at 30fps — particles don't need 60fps

    const animate = (timestamp: number) => {
      // Throttle to 30fps
      const elapsed = timestamp - lastFrameTime.current;
      if (elapsed < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = timestamp - (elapsed % FRAME_INTERVAL);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Draw dust motes
      particles.forEach((particle) => {
        const pulse = Math.sin(frame * particle.pulseSpeed + particle.pulseOffset) * 0.3 + 0.7;
        const currentAlpha = particle.opacity * pulse;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const colorSeed = (particle.x + particle.y) % 3;
        if (colorSeed < 1) {
          ctx.fillStyle = `rgba(212, 175, 55, ${currentAlpha * 0.8})`;
        } else if (colorSeed < 2) {
          ctx.fillStyle = `rgba(45, 74, 62, ${currentAlpha * 0.5})`;
        } else {
          ctx.fillStyle = `rgba(224, 122, 95, ${currentAlpha * 0.6})`;
        }
        
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [particles, dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
