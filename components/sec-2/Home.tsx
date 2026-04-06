"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Project } from "./Projects";

export default function Work() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      
      {/* Intro */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <p className="uppercase text-[0.9rem] font-medium tracking-[-0.02rem] leading-none">
          Intro section
        </p>
      </section>

      <Project />

      {/* Outro */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <p className="uppercase text-[0.9rem] font-medium tracking-[-0.02rem] leading-none">
          Outro section
        </p>
      </section>

    </ReactLenis>
  );
}