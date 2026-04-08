"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { IconMail, IconMailBitcoin, IconPhoneCall } from "@tabler/icons-react";
import { Button } from "../retroui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 3D refs
  const modelBaseZ = useRef(0);
  const modelBaseRotationX = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const contact = contactRef.current;
    const container = containerRef.current;
    const bottom = bottomRef.current;

    if (!contact || !container || !bottom) return;

    const st = ScrollTrigger.create({
      trigger: contact,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        let topY, bottomY;

        if (progress <= 0.5) {
          // 🔓 OPENING (0 → 0.5)
          const p = progress * 2;

          topY = gsap.utils.interpolate(-35, 0, p);
          bottomY = gsap.utils.interpolate(35, 0, p);
        } else {
          // 🔒 CLOSING (0.5 → 1)
          const p = (progress - 0.5) * 2;

          topY = gsap.utils.interpolate(0, -35, p);
          bottomY = gsap.utils.interpolate(0, 35, p);
        }

        gsap.set(containerRef.current, { y: `${topY}%` });
        gsap.set(bottomRef.current, { y: `${bottomY}%` });

        // 🎯 3D sync (optional)
        modelBaseZ.current = gsap.utils.interpolate(-1, 0, progress);
        modelBaseRotationX.current = gsap.utils.interpolate(0.5, 0, progress);
      },
    });

    return () => {
      st.kill();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="contact min-h-screen px-5 md:px-10 py-10"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* 🧾 FORM */}
          <div className="border p-5 md:p-8 rounded-xl">
            <h1 className="font-light text-xl mb-5">
              Get in Contact with Our Team
            </h1>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Enter your name" />
              </div>

              <div>
                <Label htmlFor="functionType">Function Type</Label>
                <Input
                  type="text"
                  id="functionType"
                  placeholder="Birthday, Wedding..."
                />
              </div>

              <div>
                <Label htmlFor="decorationType">Decoration Type</Label>
                <Input
                  type="text"
                  id="decorationType"
                  placeholder="Theme / Style"
                />
              </div>

              <div>
                <Label htmlFor="dateOfFunction">Date of Function</Label>
                <Input type="date" id="dateOfFunction" />
              </div>

              <div>
                <Label htmlFor="phoneNo">Phone Number</Label>
                <Input type="tel" id="phoneNo" placeholder="+91 9876543210" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="w-full border rounded-md p-2 text-sm resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <div className="flex justify-center items-center">
                <Button className="bg-primary">Submit</Button>
              </div>
            </div>
          </div>

          {/* 📍 CONTACT + MAP */}
          <div className="border p-5 md:p-8 rounded-xl flex flex-col gap-6">
            <h1 className="text-xl">Let’s Talk</h1>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <IconPhoneCall />
                <p>+91 9876543210</p>
              </div>

              <div className="flex items-center gap-2">
                <IconMail />
                <p>subharambh@gmail.com</p>
              </div>
            </div>

            {/* Map Container */}
            <div className="w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Shubharambh%20Decoration%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubharambh Decoration Location"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={bottomRef}></div>
    </section>
  );
}
