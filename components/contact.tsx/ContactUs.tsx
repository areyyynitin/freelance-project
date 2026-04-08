"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 3D refs
  const modelBaseZ = useRef(0);
  const modelBaseRotationX = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const contact = contactRef.current;
    const container = containerRef.current;
    const bottom = bottomRef.current;

    if (!contact || !container || !bottom) return;

    const st = ScrollTrigger.create({
      trigger: contact,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

       let topY, bottomY;

  if (progress <= 0.5) {
    // 🔓 OPENING (0 → 0.5)
    const p = progress * 2;

    topY = gsap.utils.interpolate(-35, 0, p);
    bottomY = gsap.utils.interpolate(35, 0, p);
  } else {
    // 🔒 CLOSING (0.5 → 1)
    const p = (progress - 0.5) * 2;

    topY = gsap.utils.interpolate(0, -35, p);
    bottomY = gsap.utils.interpolate(0, 35, p);
  }

  gsap.set(containerRef.current, { y: `${topY}%` });
  gsap.set(bottomRef.current, { y: `${bottomY}%` });

        // 🎯 3D sync (optional)
        modelBaseZ.current = gsap.utils.interpolate(-1, 0, progress);
        modelBaseRotationX.current = gsap.utils.interpolate(0.5, 0, progress);
      },
    });

    return () => {
      st.kill();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <section
      ref={contactRef}
      className="relative h-[100vh] w-full overflow-hidden bg-secondary text-white"
    >
      {/* 🔝 TOP CONTENT */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center will-change-transform"
      >
        <h1 className="text-[clamp(3rem,8vw,8rem)] font-light">
          Contact Us
        </h1>
      </div>

      {/* 🔻 BOTTOM CONTENT */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center will-change-transform"
      >
        <h1 className="text-[clamp(2rem,6vw,6rem)] font-light opacity-50">
          Let’s Talk
        </h1>
      </div>
      <div></div>
    </section>
  );
}