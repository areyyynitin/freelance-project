import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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

    gsap.ticker.lagSmoothing(0);
    gsap.set(cardItems, { y: 40 });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []); 
}