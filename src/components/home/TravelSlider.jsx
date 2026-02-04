"use client";

import { useState } from "react";

const agentsData = [
  {
    id: 1,
    name: "MakemyTrip",
    big: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201626.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400", title: "Mountain Retreat", desc: "2,800 Hotels • 25 Packages" },
      { img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400", title: "Beach Vibes", desc: "3,200 Hotels • 15 Packages" },
    ],
  },
  {
    id: 2,
    name: "holidaytribe",
    big: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400", title: "Mountain Retreat", desc: "2,800 Hotels • 25 Packages" },
    ],
  },
  {
    id: 3,
    name: "Expedia",
    big: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201626.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400", title: "Exotic Vacation", desc: "4,500 Hotels • 40 Packages" },
      { img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=400", title: "City Break", desc: "3,000 Hotels • 28 Packages" },
    ],
  },
  {
    id: 4,
    name: "thrillophilia",
    big: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000",
    logo: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
    slides: [
      { img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=400", title: "Winter Event", desc: "5,459 Hotels • 42 Packages" },
      { img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=400", title: "City Break", desc: "3,000 Hotels • 28 Packages" },
      { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400", title: "Exotic Vacation", desc: "4,500 Hotels • 40 Packages" },
    ],
  },
];

function Card({ data }) {
  const [miniIndex, setMiniIndex] = useState(0);

  const nextMini = (e) => {
    e.stopPropagation();
    setMiniIndex((prev) => (prev + 1) % data.slides.length);
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">

      {/* Top Section with Main Image – SAME AS YOUR PATH */}
      <div className="relative p-2.5 pb-0">
        <div className="relative rounded-[1.5rem] overflow-hidden">
          <img
            src={data.big}
            className="w-full h-[350px] object-cover"
            alt="main"
          />

          {/* MINI SLIDER DESIGN */}
          <div className="absolute bottom-3 right-5 w-[170px] bg-black rounded-[1.5rem] shadow-2xl p-1.5">

            <img
              src={data.slides[miniIndex].img}
              className="w-full h-[80px] object-cover rounded-[1.2rem]"
              alt="mini"
            />

            <div className="relative flex flex-col px-2 py-2 text-white">
              <p className="text-[11px] font-bold leading-tight truncate pr-6">
                {data.slides[miniIndex].title}
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5">
                {data.slides[miniIndex].desc}
              </p>

              <div className="absolute -right-1 -bottom-1 rounded-tl-[2rem] p-1">
                <button
                  onClick={nextMini}
                  className="w-8 h-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
                >
                  <span className="text-xl font-light mb-0.5">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXACT COMPACT WHITE SECTION */}
      <div className="px-4 pt-6 pb-3 flex-grow relative">

        {/* Logo + Name Section */}
        <div className="absolute -top-6 left-4 flex items-center gap-2">
          <div className="bg-white p-1 rounded-full shadow-md">
            <img
              src={data.logo}
              className="w-12 h-12 rounded-full object-cover border border-white"
              alt="logo"
            />
          </div>

          <h3 className="text-[15px] font-bold text-gray-900 mt-3">
            {data.name}
          </h3>
        </div>

        {/* Content */}
        <div className="mt-6">

          <p className="text-[13px] font-semibold text-gray-800">
            180+ Trips Completed
          </p>

          <div className="flex items-center gap-1 mt-0.5">
            <div className="text-orange-400 text-[12px] tracking-tighter">
              ★★★★★
            </div>

            <p className="text-[12px] font-semibold text-gray-900">
              4.5
              <span className="text-gray-400 font-normal ml-1">
                (205 Review)
              </span>
            </p>
          </div>

          <div className="flex justify-end mt-2">
            <button className="bg-[#00a2ff] hover:bg-[#0086d4] text-white text-[12px] font-semibold px-5 py-2 rounded-full transition-all">
              View more
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}


export default function TravelSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => setStartIndex((p) => (p + 1) % agentsData.length);
  const prev = () => setStartIndex((p) => (p - 1 + agentsData.length) % agentsData.length);

  const currentItems = [...agentsData, ...agentsData].slice(startIndex, startIndex + 4);

  return (
    <div className="w-full bg-[#f4faff] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Top Travel Agents on TravelX
          </h2>

          <div className="flex gap-3">
            <button onClick={prev} className="w-10 h-10 bg-[#40bef9] hover:bg-[#2da9e5] text-white rounded-full flex items-center justify-center text-2xl shadow-sm transition-all">‹</button>
            <button onClick={next} className="w-10 h-10 bg-[#40bef9] hover:bg-[#2da9e5] text-white rounded-full flex items-center justify-center text-2xl shadow-sm transition-all">›</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentItems.map((agent, i) => (
            <Card key={`${agent.id}-${i}`} data={agent} />
          ))}
        </div>
      </div>
    </div>
  );
} 