"use client";

import Image from "next/image";

export default function HeroSection({ title, subtitle }: {
  title: string;
  subtitle: string;
}) {
  return (
<section className="hero relative h-[100svh] w-full">
  
  <div className="hero-img absolute md:top-1/2 md:left-1/2 w-full h-full md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden">
    <Image src="/dont_change_anything_202604062012.png" alt="" fill className="object-cover" />
  </div>

  <div className="hero-header absolute w-full h-full p-6 md:p-16 flex items-end text-white">
    <h1 className="w-full md:w-[75%] text-[2.5rem] md:text-[5rem] leading-none">
      A hero text goes here for testing
    </h1>
  </div>

  <div className="hero-copy absolute w-full h-full p-6 md:p-16 flex items-end text-white">
    <h3 className="w-full md:w-[25%] text-[1.5rem] md:text-[3rem] leading-none">
      {/* A more text that everyone liked it */}
    </h3>
  </div>

</section>
  );
}