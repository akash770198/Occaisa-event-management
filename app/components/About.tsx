"use client";

import Image from "next/image";
import Link from "next/link";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function About() {
  const { about } = data;

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column - Image with Overlays */}
          <motion.div
            className="w-full lg:w-[50%] xl:w-[55%] relative max-w-[600px] mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >

            {/* Gradient Bracket SVG - Starts exactly at the container's left padding edge */}
            <svg className="absolute left-0 top-12 bottom-12 w-10 md:w-12 h-[calc(100%-96px)] z-0" preserveAspectRatio="none" viewBox="0 0 48 100">
              <defs>
                <linearGradient id="bracketGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d0e6" />
                  <stop offset="100%" stopColor="#7b2cbf" />
                </linearGradient>
              </defs>
              <path d="M48 2 Q2 2 2 12 L2 88 Q2 98 48 98" fill="none" stroke="url(#bracketGrad)" strokeWidth="4" />
            </svg>

            {/* Dotted pattern bottom right */}
            <div className="absolute -bottom-10 -right-4 w-40 flex flex-wrap gap-3 opacity-40 z-0">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#7b2cbf] rounded-full"></div>
              ))}
            </div>

            {/* Main Image - Offset to the right to leave space for the bracket */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl ml-6 md:ml-10 max-md:ml-4">
              <div className="relative h-[550px] lg:h-[600px] w-full max-md:h-[300px]">
                <Image
                  src="/AboutUs/banquet_hall.svg"
                  alt="Banquet Hall"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Experience Card Overlay - Starts inside the container bounds */}
            <div className="absolute left-2 md:left-4 -bottom-6 z-20 bg-gradient-to-br from-[#00d0e6] to-[#7b2cbf] text-white p-6 md:p-8 rounded-2xl shadow-xl w-48 md:w-56 flex flex-col justify-center max-md:w-36 max-md:p-4 max-md:-bottom-4">
              <span className="text-4xl md:text-5xl font-bold mb-2 max-md:text-2xl">{about.yearsExperience}</span>
              <span className="text-base md:text-lg font-semibold leading-tight whitespace-pre-line max-md:text-sm">
                {about.experienceText}
              </span>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="w-full lg:flex-1 flex flex-col pt-16 lg:pt-0 max-lg:pt-16 max-md:pt-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4 text-[#7b2cbf] font-semibold text-sm md:text-base uppercase tracking-wider">
              <span className="text-2xl font-light leading-none -mt-1">[</span>
              {about.badge}
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1c3e98] leading-[1.2] mb-6 tracking-tight max-md:text-3xl">
              {about.titleStart}
              <span className="bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] bg-clip-text text-transparent">
                {about.titleHighlight}
              </span>
            </h2>

            {/* Divider */}
            <div className="flex items-center mb-8">
              <div className="h-[2px] w-12 bg-[#00d0e6]"></div>
              <div className="mx-3 text-[#1c3e98] text-lg">✦</div>
              <div className="h-[2px] w-12 bg-[#7b2cbf]"></div>
            </div>

            {/* Paragraph 1 */}
            <div className="relative pl-6 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d0e6] to-[#7b2cbf]"></div>
              <p className="text-[#1c3e98] font-semibold text-base md:text-lg leading-relaxed">
                {about.paragraph1}
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="text-gray-500 font-medium mb-10 leading-relaxed text-base md:text-lg">
              {about.paragraph2}
            </p>

            {/* Button */}
            <div>
              <Link href="/about#mission-vision" className="bg-[#0b132b] hover:bg-[#1c3e98] text-white font-semibold py-3 md:py-4 px-8 md:px-10 rounded-sm flex items-center gap-3 transition-colors duration-300 shadow-lg w-max">
                Discover More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

