"use client";

import Image from "next/image";
import data from "../../data/content.json";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { whyChooseUs } = data.aboutPage;

  return (
    <section
      id="why-choose-us"
      className="w-full py-24 bg-white overflow-hidden scroll-mt-28"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            className="w-full lg:flex-1 flex flex-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4 text-[#7b2cbf] font-semibold text-sm md:text-base uppercase tracking-wider">
              <span className="text-2xl font-light leading-none -mt-1">[</span>
              {whyChooseUs.badge}
            </div>

            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1c3e98] leading-[1.2] mb-6 tracking-tight">
              {whyChooseUs.titleStart}
              <span className="bg-gradient-to-r from-[#00d0e6] to-[#7b2cbf] bg-clip-text text-transparent">
                {whyChooseUs.titleHighlight}
              </span>
            </h2>

            <div className="flex items-center mb-8">
              <div className="h-[2px] w-12 bg-[#00d0e6]"></div>
              <div className="mx-3 text-[#1c3e98] text-lg">✦</div>
              <div className="h-[2px] w-12 bg-[#7b2cbf]"></div>
            </div>

            <p className="text-gray-500 font-medium mb-10 leading-relaxed text-base md:text-lg">
              {whyChooseUs.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {whyChooseUs.features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-[#7b2cbf] font-bold text-lg md:text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%] xl:w-[48%] relative max-w-[560px] mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[480px] md:h-[560px] lg:h-[620px] w-full">
                <Image
                  src={whyChooseUs.image}
                  alt="Luxury event space"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
