"use client";

import Image from "next/image";

export default function Hero({ title, subtitle }: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="hero relative h-[100svh] w-full">
      <div className="hero-img absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <Image
          src="/rifandi-g-1xzMk6SzciQ-unsplash.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="hero-header absolute w-full h-full p-16 flex items-end text-white">
        <h1 className="w-[75%] text-[5rem] max-[1000px]:text-[3rem] max-[1000px]:w-full">
          {title}
        </h1>
      </div>

      <div className="hero-copy absolute w-full h-full p-16 flex items-end text-white">
        <h3 className="w-[25%] text-[3rem] max-[1000px]:text-[2rem] max-[1000px]:w-full">
          {subtitle}
        </h3>
      </div>
    </section>
  );
}