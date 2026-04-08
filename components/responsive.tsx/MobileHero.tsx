"use client";

import Image from "next/image";
import { Button } from "../retroui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary [text-shadow:5px_5px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black]">
          Be a guest at your own event
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 text-primary [text-shadow:5px_5px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black]">
          MAKE EVERY OCASSION <br />
          EXTRA SPECIAL
        </p>

        {/* Button */}
        <div className="flex justify-center mt-5 text-black items-end">
          <Link href="/services">
            <Button className="">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
