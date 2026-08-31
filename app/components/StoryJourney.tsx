"use client";

import data from "../../data/content.json";
import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy, Heart } from "lucide-react";

export default function StoryJourney() {
  const { journey } = data.storyPage;

  const getIcon = (name: string) => {
    switch (name) {
      case "lightbulb": return <Lightbulb className="w-8 h-8" strokeWidth={1.5} />;
      case "users": return <Users className="w-8 h-8" strokeWidth={1.5} />;
      case "trophy": return <Trophy className="w-8 h-8" strokeWidth={1.5} />;
      case "heart": return <Heart className="w-8 h-8" strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-br from-[#f8f5ff] to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[#a45cf6] font-semibold text-sm md:text-base tracking-wider uppercase mb-3">
            {journey.badge}
          </div>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-0 mb-6">
            <div className="h-[2px] w-12 bg-gray-200"></div>
            <span className="text-[#a45cf6] text-xl px-2 leading-none -mt-1">✦</span>
            <div className="h-[2px] w-12 bg-gray-200"></div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-[#0b132b] mb-4">
            {journey.title}
          </h3>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            {journey.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Horizontal Line for Desktop */}
          <motion.div 
            className="hidden sm:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#a45cf6]/20 via-[#a45cf6] to-[#a45cf6]/20 z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: [0, 0.3333, 0.3333, 0.6666, 0.6666, 1, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2.4, times: [0, 0.208, 0.333, 0.541, 0.666, 0.875, 1], ease: "linear" }}
          ></motion.div>
          
          {/* Vertical Line for Mobile */}
          <motion.div 
            className="block sm:hidden absolute left-[50%] top-0 bottom-0 w-[2px] -ml-[1px] bg-gradient-to-b from-[#a45cf6]/20 via-[#a45cf6] to-[#a45cf6]/20 z-0 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: [0, 0.3333, 0.3333, 0.6666, 0.6666, 1, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2.4, times: [0, 0.208, 0.333, 0.541, 0.666, 0.875, 1], ease: "linear" }}
          ></motion.div>

          <div className="flex flex-col sm:flex-row relative z-10">
            {journey.milestones.map((milestone: any, index: number) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center w-full sm:w-1/4 px-4 mb-12 sm:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index === 0 ? 0 : 0.8 * index - 0.3 }}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center bg-white text-[#a45cf6] mb-6 relative group transition-transform hover:-translate-y-1">
                  {getIcon(milestone.icon)}
                  {/* Purple glow ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#a45cf6] scale-[1.1] opacity-0 group-hover:opacity-100 group-hover:scale-[1.15] transition-all duration-300"></div>
                </div>
                
                {/* Text */}
                <h4 className="text-[#a45cf6] font-extrabold text-xl mb-1">{milestone.year}</h4>
                <h5 className="text-[#0b132b] font-bold text-lg mb-2">{milestone.title}</h5>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
