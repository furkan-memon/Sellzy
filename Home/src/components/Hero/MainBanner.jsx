import React from 'react'
import {ActionButton} from './ActionButton';
const MainBanner = () => {
  return (
    <div className="md:col-span-2 relative bg-[#FCE4EC] rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-center min-h-[400px] overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#B2FF59] text-[11px] font-black px-2 py-0.5 rounded italic">25% OFF</span>
        <span className="text-sm font-semibold text-gray-700 underline underline-offset-4 decoration-1">
          Exclusive offer
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] max-w-md mb-6 text-[#1A1A1A]">
        Beauty That Elevates Your Everyday
      </h1>
      
      <p className="text-gray-600 max-w-sm mb-10 leading-relaxed text-lg">
        Simplify your beauty routine with our handpicked essentials.
      </p>

      <ActionButton text="Shop Now" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-10 py-4 rounded-t-[3rem] flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-10 h-2 rounded-full bg-[#00796B]"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </div>
  );
};

export default MainBanner