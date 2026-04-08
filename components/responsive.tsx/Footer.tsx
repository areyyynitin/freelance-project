"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VariableProximity from "../ui/VariableProximity";

gsap.registerPlugin(ScrollTrigger);

export default function MobileFooter() {
  return (
    <footer
      className="
        bg-primary text-text font-serif
        w-full
        min-h-[100svh]
        flex flex-col justify-between
        pt-10 md:pt-14
        px-4 sm:px-6 md:px-10 lg:px-20
        rounded-tl-3xl rounded-tr-3xl
      "
    >
      {/* 🔝 TOP CONTENT */}
      <div
        className="
          w-full max-w-7xl mx-auto
          grid
          grid-cols-1
          lg:grid-cols-6
          gap-10 md:gap-12
        "
      >
        {/* LEFT */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <Link href="#">
            <div className="w-[110px] h-[38px] bg-text/20 rounded" />
          </Link>

          <p className="text-sm text-text/60 max-w-md leading-relaxed">
            PrebuiltUI helps you build faster by transforming your design vision
            into fully functional, production-ready UI components.
          </p>

          {/* SOCIAL */}
          <div className="flex flex-wrap gap-4 sm:gap-5">
            {["X", "GitHub", "LinkedIn", "YouTube", "Instagram"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-text/70 hover:text-secondary transition text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            lg:col-span-3
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-8 sm:gap-10 md:gap-12
          "
        >
          {/* Products */}
          <div>
            <h3 className="text-sm font-medium mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-text/60">
              <li>Components</li>
              <li>Templates</li>
              <li>Icons</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-text/60">
              <li>PrebuiltUI</li>
              <li>Templates</li>
              <li>Components</li>
              <li>Blogs</li>
              <li>Store</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-text/60">
              <li>About</li>
              <li>Vision</li>
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔽 BOTTOM SECTION */}
      <div className="w-full mt-12">
        {/* Copyright */}
        <div
          className="
            max-w-7xl mx-auto
            pt-5
            border-t border-text/20
            flex flex-col sm:flex-row
            items-center justify-between
            gap-3
            text-center sm:text-left
          "
        >
          <p className="text-text/50 text-xs sm:text-sm">
            © 2026 PrebuiltUI Design
          </p>
          <p className="text-text/50 text-xs sm:text-sm">
            All rights reserved.
          </p>
        </div>

        {/* Watermark */}
        <div className="relative mt-10 overflow-hidden">
          <div>
            <h1
              className="
                text-center font-extrabold leading-none
                w-full
                text-[clamp(3rem,12vw,10rem)]
                text-text/10
                select-none
              "
            >
              Shubharambh
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
