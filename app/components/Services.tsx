"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function Services() {
  const { services } = data;

  return (
    <section className="relative w-full bg-white pb-24">
      {/* Dark background top half */}
      <div className="absolute top-0 left-0 right-0 h-[450px] z-0">
        <Image
          src="/Services/main_event_banner.svg"
          alt="Services Background"
          fill
          className="object-cover"
        />
        {/* Overlays for the dark effect */}
        <div className="absolute inset-0 bg-[#0b132b] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-18 pt-24">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 text-[#9d4edd] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
            <span>✦ {services.badge} ✦</span>
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {services.title}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative h-56 sm:h-64 w-full border-2 border-white bg-white rounded-t-xl overflow-hidden max-md:h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="relative mb-3 flex items-start">
                  {/* Purple L-bracket */}
                  <div className="absolute -left-1 top-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#7b2cbf] mt-2"></div>
                  <h3 className="text-xl font-bold text-[#1c3e98] pl-3.5 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed mb-6 flex-1 whitespace-pre-line">
                  {item.description}
                </p>
                <a
                  href={item.linkUrl}
                  className="text-[#7b2cbf] font-bold text-sm flex items-center gap-2 hover:text-[#1c3e98] transition-colors mt-auto w-max"
                >
                  {item.linkText} <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
