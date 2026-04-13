//  "use client";

//  import Image from "next/image";

//  export default function HeroSection() {
//    return (
//  <section className="hero relative h-svh w-full">

// <div className="hero-img absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden">
//          <Image
//            src="/hero.png"
//            alt=""
//            fill
//            className="object-cover"
//          />
//        </div>

//    <div className="  w-full h-full p-6 md:p-16 flex items-end justify-center text-center">
//      <h1 className="w-full md:w-[75%] text-[2.5rem] md:text-[3rem] leading-none text-secondary [text-shadow:5px_5px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black] ">
//        MAKE EVERY OCASSION <br />EXTRA SPECIAL
//      </h1>
//    </div>

//        <div className="hero-copy absolute w-full h-full p-16 flex items-end text-white">
//          <h3 className="w-[25%] text-[3rem] max-[1000px]:text-[2rem] max-[1000px]:w-full">
//           Minimal tagline
//          </h3>
//        </div>

//  </section>
//   );
// }

"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero relative h-[100svh] w-full" id="section-1">
      <div className="hero-img absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        {/* <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="  w-full h-full p-6 md:p-16 flex items-end justify-center text-center">
        <h1 className="w-full md:w-[75%] text-[2.5rem] md:text-[3rem] leading-none text-secondary [text-shadow:5px_5px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black] ">
          MAKE EVERY OCASSION <br />
          EXTRA SPECIAL
        </h1>
      </div>

      <div className="hero-copy absolute bottom-2 right-80 p-6 md:p-16">
        <h3 className="text-[3rem] max-[1000px]:text-[2rem] text-primary [text-shadow:5px_5px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black]">
          Be a Guest at Your Own Event
        </h3>
      </div>
    </section>
  );
}
