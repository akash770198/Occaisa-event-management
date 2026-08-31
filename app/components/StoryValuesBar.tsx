"use client";

import data from "../../data/content.json";
import { motion } from "framer-motion";
import { Diamond, Leaf, Heart, Handshake, Users } from "lucide-react";

export default function StoryValuesBar() {
  const { values } = data.storyPage;

  const getIcon = (name: string) => {
    switch (name) {
      case "diamond": return <Diamond className="w-8 h-8" strokeWidth={1.5} />;
      case "leaf": return <Leaf className="w-8 h-8" strokeWidth={1.5} />;
      case "heart": return <Heart className="w-8 h-8" strokeWidth={1.5} />;
      case "handshake": return <Handshake className="w-8 h-8" strokeWidth={1.5} />;
      case "users": return <Users className="w-8 h-8" strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <section className="w-full py-8 lg:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        
        {/* Box Container */}
        <motion.div 
          className="border border-[#a45cf6]/20 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.06)] bg-gradient-to-br from-[#fcfaff] to-[#f4eeff] p-8 md:p-10 transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative items-center justify-items-center">
            {values.items.map((item: any, index: number) => (
              <div 
                key={index}
                className={`flex flex-col items-center text-center px-2 relative group w-full ${index !== values.items.length - 1 ? 'md:border-r md:border-[#a45cf6]/20' : ''}`}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full border border-white shadow-sm flex items-center justify-center bg-white text-[#a45cf6] mb-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  {getIcon(item.icon)}
                </div>
                
                {/* Title */}
                <h5 className="text-lg font-bold text-[#0b132b]">{item.label}</h5>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
