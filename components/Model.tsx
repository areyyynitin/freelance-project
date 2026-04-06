"use client";

import Image from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
export default function Model() {
  function GSAP(): () => void {
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

    let isHeroCopyHidden: boolean = false;

    const trigger = ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `+=${window.innerHeight * 3.5}`,
      pin: true,
      pinSpacing: false,
      scrub: 1,

      onUpdate: (self: ScrollTrigger) => {
        const progress: number = self.progress;

        // header
        const heroHeaderProgress: number = Math.min(progress / 0.29, 1);
        gsap.set(".hero-header", { yPercent: -heroHeaderProgress * 100 });

        // words animation
        const heroWordProgress: number = Math.max(
          0,
          Math.min(progress / 0.29 / 0.21, 1)
        );

        const totalWords: number = heroCopySplit.words.length;

        heroCopySplit.words.forEach((word: Element, i: number) => {
          const wordStart: number = i / totalWords;
          const wordEnd: number = (i + 1) / totalWords;

          const opacity: number = Math.max(
            0,
            Math.min((heroWordProgress - wordStart) / (wordEnd - wordStart), 1)
          );

          gsap.set(word, { opacity });
        });

        // hide/show text
        if (progress >= 0.64 && !isHeroCopyHidden) {
          isHeroCopyHidden = true;
          gsap.to(".hero-copy h3", { opacity: 0, duration: 0.2 });
        } else if (progress <= 0.64 && isHeroCopyHidden) {
          isHeroCopyHidden = false;
          gsap.to(".hero-copy h3", { opacity: 1, duration: 0.2 });
        }

        // image animation
        const heroImgProgress: number = Math.max(
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

    // about section animation
    const aboutAnimations: gsap.core.Tween[] = [];

    const aboutImgCols: { id: string; y: number }[] = [
      { id: "#about-imgs-col-1", y: -500 },
      { id: "#about-imgs-col-2", y: -250 },
      { id: "#about-imgs-col-3", y: -250 },
      { id: "#about-imgs-col-4", y: -500 },
    ];

    aboutImgCols.forEach(({ id, y }) => {
      const anim = gsap.to(id, {
        y,
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      aboutAnimations.push(anim);
    });

    // cleanup
    return () => {
      trigger.kill();
      heroCopySplit.revert();
      aboutAnimations.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }
  useEffect(() => {
    const cleanup = GSAP();

    return () => {
      cleanup && cleanup(); // ✅ cleanup on unmount
    };
  }, []);

  return (

    <>
      <section className="hero relative h-[100svh] w-full">
        <div className="hero-img absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden will-change-[transform,opacity,width,height]">
          <Image
            src="/rifandi-g-1xzMk6SzciQ-unsplash.jpg"
            alt=""
            className="w-full h-full object-cover"
            fill
          />
        </div>

        <div className="hero-header absolute w-full h-full p-16 flex items-end text-white will-change-[transform,opacity,width,height]">
          <h1 className="w-[75%] text-[5rem] font-normal tracking-[-0.05rem] leading-none max-[1000px]:text-[3rem] max-[1000px]:w-full">
            A hero text goes here for testing
          </h1>
        </div>

        <div className="hero-copy absolute w-full h-full p-16 flex items-end text-white will-change-[transform,opacity,width,height]">
          <h3 className="w-[25%] text-[3rem] font-normal tracking-[-0.05rem] leading-none max-[1000px]:text-[2rem] max-[1000px]:w-full">
            A more text that everyone liked it
          </h3>
        </div>
      </section>

      <section className="about relative h-[100svh] w-full flex justify-center items-center text-center mt-[275svh]">
        <div className="about-images w-full h-full flex justify-between items-center p-16 max-[1000px]:p-8">

          {/* COL 1 */}
          <div
            className="about-imgs-col relative h-[125%] flex flex-col justify-around will-change-transform translate-y-[1000px]"
            id="about-imgs-col-1"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="img w-[125px] h-[125px] rounded-[10px] overflow-hidden max-[1000px]:w-[75px] max-[1000px]:h-[75px] max-[1000px]:opacity-25 max-[1000px]:saturate-0">
                <img src="/rifandi-g-1xzMk6SzciQ-unsplash.jpg" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* COL 2 */}
          <div
            className="about-imgs-col relative h-[125%] flex flex-col justify-around will-change-transform -translate-x-[225px] translate-y-[500px] max-[1000px]:translate-x-0"
            id="about-imgs-col-2"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="img w-[125px] h-[125px] rounded-[10px] overflow-hidden max-[1000px]:w-[75px] max-[1000px]:h-[75px] max-[1000px]:opacity-25 max-[1000px]:saturate-0">
                <img src="/rifandi-g-1xzMk6SzciQ-unsplash.jpg" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* COL 3 */}
          <div
            className="about-imgs-col relative h-[125%] flex flex-col justify-around will-change-transform translate-x-[225px] translate-y-[500px] max-[1000px]:translate-x-0"
            id="about-imgs-col-3"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="img w-[125px] h-[125px] rounded-[10px] overflow-hidden max-[1000px]:w-[75px] max-[1000px]:h-[75px] max-[1000px]:opacity-25 max-[1000px]:saturate-0">
                <img src="/rifandi-g-1xzMk6SzciQ-unsplash.jpg" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* COL 4 */}
          <div
            className="about-imgs-col relative h-[125%] flex flex-col justify-around will-change-transform translate-y-[1000px]"
            id="about-imgs-col-4"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="img w-[125px] h-[125px] rounded-[10px] overflow-hidden max-[1000px]:w-[75px] max-[1000px]:h-[75px] max-[1000px]:opacity-25 max-[1000px]:saturate-0">
                <img src="/rifandi-g-1xzMk6SzciQ-unsplash.jpg" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="about-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] max-[1000px]:w-full max-[1000px]:p-8">
          <h3 className="text-[3rem] font-normal tracking-[-0.05rem] leading-none max-[1000px]:text-[2rem]">
            Shubharambh Decoration
          </h3>
        </div>
      </section>

      <section className="outro relative h-[100svh] w-full flex justify-center items-center text-center bg-[#cecec6]">
        <h3 className="w-[35%] text-[3rem] font-normal tracking-[-0.05rem] leading-none max-[1000px]:w-full max-[1000px]:p-8 max-[1000px]:text-[2rem]">
          outro section to know our animation is complete
        </h3>
      </section>
    </>

  );
}