"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function StoryPurpose() {
  const { purpose } = data.storyPage;

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden" id="story-purpose">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="w-full lg:w-[40%] flex flex-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-[#a45cf6] font-semibold text-sm md:text-base uppercase tracking-wider">{purpose.badge}</span>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-12 bg-gray-200"></div>
                <span className="text-[#a45cf6] text-xl px-2 leading-none -mt-1">✦</span>
                <div className="h-[2px] w-12 bg-gray-200"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#0b132b] leading-[1.2] mb-8 tracking-tight whitespace-pre-line max-md:text-3xl max-w-[350px]">
              {purpose.titleStart}
              <span className="text-[#a45cf6]">{purpose.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-lg">
              {purpose.description}
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="w-full lg:w-[60%] relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Dotted pattern bottom right */}
            <div className="absolute -bottom-8 -right-4 w-40 flex flex-wrap gap-3 opacity-30 z-0">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#a45cf6] rounded-full"></div>
              ))}
            </div>

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[550px] w-full max-md:h-[300px]">
              <Image
                src={purpose.image}
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
