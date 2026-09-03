"use client";

import data from "../../data/content.json";
import { motion } from "framer-motion";
import { Lightbulb, Target, Handshake, Heart } from "lucide-react";

export default function MissionValues() {
  const { values } = data.missionPage;

  const getIcon = (name: string) => {
    switch (name) {
      case "create": return <Lightbulb className="w-10 h-10" strokeWidth={1.5} />;
      case "plan": return <Target className="w-10 h-10" strokeWidth={1.5} />;
      case "execute": return <Handshake className="w-10 h-10" strokeWidth={1.5} />;
      case "delight": return <Heart className="w-10 h-10" strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <section className="w-full py-8 lg:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">

        {/* Box Container */}
        <div className="border border-cyan-50/80 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.06)] bg-gradient-to-br from-[#f2fbfc] to-white p-8 md:p-10 lg:p-12 transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]">

          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#5a42f5] font-semibold text-sm md:text-base tracking-wider uppercase mb-3">
              {values.badge}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-0 mb-6">
              <div className="h-[2px] w-12 bg-gray-200"></div>
              <span className="text-[#5a42f5] text-xl px-2 leading-none -mt-1">✦</span>
              <div className="h-[2px] w-12 bg-gray-200"></div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#0b132b] max-w-3xl leading-snug">
              {values.title}
            </h3>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {values.items.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center text-center px-4 relative group cursor-pointer ${index !== values.items.length - 1 ? 'lg:border-r lg:border-gray-200/60' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full border border-gray-100 shadow-sm bg-[#fbf9ff] flex items-center justify-center mb-6 text-[#5a42f5] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00d0e6] group-hover:to-[#7b2cbf] group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-transparent">
                  {getIcon(item.icon)}
                </div>

                {/* Title & Desc */}
                <h4 className="text-2xl font-semibold text-[#0b132b] mb-4">{item.title}</h4>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
