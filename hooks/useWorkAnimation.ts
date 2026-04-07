import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const ROW_SPEEDS = [1.0, -0.75, 0.9, -0.55] as const;

interface UseWorkAnimationArgs {
  sectionRef: RefObject<HTMLElement | null>;
  cardsRef: RefObject<HTMLDivElement | null>;
  marqueeRowRefs: RefObject<HTMLDivElement[]>;
  cardItemRefs: RefObject<HTMLElement[]>;
}

export function useWorkAnimation({
  sectionRef,
  cardsRef,
  marqueeRowRefs,
  cardItemRefs,
}: UseWorkAnimationArgs) {
  useEffect(() => {
    const section   = sectionRef.current;
    const cards     = cardsRef.current;
    const rows      = marqueeRowRefs.current;
    const cardItems = cardItemRefs.current;

    if (!section || !cards || !rows.length || !cardItems.length) return;

    // ── Smooth scroll ────────────────────────────────────────────────────────
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const lenisTickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisTickerCb);
    gsap.ticker.lagSmoothing(0);

    // ── Card entrance ────────────────────────────────────────────────────────
    // All cards start nudged down 40px — animate to 0 once on section entry.
    // NO opacity tricks — cards are always opacity:1 regardless of position.
    gsap.set(cardItems, { y: 40 });

    const entranceST = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(cardItems, {
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.06,
        });
      },
    });

    // ── Horizontal scroll ────────────────────────────────────────────────────
    const getScrollDist = () => cards.scrollWidth - window.innerWidth;

    const cardTween = gsap.to(cards, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // ── Marquee parallax ─────────────────────────────────────────────────────
    const marqueeST = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollDist()}`,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress;
        rows.forEach((row, i) => {
          const speed = ROW_SPEEDS[i] ?? 1;
          const xPx   = (p - 0.5) * window.innerWidth * 1 * speed;
          row.style.transform = `translateX(${xPx}px)`;
        });
      },
    });

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(lenisTickerCb);
      entranceST.kill();
      cardTween.kill();
      marqueeST.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []); // refs are stable — empty dep array is correct
}