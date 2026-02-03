"use client";

import { FiLogIn } from "react-icons/fi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdFlightTakeoff } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/30 backdrop-blur-xl shadow-lg px-4 sm:px-6 py-3">

        {/* Logo */}
        <span className="text-lg sm:text-xl font-extrabold tracking-wide text-gray-900">
          Wheyr
        </span>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-3 text-sm font-medium">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-gray-900 hover:bg-blue-200 transition">
            <MdFlightTakeoff className="text-base" />
            <a href="#">My Trip</a>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-gray-900 hover:bg-blue-200 transition">
            <FaHandshakeSimple className="text-base" />
            <a href="#">Become Partner</a>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-gray-900 font-medium shadow hover:shadow-md transition">
          <span className="hidden sm:block">Sign In / Sign Up</span>
          <FiLogIn className="text-base" />
        </button>

        </nav>
      </div>
    </header>
  );
}
