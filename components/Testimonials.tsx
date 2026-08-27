"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data/content.json";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function Testimonials() {
  const { testimonials } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length);
  };

  const currentItem = testimonials.items[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, testimonials.items.length]);

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">

        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-[#9d4edd] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
            <span>✦ {testimonials.badge} ✦</span>
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0b132b] tracking-tight mb-4 leading-tight">
            {testimonials.titleStart}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#7b2cbf]">
              {testimonials.titleHighlight}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#0077b6] to-[#7209b7]"></div>
            <Sparkles className="w-5 h-5 text-[#7209b7]" />
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#7209b7] to-[#0077b6]"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          {/* Left Image Area */}
          <div className="w-full lg:w-1/2 relative flex justify-end pb-8 lg:pb-0">
            {/* Purple Background Panel */}
            <div className="absolute top-0 bottom-0 left-0 w-[70%] bg-[#4c0d8f] overflow-hidden">
              <Image
                src="/Banner/event_banner.svg"
                alt="Banquet"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#05001a]/70"></div>
              {/* Rotated Text */}
              <div className="absolute inset-y-0 left-0 md:left-2 flex items-center justify-center overflow-hidden">
                <span className="text-white/20 font-black text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  TESTIMONIALS
                </span>
              </div>
            </div>

            {/* Foreground Portrait Image */}
            <div className="relative z-10 w-[70%] lg:w-[65%] aspect-[3/4] mr-4 lg:-mr-8 mt-12 lg:mt-16 bg-white overflow-hidden p-3 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <AnimatePresence>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentItem.image}
                      alt={currentItem.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Text Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Wrapper with min-height to prevent buttons from jumping */}
            <div className="min-h-[400px] md:min-h-[320px] relative w-full flex flex-col justify-start">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8 absolute top-8 left-0 right-0"
                >
                  {/* Author Info */}
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border-2 border-[#7209b7] flex items-center justify-center text-[#7209b7]">
                      <Quote className="w-8 h-8 fill-current" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#1c3e98] leading-tight mb-1">
                        {currentItem.name}
                      </h3>
                      <p className="text-gray-500 font-medium text-sm md:text-base whitespace-pre-line">
                        {currentItem.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                    {currentItem.text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-0 mt-8 lg:justify-start justify-center">
              <button
                onClick={handlePrev}
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-[#7209b7] text-[#7209b7] hover:bg-[#7209b7] hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-l-0 border-[#7209b7] text-[#7209b7] hover:bg-[#7209b7] hover:text-white transition-colors duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
