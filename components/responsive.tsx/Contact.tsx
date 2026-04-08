"use client";

import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import { Button } from "../retroui/Button";

export default function MobileContactSection() {
  return (
    <section id="contact" className="contact min-h-screen px-5 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <div></div>
    </section>
  );
}
