"use client";

import Image from "next/image";
import { Button } from "../retroui/Button";

type AboutProps = {
  images: string[];
};

export default function About({ images }: AboutProps) {
  // split images into 4 columns
  const chunkSize = Math.ceil(images.length / 4);

  const cols = [
    {
      id: "about-imgs-col-1",
      extra: "translate-y-[1000px]",
      images: images.slice(0, chunkSize),
    },
    {
      id: "about-imgs-col-2",
      extra:
        "-translate-x-[225px] translate-y-[500px] max-[1000px]:translate-x-0",
      images: images.slice(chunkSize, chunkSize * 2),
    },
    {
      id: "about-imgs-col-3",
      extra:
        "translate-x-[225px] translate-y-[500px] max-[1000px]:translate-x-0",
      images: images.slice(chunkSize * 2, chunkSize * 3),
    },
    {
      id: "about-imgs-col-4",
      extra: "translate-y-[1000px]",
      images: images.slice(chunkSize * 3),
    },
  ];

  return (
    <section className="about relative h-[100svh] w-full flex justify-center items-center text-center mt-[110svh]">
      <div className="about-images w-full h-full flex justify-between items-center p-16">
        {cols.map((col, idx) => (
          <div
            key={idx}
            id={col.id}
            className={`about-imgs-col relative h-[125%] flex flex-col justify-around ${col.extra}`}
          >
            {col.images.map((src, i) => (
              <div
                key={i}
                className="img w-[125px] h-[125px] rounded-[10px] overflow-hidden"
              >
                <Image
                  src={src}
                  className="w-full h-full object-cover"
                  alt=""
                  width={125}
                  height={125}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="about-header absolute top-100 left-2/3 -translate-x-1/2 -translate-y-3/4 w-[40%]">
        <Button>View More</Button>
      </div>
    </section>
  );
}
