"use client";

import Image from "next/image";
import Link from "next/link";
import data from "../../data/content.json";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const { services } = data.servicesPage;

  return (
    <section className="w-full py-20 lg:py-24 bg-white flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#6C2BD9] opacity-50"></div>
            <span className="text-[#6C2BD9] text-sm">✦</span>
            <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider px-2">
              {services.badge}
            </span>
            <span className="text-[#6C2BD9] text-sm">✦</span>
            <div className="w-12 h-[2px] bg-[#6C2BD9] opacity-50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b132b] tracking-tight">
            {services.titleStart}
            <span className="text-[#6C2BD9]">
              {services.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {data.services.items.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
