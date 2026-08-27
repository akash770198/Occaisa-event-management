"use client";

import Image from "next/image";
import data from "../data/content.json";
import { motion } from "framer-motion";

export default function Hero() {
  const { hero } = data;

  return (
    <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/Banner/event_banner.svg"
          alt="Event Banner"
          fill
          className="object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* Constrained Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative h-full flex items-center">
        {/* Navigation Controls */}
        <motion.div 
          className="absolute left-6 md:left-12 lg:left-18 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c3e98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute right-6 md:right-12 lg:right-18 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c3e98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          {/* Pagination Dots */}
          <div className="flex flex-col gap-3">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div 
          className="bg-white p-10 md:p-14 lg:p-16 max-w-[650px] shadow-2xl relative w-full flex flex-col justify-center min-h-[500px] -mt-2 md:-mt-6 lg:-mt-8 ml-10 md:ml-16 lg:ml-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Gradient Border */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#00d0e6] to-[#7b2cbf]"></div>

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 7 1 L 1 1 L 1 13 L 13 13 L 13 7" stroke="#00d0e6" strokeWidth="2" strokeLinecap="square" />
            </svg>
            <span className="text-[#9d4edd] font-semibold tracking-wider text-sm uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-semibold text-[#1c3e98] leading-[1.2] mb-3 tracking-tight">
            {hero.titleStart} <br />
            <span className="bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
            {hero.titleEnd}
          </h1>

          {/* Gradient Underline below Title */}
          <div className="h-1 w-24 bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] rounded-full mb-8"></div>

          {/* Description */}
          <p className="text-gray-500 mb-10 text-base md:text-lg leading-relaxed font-medium">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] hover:opacity-90 text-white font-semibold py-4 px-8 rounded-sm transition-opacity duration-300 shadow-md">
              {hero.button1Text}
            </button>
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-[#00d0e6] flex items-center justify-center transition-transform group-hover:scale-105">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7b2cbf] ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#1c3e98] font-bold">{hero.button2Text}</span>
                <div className="h-0.5 w-full bg-[#00d0e6] mt-0.5 group-hover:w-full transition-all"></div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
