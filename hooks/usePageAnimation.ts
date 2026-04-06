// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "gsap/SplitText";
// import Lenis from "lenis";

// gsap.registerPlugin(ScrollTrigger);

// export function GSAP(): () => void {
//   const lenis = new Lenis();

//   lenis.on("scroll", ScrollTrigger.update);

//   gsap.ticker.add((time: number) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing(0);

//   const heroCopySplit = SplitText.create(".hero-copy h3", {
//     type: "words",
//     wordsClass: "word",
//   });

//   let isHeroCopyHidden: boolean = false;

//   const trigger = ScrollTrigger.create({
//     trigger: ".hero",
//     start: "top top",
//     end: `+=${window.innerHeight * 3.5}`,
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,

//     onUpdate: (self: ScrollTrigger) => {
//       const progress: number = self.progress;

//       // header
//       const heroHeaderProgress: number = Math.min(progress / 0.29, 1);
//       gsap.set(".hero-header", { yPercent: -heroHeaderProgress * 100 });

//       // words animation
//       const heroWordProgress: number = Math.max(
//         0,
//         Math.min(progress / 0.29 / 0.21, 1)
//       );

//       const totalWords: number = heroCopySplit.words.length;

//       heroCopySplit.words.forEach((word: Element, i: number) => {
//         const wordStart: number = i / totalWords;
//         const wordEnd: number = (i + 1) / totalWords;

//         const opacity: number = Math.max(
//           0,
//           Math.min((heroWordProgress - wordStart) / (wordEnd - wordStart), 1)
//         );

//         gsap.set(word, { opacity });
//       });

//       // hide/show text
//       if (progress >= 0.64 && !isHeroCopyHidden) {
//         isHeroCopyHidden = true;
//         gsap.to(".hero-copy h3", { opacity: 0, duration: 0.2 });
//       } else if (progress <= 0.64 && isHeroCopyHidden) {
//         isHeroCopyHidden = false;
//         gsap.to(".hero-copy h3", { opacity: 1, duration: 0.2 });
//       }

//       // image animation
//       const heroImgProgress: number = Math.max(
//         0,
//         Math.min((progress - 0.71) / 0.29, 1)
//       );

//       gsap.set(".hero-img", {
//         width: gsap.utils.interpolate(window.innerWidth, 150, heroImgProgress),
//         height: gsap.utils.interpolate(window.innerHeight, 150, heroImgProgress),
//         borderRadius: gsap.utils.interpolate(0, 10, heroImgProgress),
//       });
//     },
//   });

//   // about section animation
//   const aboutAnimations: gsap.core.Tween[] = [];

//   const aboutImgCols: { id: string; y: number }[] = [
//     { id: "#about-imgs-col-1", y: -500 },
//     { id: "#about-imgs-col-2", y: -250 },
//     { id: "#about-imgs-col-3", y: -250 },
//     { id: "#about-imgs-col-4", y: -500 },
//   ];

//   aboutImgCols.forEach(({ id, y }) => {
//     const anim = gsap.to(id, {
//       y,
//       scrollTrigger: {
//         trigger: ".about",
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1,
//       },
//     });

//     aboutAnimations.push(anim);
//   });

//   // cleanup
//   return () => {
//     trigger.kill();
//     heroCopySplit.revert();
//     aboutAnimations.forEach((a) => a.kill());
//     ScrollTrigger.getAll().forEach((t) => t.kill());
//     lenis.destroy();
//   };
// }














"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const heroCopySplit = SplitText.create(".hero-copy h3", {
      type: "words",
      wordsClass: "word",
    });

    let isHeroCopyHidden = false;

    const trigger = ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `+=${window.innerHeight * 3.5}`,
      pin: true,
      pinSpacing: false,
      scrub: 1,

      onUpdate: (self: ScrollTrigger) => {
        const progress = self.progress;

        const heroHeaderProgress = Math.min(progress / 0.29, 1);
        gsap.set(".hero-header", { yPercent: -heroHeaderProgress * 100 });

        const heroWordProgress = Math.max(
          0,
          Math.min(progress / 0.29 / 0.21, 1)
        );

        const totalWords = heroCopySplit.words.length;

        heroCopySplit.words.forEach((word: Element, i: number) => {
          const wordStart = i / totalWords;
          const wordEnd = (i + 1) / totalWords;

          const opacity = Math.max(
            0,
            Math.min((heroWordProgress - wordStart) / (wordEnd - wordStart), 1)
          );

          gsap.set(word, { opacity });
        });

        if (progress >= 0.64 && !isHeroCopyHidden) {
          isHeroCopyHidden = true;
          gsap.to(".hero-copy h3", { opacity: 0, duration: 0.2 });
        } else if (progress <= 0.64 && isHeroCopyHidden) {
          isHeroCopyHidden = false;
          gsap.to(".hero-copy h3", { opacity: 1, duration: 0.2 });
        }

        const heroImgProgress = Math.max(
          0,
          Math.min((progress - 0.71) / 0.29, 1)
        );

        gsap.set(".hero-img", {
          width: gsap.utils.interpolate(window.innerWidth, 150, heroImgProgress),
          height: gsap.utils.interpolate(window.innerHeight, 150, heroImgProgress),
          borderRadius: gsap.utils.interpolate(0, 10, heroImgProgress),
        });
      },
    });

    const aboutImgCols = [
      { id: "#about-imgs-col-1", y: -500 },
      { id: "#about-imgs-col-2", y: -250 },
      { id: "#about-imgs-col-3", y: -250 },
      { id: "#about-imgs-col-4", y: -500 },
    ];

    const animations = aboutImgCols.map(({ id, y }) =>
      gsap.to(id, {
        y,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    );

    return () => {
      trigger.kill();
      heroCopySplit.revert();
      animations.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);
};