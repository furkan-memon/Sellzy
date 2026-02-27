import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActionButton } from "./ActionButton";

import hero3 from "../../assets/images/hero-3.png";
import hero2 from "../../assets/images/hero-2.png";
import hero4 from "../../assets/images/hero-4.png";
import hero1 from "../../assets/images/hero-1.png";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Beauty That Elevates Your Everyday",
      desc: "Simplify your beauty routine with our handpicked essentials.",
      img: hero3,
    },
    {
      title: "Shop Smarter, glow better, live Beautifully",
      desc: "The joy of effortless beauty starts with our curated collection.",
      img: hero2,
    },
    {
      title: "Discover Your Ultimate Beauty Destination",
      desc: "The joy of effortless beauty starts with our curated collection.",
      img: hero4,
    },
    {
      title: "Your Daily beauty essentials, simplified.",
      desc: "Everything you need to look and feel your best every single day.",
      img: hero1,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <div className="lg:col-span-2 relative group overflow-hidden rounded-[3rem]">

      <div
        className="flex transition-transform duration-700  ease-in-out h-[500px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative flex items-center bg-[#ffd6ef] md:bg-white px-10 md:px-16"
          >
            <div className="z-10 relative max-w-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#B2FF59] text-[10px] font-black px-2 py-0.5 rounded italic uppercase">
                  25% OFF
                </span>
                <span className="text-sm font-semibold text-gray-700 underline underline-offset-4 cursor-pointer">
                  Exclusive offer
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-gray-900 mb-6">
                {slide.title}
              </h1>

              <p className="text-gray-600 text-lg mb-8 max-w-sm">
                {slide.desc}
              </p>

              <ActionButton text="Shop Now" />
            </div>

            <img
              src={slide.img}
              alt="Hero"
              className="absolute md:block hidden right-0 bottom-0 h-full max-w-none object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/40 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md text-gray-800"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/40 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md text-gray-800"
      >
        <ChevronRight size={24} />
      </button>

      <ul className="absolute bottom-4 md:bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <li key={index}>
            <button
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-3 bg-[#00796B]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          </li>
        ))}
      </ul>

    </div>
  );
};

export default MainSlider;