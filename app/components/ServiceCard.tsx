"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    linkText?: string;
    linkUrl?: string;
    link?: string;
  };
  index: number;
}

export default function ServiceCard({ item, index }: ServiceCardProps) {
  const linkText = item.linkText || "Read More";
  const linkUrl = item.linkUrl || item.link || "#";

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-shadow duration-300 flex flex-col group"
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
          className="object-cover group-hover:scale-105 transition-transform duration-500"
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
        <Link
          href={linkUrl}
          className="text-[#7b2cbf] font-bold text-sm flex items-center gap-2 hover:text-[#1c3e98] transition-colors mt-auto w-max"
        >
          {linkText} <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
