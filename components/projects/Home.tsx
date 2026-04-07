"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Project } from "./Projects";
import ScrollFloat from "../ui/ScrollFloat";
import TextPressure from "../ui/TextPressure";


export default function ProjectHome() {
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
     <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden bg-background">
  
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
    
    {/* LEFT SIDE */}
    <div className="flex flex-col gap-6">
     

      <div className="text-5xl md:text-7xl font-semibold leading-tight">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Our Work
        </ScrollFloat>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl backdrop-blur-sm">
      A celebration brand had lost its magic to repetitive, uninspired setups. 
      The goal was not just to decorate, but to reimagine every event as an 
      immersive experience where birthdays, weddings, retirements, and baby 
      showers become beautifully curated, vibrant, and unforgettable moments.
    </div>

  </div>

  {/* OPTIONAL BACKGROUND GLOW */}
  <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-purple-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

</section>

      <Project />

      {/* Outro */}
      {/* <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <p className="uppercase text-[0.9rem] font-medium tracking-[-0.02rem] leading-none">
          Outro section
        </p>
      </section> */}

    </ReactLenis>
  );
}