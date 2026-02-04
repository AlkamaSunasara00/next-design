"use client";

import { useRef } from "react";
import Image from "next/image";

export default function PopularDestinations() {
  const sliderRef = useRef(null);

  const destinations = [
    {
      name: "Manali",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    },
    {
      name: "Rishikesh",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    },
    {
      name: "Spiti",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?w=1200&q=80",
    },
    {
      name: "Meghalaya",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1200&q=80",
    },
    {
      name: "Ladakh",
      price: "₹10,258",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    },
  ];

  const scrollLeft = () => {
    const card = sliderRef.current.querySelector(".slide-card");
    if (!card) return;
    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 24),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const card = sliderRef.current.querySelector(".slide-card");
    if (!card) return;
    sliderRef.current.scrollBy({
      left: card.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto bg-white/80 rounded-3xl shadow-xl p-6 sm:p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Popular Adventure Destinations
          </h2>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-9 h-9 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
            >
              ‹
            </button>
            <button
              onClick={scrollRight}
              className="w-9 h-9 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {destinations.map((d, i) => (
            <div
              key={i}
              className="slide-card snap-start min-w-[240px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px]
                         relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <div className="relative w-full h-64">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 320px"
                  priority={i === 0}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg sm:text-xl font-bold">{d.name}</h3>
                <p className="text-sm opacity-90">
                  Starting from <span className="font-semibold">{d.price}</span>
                </p>

                <button className="mt-2 inline-flex items-center gap-2 bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-100 transition">
                  Explore Now →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
