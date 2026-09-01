"use client";

import data from "../../data/content.json";
import { motion } from "framer-motion";
import { Trophy, Medal, Users, Calendar } from "lucide-react";

export default function AwardsAchievements() {
  const { achievements } = data.awardsPage;

  const iconMap: Record<string, React.ReactNode> = {
    trophy: <Trophy className="w-10 h-10 text-current" />,
    medal: <Medal className="w-10 h-10 text-current" />,
    users: <Users className="w-10 h-10 text-current" />,
    calendar: <Calendar className="w-10 h-10 text-current" />
  };

  return (
    <section className="w-full py-16 bg-purple-50 flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex flex-col gap-2 mb-4 items-center">
            <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider">{achievements.badge}</span>
            <div className="flex items-center gap-0">
              <div className="h-[2px] w-12 bg-gray-200"></div>
              <span className="text-[#6C2BD9] text-xl px-2 leading-none -mt-1">✦</span>
              <div className="h-[2px] w-12 bg-gray-200"></div>
            </div>
          </div>
          <p className="text-gray-600 font-medium">{achievements.description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center p-6 group ${
                index !== achievements.stats.length - 1 ? 'lg:border-r lg:border-purple-200' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 rounded-full bg-purple-100 text-[#6C2BD9] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#6C2BD9] group-hover:text-white transition-all duration-300 shadow-sm">
                {iconMap[stat.icon]}
              </div>
              <h3 className="text-3xl font-bold text-[#6C2BD9] mb-2">{stat.value}</h3>
              <p className="text-[#0b132b] font-semibold text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
