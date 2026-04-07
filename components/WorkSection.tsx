"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work } from "./projects/Data";
import { useWorkAnimation } from "@/hooks/useWorkAnimation";

// ── Constants ────────────────────────────────────────────────────────────────
const REPEAT_COUNT = 12;
const ROW_SPEEDS   = [1.0, -0.75, 0.9, -0.55] as const;

// ── Props ────────────────────────────────────────────────────────────────────
interface WorkSectionProps {
  projects: Work[];
  /** Section heading shown in the corner label. Default: "Work" */
  label?: string;
  /** Image fill color while loading. Default: uses --secondary token */
  imagePlaceholderColor?: string;
}

// ── Component ────────────────────────────────────────────────────────────────
export default function WorkSection({
  projects,
  label = "Work",
}: WorkSectionProps) {
  // Element refs — typed correctly for strict TS
  const sectionRef  = useRef<HTMLElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);

  // Collect multiple refs into stable arrays
  const marqueeRowRefs = useRef<HTMLDivElement[]>([]);
  const cardItemRefs   = useRef<HTMLElement[]>([]);

  // Callback-refs so we can push into the arrays without index gymnastics
  const setMarqueeRowRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      if (el) marqueeRowRefs.current[i] = el;
    },
    []
  );

  const setCardItemRef = useCallback(
    (i: number) => (el: HTMLElement | null) => {
      if (el) cardItemRefs.current[i] = el;
    },
    []
  );

  // All animation logic lives in the hook
  useWorkAnimation({ sectionRef, cardsRef, marqueeRowRefs, cardItemRefs });

  return (
    <section
      ref={sectionRef}
      className="work relative w-full h-screen overflow-hidden overflow-x-hidden bg-background"
    >
      {/* ── Marquee background ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          flex flex-col justify-around overflow-hidden
        "
      >
        {ROW_SPEEDS.map((_, i) => (
          <div
            key={i}
            ref={setMarqueeRowRef(i)}
            className="flex items-center will-change-transform"
          >
            {/* Two strips = 2× coverage for seamless loop */}
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center shrink-0">
                {Array.from({ length: REPEAT_COUNT }).map((_, j) => (
                  <span
                    key={j}
                    className={[
                      "select-none whitespace-nowrap uppercase leading-none",
                      "font-serif font-black text-transparent",
                      // Brutalist outlined type — alternating rows differ in tint
                      i % 2 === 0
                        ? "[--stroke:rgba(153,105,122,0.13)]"
                        : "[--stroke:rgba(147,179,143,0.09)]",
                      "[-webkit-text-stroke:1.5px_var(--stroke)]",
                      // Fluid size: 6rem → 17rem
                      "text-[clamp(6rem,14vw,17rem)]",
                      "px-[clamp(1.5rem,4vw,6rem)]",
                      "tracking-[-0.03em]",
                    ].join(" ")}
                  >
                    WORK
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      

      {/* ── Cards strip ────────────────────────────────────────────────────── */}
      <div
        ref={cardsRef}
        className="
          cards
          relative z-10
          flex items-center
          h-full w-max
          gap-[clamp(1px,0.15vw,3px)]
          px-[clamp(32px,6vw,96px)]
          will-change-transform
        "
      >
        {projects.map((project, i) => {
          const CardWrapper = project.href ? Link : "article";
          const wrapperProps = project.href
            ? { href: project.href }
            : {};

          return (
            <CardWrapper
              key={project.id}
              {...(wrapperProps as any)}
              ref={setCardItemRef(i)}
              className="
                card
                group
                flex flex-col shrink-0
                w-[clamp(220px,20vw,340px)]
                border border-[rgba(18,12,14,0.12)]
                bg-[#f8f5f6]
                cursor-pointer
                hover:border-[#99697a]
                transition-colors duration-200
              "
            >
              {/* Meta row */}
              <div
                className="
                  flex justify-between items-center
                  px-3 py-2.5
                  border-b border-[rgba(18,12,14,0.12)]
                "
              >
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#99697a]">
                  {project.id}
                </span>
                <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-[rgba(18,12,14,0.35)]">
                  {project.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full aspect-4/5 overflow-hidden bg-[#c0cbb2]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 340px"
                />
                {/* Brutalist hover overlay — snaps on, no easing */}
                <div
                  className="
                    absolute inset-0
                    bg-[#99697a] mix-blend-multiply
                    opacity-0 group-hover:opacity-25
                    transition-none
                  "
                />
              </div>

              {/* Footer row */}
              <div
                className="
                  flex justify-between items-baseline
                  px-3 py-2.5
                  border-t border-[rgba(18,12,14,0.12)]
                "
              >
                <h2
                  className="
                    font-serif font-normal italic
                    text-[clamp(0.95rem,1.4vw,1.35rem)]
                    tracking-[-0.01em] leading-[1.1]
                    text-[#120c0e]
                  "
                >
                  {project.title}
                </h2>
                <span className="font-mono text-[0.55rem] tracking-[0.14em] text-[rgba(18,12,14,0.3)] ml-2 shrink-0">
                  {project.year}
                </span>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}