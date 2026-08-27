"use client";

import Image from "next/image";
import data from "../data/content.json";
import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const { blog } = data;

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-[#7209b7] font-bold text-sm md:text-base uppercase tracking-widest mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#7209b7]"></div>
            <span>{blog.badge}</span>
            <div className="h-[1px] w-8 md:w-12 bg-[#7209b7]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0b132b] tracking-tight mb-4 leading-tight">
            {blog.titleStart}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7209b7] to-[#9d4edd]">
              {blog.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl text-sm md:text-base leading-relaxed">
            {blog.description}
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Featured Blog */}
          <motion.div 
            className="w-full lg:w-1/2 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Box */}
            <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
              <Image 
                src={blog.featured.image} 
                alt="Featured Blog" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Category Pill */}
              <div className="absolute bottom-4 left-4 bg-[#7209b7] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider shadow-md">
                {blog.featured.category}
              </div>
            </div>
            
            {/* Content Box */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-6 text-gray-500 text-sm font-semibold mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#7209b7]" />
                  {blog.featured.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#7209b7]" />
                  {blog.featured.readTime}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0b132b] mb-6 leading-snug group-hover:text-[#7209b7] transition-colors">
                {blog.featured.title}
              </h3>
              <Link href={blog.featured.link} className="inline-flex items-center gap-2 text-[#7209b7] font-bold text-lg group/link">
                Read More 
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Recent Blogs List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-center">
            {blog.recent.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-6 md:gap-8 group cursor-pointer pb-8 border-b border-gray-100 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Date Box */}
                <div className="shrink-0 w-24 h-28 md:w-28 md:h-32 rounded-2xl bg-gray-50 flex flex-col items-center justify-center border border-gray-100 group-hover:border-[#7209b7]/30 transition-colors shadow-sm">
                  <span className="text-4xl md:text-5xl font-bold text-[#7209b7] mb-2">{item.day}</span>
                  <span className="text-base md:text-lg font-semibold text-gray-600">{item.month}</span>
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <div className="text-[#7209b7] text-sm font-bold tracking-wider mb-2 lg:mb-3 uppercase">
                    {item.category}
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-[#0b132b] leading-snug group-hover:text-[#7209b7] transition-colors">
                    {item.title}
                  </h4>
                </div>
                
                {/* Arrow Button */}
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f8f5ff] flex items-center justify-center text-[#7209b7] group-hover:bg-[#7209b7] group-hover:text-white transition-colors">
                  <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* View All Button */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={blog.viewAllLink} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-[#7209b7] text-[#7209b7] font-semibold hover:bg-[#7209b7] hover:text-white transition-all group">
            {blog.viewAllText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
