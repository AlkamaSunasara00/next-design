"use client";

import { useState } from "react";

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    destination: "",
    packageType: "",
    days: "",
    filters: "",
  });

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative z-20 w-full h-[45vh] min-h-[400px] flex items-center justify-center overflow-visible">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4">
          <h1 className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 drop-shadow-xl">
            ADVENTURE TRIPS IN INDIA
          </h1>

          <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium tracking-wider mb-10">
            Fixed itineraries • Optional add-ons • Instant confirmation • Verified partners
          </p>
        </div>

        {/* Floating Desktop Search */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full px-4 z-50 hidden md:flex justify-center">
          <div className="mx-auto max-w-5xl bg-white rounded-full shadow-2xl py-2 px-3 flex items-center">

            {/* Where */}
            <div className="flex-1 flex flex-col text-left px-5 border-r border-gray-200">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full text-sm text-gray-700 outline-none bg-transparent"
                value={searchData.destination}
                onChange={(e) =>
                  setSearchData({ ...searchData, destination: e.target.value })
                }
              />
            </div>

            {/* Type */}
            <div className="flex-1 flex flex-col text-left px-5 border-r border-gray-200">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Type of packages
              </label>
              <select
                className="w-full text-sm text-gray-700 outline-none bg-transparent appearance-none cursor-pointer"
                value={searchData.packageType}
                onChange={(e) =>
                  setSearchData({ ...searchData, packageType: e.target.value })
                }
              >
                <option value="">Select packages</option>
                <option value="trekking">Trekking</option>
                <option value="camping">Camping</option>
              </select>
            </div>

            {/* Days */}
            <div className="w-40 flex flex-col text-left px-5 border-r border-gray-200">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                Days
              </label>
              <select
                className="w-full text-sm text-gray-700 outline-none bg-transparent appearance-none cursor-pointer"
                value={searchData.days}
                onChange={(e) =>
                  setSearchData({ ...searchData, days: e.target.value })
                }
              >
                <option value="">Select Days</option>
                <option value="1-3">1-3 Days</option>
                <option value="4-7">4-7 Days</option>
              </select>
            </div>

            {/* Filters */}
            <div className="w-40 flex flex-col text-left px-5">
              <label className="text-[10px] font-bold text-gray-900 uppercase mb-0.5">
                More Filters
              </label>
              <select
                className="w-full text-sm text-gray-700 outline-none bg-transparent appearance-none cursor-pointer"
                value={searchData.filters}
                onChange={(e) =>
                  setSearchData({ ...searchData, filters: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="budget">Budget</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            {/* Button */}
            <button
              onClick={handleSearch}
              className="ml-2 bg-[#00AEEF] hover:bg-[#009bd6] text-white font-bold text-sm px-8 py-3.5 rounded-full transition shadow-md"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Search Card */}
      <div className="md:hidden -mt-4 px-4">
        <div className="mx-auto max-w-sm bg-white rounded-xl p-4 shadow-xl space-y-3">
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full border rounded px-3 py-2"
          />
          <select className="w-full border rounded px-3 py-2">
            <option>Select package</option>
          </select>
          <select className="w-full border rounded px-3 py-2">
            <option>Select days</option>
          </select>
          <button className="w-full bg-[#00AEEF] text-white py-3 rounded-xl font-bold">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
