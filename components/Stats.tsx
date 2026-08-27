"use client";

import Image from "next/image";
import data from "../data/content.json";
import { motion } from "framer-motion";
import { Mountain, UserCheck, FileCheck, Trophy } from "lucide-react";

export default function Stats() {
  const { stats } = data;

  const getIcon = (name: string) => {
    switch (name) {
      case "mountain":
        return <Mountain className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />;
      case "users":
        return <UserCheck className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />;
      case "file-check":
        return <FileCheck className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />;
      case "trophy":
        return <Trophy className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Banner/event_banner.svg" 
          alt="Stats Background" 
          fill 
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#05001a]/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-0">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`flex items-center gap-4 md:gap-5 px-4 md:px-6 lg:px-8 justify-center sm:justify-start lg:justify-center py-2 ${
                index !== stats.length - 1 ? 'lg:border-r lg:border-white/30' : ''
              } ${
                index % 2 === 0 ? 'sm:border-r sm:border-white/30' : 'sm:border-none'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                {getIcon(stat.icon)}
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-[2.75rem] leading-none font-bold text-white tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-gray-200 font-medium text-sm md:text-base">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
