"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import VariableProximity from "./ui/VariableProximity";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

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
<>

<footer ref={footerRef} className="bg-primary w-full font-serif text-text h-screen pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl  flex flex-col">

    <div ref={containerRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
        
        <div className="lg:col-span-3 space-y-6">
            <Link href="https://prebuiltui.com" className="block">
                <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
            <p className="text-sm/6 text-text/60 max-w-96">PrebuiltUI helps you build faster by transforming your design vision into fully functional, production-ready UI components.</p>
            <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                {/* X (Twitter) */}
                <a href="#" className="text-text hover:text-secondary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                </a>
                {/* Github */}
                <a href="#" className="text-text hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                </a>
                {/* Linkedin */}
                <a href="#" className="text-text hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                </a>
                {/* Youtube */}
                <a href="#" className="text-text hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
                    </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-text hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
            {/* Products */}
            <div>
                <h3 className="font-medium text-sm mb-4 text-text">Products</h3>
                <ul className="space-y-3 text-sm text-text/60">
                    <li><Link href="#" className="hover:text-secondary transition-colors">Components</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Templates</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Icons</Link></li>
                </ul>
            </div>

            {/* Resources */}
            <div>
                <h3 className="font-medium text-sm mb-4 text-text">Resources</h3>
                <ul className="space-y-3 text-sm text-text/60">
                    <li><Link href="#" className="hover:text-secondary transition-colors">PrebuiltUI</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Templates</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Components</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Blogs</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Store</Link></li>
                </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
                <h3 className="font-medium text-sm mb-4 text-text">Company</h3>
                <ul className="space-y-3 text-sm text-text/60">
                    <li><Link href="#" className="hover:text-secondary transition-colors">About</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Vision</Link></li>
                    <li className="flex items-center gap-2">
                        <Link href="#" className="hover:text-secondary transition-colors">Careers</Link>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent/20 border border-accent text-text">HIRING</span>
                    </li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Privacy policy</Link></li>
                    <li><Link href="#" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </div>

    {/* Copyright */}
    <div className="max-w-7xl w-full mx-auto mt-12 pt-4 border-t border-text/20 flex justify-between items-center">
        <p className="text-text/50 text-sm">© 2026 PrebuiltUI Design</p>
        <p className="text-sm text-text/50">All rights reserved.</p>
    </div>

    {/* Spacer */}
    <div className="flex-1" />

    {/* Bottom watermark */}
    <div className="relative ">
       
        {/* <h3 className="text-center font-extrabold leading-none text-[12vw] text-text/10 w-full">
            PrebuiltUI
        </h3> */}

        <div ref={bottomRef} className="relative w-full">
    {/* <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-40 bg-secondary rounded-full blur-[170px] pointer-events-none" /> */}
    <VariableProximity
        label={'Shubharambh'}
        className="text-center font-extrabold leading-none text-[12vw] text-text/10 w-full "
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={bottomRef}
        radius={150}
        falloff="linear"
    />
</div>

       
    </div>

</footer>

</>
  );
}

