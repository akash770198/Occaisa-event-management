"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const { missionVision } = data.aboutPage;

  return (
    <section
      id="mission-vision"
      className="py-20 lg:py-24 bg-[#0b041a] relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-72 h-72 rounded-full bg-[#7b2cbf]/10 blur-3xl"></div>
        <div className="absolute -right-24 bottom-1/4 w-72 h-72 rounded-full bg-[#00d0e6]/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-18">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-[#9d4edd] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
            <span>✦ {missionVision.badge} ✦</span>
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            {missionVision.titleStart}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0e6] to-[#9d4edd]">
              {missionVision.titleHighlight}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf]"></div>
            <span className="text-[#9d4edd] text-lg">✦</span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#7b2cbf] to-[#00d0e6]"></div>
          </div>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
            {missionVision.description}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 xl:gap-12">
          <motion.div
            className="w-full lg:flex-1 rounded-2xl border border-[#9d4edd]/40 bg-[#0b041a]/80 p-8 lg:p-10 shadow-[0_0_40px_rgba(123,44,191,0.18)]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(157,78,221,0.45)]">
              <Target className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {missionVision.mission.title}
            </h3>
            <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
              {missionVision.mission.text}
            </p>
          </motion.div>

          <motion.div
            className="shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-1.5 rounded-full bg-gradient-to-br from-[#00d0e6] to-[#7b2cbf] shadow-[0_0_50px_rgba(157,78,221,0.35)]">
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden border-4 border-white/80">
                <Image
                  src={missionVision.image}
                  alt="Mission and vision event stage"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:flex-1 rounded-2xl border border-[#00d0e6]/40 bg-[#0b041a]/80 p-8 lg:p-10 shadow-[0_0_40px_rgba(0,208,230,0.18)]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d0e6] to-[#1c3e98] flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(0,208,230,0.45)]">
              <Eye className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {missionVision.vision.title}
            </h3>
            <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
              {missionVision.vision.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
