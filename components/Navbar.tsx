import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed  top-0 z-50 backdrop-blur-md w-full    px-10 ">
      <div className="max-md:container mx-auto flex items-center  justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Image
            src="/LOGO.jpg"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>

        {/* CENTER NAV */}
        <ul
          id="main-nav2"
          className="max-lg:[&.show]:block max-lg:hidden max-lg:w-full max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:py-2 max-lg:bg-black max-lg:rounded-b-lg max-lg:z-10 max-lg:text-white flex flex-col lg:flex-row lg:items-center lg:gap-6"
        >
          <li className="relative">
            <Link
              href="#section-1"
              className="active flex py-2 px-3 hover:text-accent"
            >
              Home
            </Link>
          </li>

          <li className="relative">
            <Link href="about" className="flex py-2 px-3 hover:text-accent">
              About
            </Link>
          </li>

          <li className="relative">
            <Link href="services" className="flex py-2 px-3 hover:text-accent">
              Services
            </Link>
          </li>

          <li className="relative">
            <Link href="#contact" className="flex py-2 px-3 hover:text-accent">
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT CTA */}
        <Link
          href="#"
          className="py-2.5 px-5 inline-flex items-center gap-x-2 rounded-sm text-sm font-medium border border-black bg-lime-200 hover:bg-lime-300 text-black"
        >
          <i className="bi bi-cart"></i>
          <span className="hidden md:inline">Get in touch</span>
        </Link>
      </div>
    </nav>
  );
}
