"use client";

import Image from "next/image";
import Link from "next/link";
import { site, SectionProps, EventsServicesPageData } from "@/data";
import { motion } from "framer-motion";
import ServiceCard from "@/app/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid({ data, className }: SectionProps<EventsServicesPageData> = {}) {
  const { services } = (data || site.servicesPage);

  return (
    <section className="w-full py-20 lg:py-24 bg-white flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            {services.badge}
          </span>
          <div className="flex items-center justify-center gap-0 w-48 mb-6">
            <div className="h-[2px] flex-1 bg-[#6C2BD9]/30"></div>
            <div className="w-2.5 h-2.5 bg-[#6C2BD9] rotate-45 mx-3"></div>
            <div className="h-[2px] flex-1 bg-[#6C2BD9]/30"></div>
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
          {(data || site).services.items.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
