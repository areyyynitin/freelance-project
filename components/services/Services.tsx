"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const decorItems = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  name: `Decor Theme ${i + 1}`,
  price: Math.floor(Math.random() * 5000) + 999,
  rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
  reviews: Math.floor(Math.random() * 50) + 10,
  image: `https://picsum.photos/600/400?random=${i}`,
}));

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 w-full">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Decor Themes</h1>
        <p className="text-muted-foreground">
          Explore decoration ideas for every occasion
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {decorItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

              {/* Name */}
              <h2 className="font-semibold text-base">
                {item.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="size-4 fill-black" />
                  <span>{item.rating}</span>
                </div>
                <span>({item.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="font-bold text-lg">
                ₹ {item.price}
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}