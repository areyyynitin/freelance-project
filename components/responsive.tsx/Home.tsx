"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import WorkHome from "../work/WorkHome";
import ContactSection from "../contact.tsx/ContactUs";
import Footer from "../Footer";
import ProjectHome from "../projects/Home";
import Navbar from "../Navbar";
import Hero from "../hero/Hero";
import MobileHeroSection from "./MobileHero";
import MobileContactSection from "./Contact";
import MobileFooter from "./Footer";

export default function HomeRes() {
  const isMobile = useIsMobile();
  return (
    <>
      <section>
        {isMobile ? (
          <>
            <MobileHeroSection />
            <MobileContactSection />
            <MobileFooter />
          </>
        ) : (
          <>
            <div className="min-h-screen flex flex-col">
              <Navbar />

              {/* ❌ NO overflow-hidden here */}
              <main className="flex-1">
                <section className="overflow-hidden">
                  <Hero />
                </section>

                <section className="overflow-hidden">
                  <WorkHome />
                </section>

                <section className="overflow-hidden">
                  <ProjectHome />
                </section>

                <section className="overflow-hidden">
                  <ContactSection />
                </section>
              </main>

              <Footer />
            </div>
          </>
        )}
      </section>
    </>
  );
}
