"use client";

import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import data from "@/data/content.json";
import { motion } from "framer-motion";

export default function TestimonialClient() {
  const { testimonialPage } = data;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={testimonialPage.banner.title} 
        image={testimonialPage.banner.image} 
        breadcrumbs={testimonialPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-20 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
              {testimonialPage.header.badge}
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-4">
              {testimonialPage.header.titleStart}
              <span className="text-[#bd00ff]">{testimonialPage.header.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {testimonialPage.header.description}
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {testimonialPage.testimonials.map((t: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="relative bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 p-6 sm:p-5 gap-6 sm:gap-5 group"
              >
                {/* Purple Bracket Accent */}
                <div className="absolute top-[-1px] bottom-[-1px] left-[-1px] w-12 border-y-[3px] border-l-[3px] border-[#6C2BD9] rounded-l-2xl pointer-events-none transition-all duration-300 group-hover:w-16 z-10"></div>
                
                {/* Left Side: Image */}
                <div className="relative w-full sm:w-[260px] h-64 sm:h-[240px] shrink-0 rounded-xl overflow-hidden self-center">
                  <Image 
                    src={t.image} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    alt={t.name} 
                  />
                </div>
                
                {/* Right Side: Content */}
                <div className="flex flex-col flex-1 py-1 pr-2">
                  <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 shrink-0 border-2 border-[#6C2BD9] text-[#6C2BD9] rounded-full flex items-center justify-center font-serif text-3xl pt-2">
                      &ldquo;
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-[#0b132b] text-base">{t.name}</h4>
                      <p className="text-gray-500 text-xs whitespace-pre-line leading-snug font-medium mt-0.5">
                        {t.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-[13px] leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
