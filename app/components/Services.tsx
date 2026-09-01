"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

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
          {services.items.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
