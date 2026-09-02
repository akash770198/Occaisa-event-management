"use client";

import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import data from "@/data/content.json";
import { motion } from "framer-motion";

export default function PartnersClient() {
  const { partnersPage } = data;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={partnersPage.banner.title} 
        image={partnersPage.banner.image} 
        breadcrumbs={partnersPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-20 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
              {partnersPage.header.badge}
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-4">
              {partnersPage.header.titleStart} <br className="hidden md:block" />
              <span className="text-[#bd00ff]">{partnersPage.header.titleHighlight}</span>
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {partnersPage.partners.map((partner: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 5) * 0.1, ease: "easeOut" }}
                className="bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-center aspect-[4/3] md:aspect-square shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center p-0 scale-[1.15]">
                  <Image 
                    src={partner.image} 
                    alt={partner.name}
                    width={200}
                    height={200}
                    className="object-contain max-h-full max-w-full group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
