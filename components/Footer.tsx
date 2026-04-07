"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // ✅ useRef instead of normal variables
  const modelBaseZ = useRef(0);
  const modelBaseRotationX = useRef(0);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const footer = footerRef.current;
    const footerContainer = containerRef.current;

    if (!footer || !footerContainer) return;

    const st = ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        const yValue = -35 * (1 - progress);
        gsap.set(footerContainer, { y: `${yValue}%` });

        // ✅ safe updates
        modelBaseZ.current = -1 * (1 - progress);
        modelBaseRotationX.current = 0.5 * (1 - progress);

        // 👉 if using Three.js, you can directly apply here:
        // mesh.position.z = modelBaseZ.current;
        // mesh.rotation.x = modelBaseRotationX.current;
      },
    });

    return () => {
      st.kill();
      lenis.destroy();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative h-[100svh] w-full bg-accent text-black overflow-hidden"
    >
      <div
        ref={containerRef}
        className="relative w-full h-full p-8 flex flex-col justify-between translate-y-[-35%]"
      >
        <h1 className="text-[clamp(2rem,5vw,6rem)] font-light">
          Let’s Work
        </h1>

        <div className="flex flex-col gap-2">
          {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map((item) => (
            <a key={item} href="#" className="text-xl font-light">
              {item}
            </a>
          ))}
        </div>

        <div className="flex justify-between text-sm opacity-70">
          <p>© 2026</p>
          <p>GSAP + Lenis</p>
        </div>
      </div>
    </footer>
  );
}