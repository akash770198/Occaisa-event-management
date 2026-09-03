"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function AwardsIntro() {
  const { intro } = data.awardsPage;

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
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
              <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider">{intro.badge}</span>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-12 bg-gray-200"></div>
                <span className="text-[#6C2BD9] text-xl px-2 leading-none -mt-1">✦</span>
                <div className="h-[2px] w-12 bg-gray-200"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#0b132b] leading-[1.2] mb-8 tracking-tight whitespace-pre-line max-md:text-3xl max-w-[350px]">
              {intro.titleStart}
              <span className="text-[#6C2BD9]">{intro.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-lg">
              {intro.description}
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
            <div className="relative z-10 rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:h-[500px] w-full max-md:h-[300px]">
              <Image
                src={intro.image}
                alt="Occasia Award"
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
