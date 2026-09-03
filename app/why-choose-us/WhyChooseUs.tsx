"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { whyChooseUs } = data.aboutPage;

  return (
    <section
      id="why-choose-us"
      className="w-full py-20 lg:py-24 bg-white overflow-hidden scroll-mt-28"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div
            className="w-full lg:flex-1 flex flex-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge & Separator */}
            <div className="mb-6">
              <div className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider mb-3">
                {whyChooseUs.badge}
              </div>
              <div className="flex items-center">
                <div className="h-[2px] w-12 bg-[#6C2BD9]"></div>
                <div className="mx-2 text-[#6C2BD9] text-sm">✦</div>
                <div className="h-[2px] w-12 bg-[#6C2BD9]"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0b132b] leading-[1.2] mb-6 tracking-tight">
              {whyChooseUs.titleStart}
              <br className="hidden md:block" />
              <span className="text-[#00a8e8]">
                {whyChooseUs.titleHighlight}
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 font-medium mb-12 leading-relaxed text-base">
              {whyChooseUs.description}
            </p>

            {/* Grid with Cross Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {whyChooseUs.features.map((feature: any, idx: number) => (
                <div 
                  key={feature.title} 
                  className={`p-6 sm:p-8 ${
                    idx === 0 ? "border-b border-gray-100 sm:border-r" :
                    idx === 1 ? "border-b border-gray-100" :
                    idx === 2 ? "border-b sm:border-b-0 border-gray-100 sm:border-r" : ""
                  }`}
                >
                  <h3 className="text-[#6C2BD9] font-bold text-base md:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-[45%] xl:w-[48%] relative max-w-[560px] mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[480px] md:h-[600px] lg:h-[700px] w-full">
                <Image
                  src={whyChooseUs.image}
                  alt="Luxury event space"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
