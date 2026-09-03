"use client";

import Image from "next/image";
import Link from "next/link";
import data from "../../data/content.json";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const { hero } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (!hero.images || hero.images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hero.images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [hero.images]);

  const handleNext = () => {
    if (!hero.images) return;
    setCurrentIndex((prev) => (prev + 1) % hero.images.length);
  };

  const handlePrev = () => {
    if (!hero.images) return;
    setCurrentIndex((prev) => (prev - 1 + hero.images.length) % hero.images.length);
  };

  const currentImage = hero.images ? hero.images[currentIndex] : "/Banner/event_banner.svg";

  return (
    <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 -z-10 bg-[#05001a]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={currentImage}
            alt={`Hero Banner ${currentIndex + 1}`}
            fill
            className="object-cover object-center"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Constrained Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative h-full flex items-center">
        {/* Navigation Controls */}
        <motion.div
          onClick={handlePrev}
          className="absolute left-6 md:left-12 lg:left-18 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-20 max-md:hidden group transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-[#1c3e98] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute right-6 md:right-12 lg:right-18 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div 
            onClick={handleNext}
            className="bg-white/20 hover:bg-white backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-[#1c3e98] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          {/* Pagination Dots */}
          <div className="flex flex-col gap-3">
            {hero.images?.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === idx ? "bg-white scale-125 shadow-[0_0_10px_white]" : "bg-white/40 hover:bg-white/70"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div
          className="max-w-[750px] relative w-full flex flex-col justify-center ml-0 md:ml-12 lg:ml-16 z-10 max-md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <div className="flex items-center gap-4 text-white font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
            <div className="h-[2px] w-8 md:w-12 bg-white"></div>
            {hero.badge}
            <div className="h-[2px] w-8 md:w-12 bg-white"></div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight max-md:text-4xl">
            {hero.titleStart} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] bg-clip-text text-transparent font-serif italic font-normal">
              {hero.titleHighlight}
            </span>
            {hero.titleEnd}
          </h1>

          {/* Description */}
          <p className="text-gray-200 mb-10 text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-2xl max-md:mb-8">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] hover:opacity-90 text-white font-semibold py-4 px-8 rounded-sm transition-opacity duration-300 shadow-md max-sm:w-full inline-block text-center">
              {hero.button1Text}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
