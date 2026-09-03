"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function MissionCommitment() {
  const { commitment } = data.missionPage;

  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column - Image */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Dotted pattern top left */}
            <div className="absolute -top-8 -left-8 w-40 flex flex-wrap gap-3 opacity-30 z-0">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#ff007f] rounded-full"></div>
              ))}
            </div>

            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl h-[450px] md:h-[500px] lg:h-[550px] w-full max-md:h-[350px] border-4 border-white">
              <Image
                src={commitment.image}
                alt="Our Commitment"
                fill
                className="object-cover"
              />
            </div>
            {/* Background decorative square outline behind image (as seen in screenshot) */}
            <div className="absolute -top-6 -left-6 bottom-6 right-6 border border-gray-200 rounded-[2rem] -z-10 hidden lg:block"></div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Divider line */}
            <div className="h-1 w-16 bg-[#5a42f5] mb-6"></div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#0b132b] leading-[1.2] mb-8 tracking-tight max-md:text-3xl">
              {commitment.titleStart}
              <span className="text-[#ff007f]">{commitment.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed mb-12">
              {commitment.description}
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-8">
              {commitment.features.map((feature, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="shrink-0 mt-1 text-[#5a42f5] bg-[#fbf9ff] rounded-full p-1 border border-indigo-50">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#0b132b] mb-1">{feature.title}</h4>
                    <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
