"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function AwardsRecognitions() {
  const { recognitions } = data.awardsPage;

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider">{recognitions.badge}</span>
            <div className="flex items-center gap-0">
              <div className="h-[2px] w-12 bg-gray-200"></div>
              <span className="text-[#6C2BD9] text-xl px-2 leading-none -mt-1">✦</span>
              <div className="h-[2px] w-12 bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Recognitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recognitions.items.map((item, index) => (
            <motion.div
              key={index}
              className="group flex flex-col bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center flex flex-col items-center gap-4 flex-grow">
                <h3 className="text-[#6C2BD9] font-bold text-lg whitespace-pre-line leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium whitespace-pre-line text-sm mt-auto">
                  {item.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
