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

  const getDelay = (index: number) => {
    if (index === 0) return 0;
    if (index === 1) return 0.4;
    if (index === 2) return 1.0;
    if (index === 3) return 1.6;
    return 0;
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
            whileInView={{ scaleX: [0, 0.333, 0.333, 0.666, 0.666, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.6, ease: "linear", times: [0, 0.25, 0.375, 0.625, 0.75, 1] }}
          ></motion.div>
          
          {/* Vertical Line for Mobile */}
          <motion.div 
            className="block sm:hidden absolute left-[50%] top-[32px] bottom-[32px] w-[2px] -ml-[1px] bg-gradient-to-b from-[#a45cf6]/20 via-[#a45cf6] to-[#a45cf6]/20 z-0 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: [0, 0.333, 0.333, 0.666, 0.666, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.6, ease: "linear", times: [0, 0.25, 0.375, 0.625, 0.75, 1] }}
          ></motion.div>

          <div className="flex flex-col sm:flex-row relative z-10">
            {journey.milestones.map((milestone: any, index: number) => (
              <motion.div 
                key={index}
                className="w-full sm:w-1/4 grid max-sm:grid-cols-[1fr_auto_1fr] max-sm:gap-2 max-sm:items-center sm:flex sm:flex-col sm:items-center sm:text-center mb-12 last:mb-0 sm:mb-0 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: getDelay(index) }}
              >
                {/* Mobile Text (Left) */}
                <div className={`sm:hidden flex flex-col text-right pr-2 ${index % 2 === 0 ? "col-start-1" : "invisible"}`}>
                  {index % 2 === 0 && (
                    <>
                      <h4 className="text-[#a45cf6] font-extrabold text-base md:text-lg mb-1">{milestone.year}</h4>
                      <h5 className="text-[#0b132b] font-bold text-sm md:text-base mb-1">{milestone.title}</h5>
                      <p className="text-gray-500 font-medium text-xs leading-tight">{milestone.description}</p>
                    </>
                  )}
                </div>

                {/* Icon Circle (Center on Mobile, Top on Desktop) */}
                <div className="col-start-2 sm:col-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center bg-white text-[#a45cf6] sm:mb-6 relative group transition-transform hover:-translate-y-1 z-10">
                  {getIcon(milestone.icon)}
                  {/* Purple glow ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#a45cf6] scale-[1.1] opacity-0 group-hover:opacity-100 group-hover:scale-[1.15] transition-all duration-300"></div>
                </div>

                {/* Mobile Text (Right) */}
                <div className={`sm:hidden flex flex-col text-left pl-2 ${index % 2 !== 0 ? "col-start-3" : "invisible"}`}>
                  {index % 2 !== 0 && (
                    <>
                      <h4 className="text-[#a45cf6] font-extrabold text-base md:text-lg mb-1">{milestone.year}</h4>
                      <h5 className="text-[#0b132b] font-bold text-sm md:text-base mb-1">{milestone.title}</h5>
                      <p className="text-gray-500 font-medium text-xs leading-tight">{milestone.description}</p>
                    </>
                  )}
                </div>

                {/* Desktop Text */}
                <div className="hidden sm:flex flex-col px-4">
                  <h4 className="text-[#a45cf6] font-extrabold text-xl mb-1">{milestone.year}</h4>
                  <h5 className="text-[#0b132b] font-bold text-lg mb-2">{milestone.title}</h5>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
