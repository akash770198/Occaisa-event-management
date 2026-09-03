"use client";

import PageBanner from "@/app/components/PageBanner";
import data from "@/data/content.json";
import { motion } from "framer-motion";

export default function PrivacyPolicyClient() {
  const { privacyPolicyPage } = data;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={privacyPolicyPage.banner.title} 
        image={privacyPolicyPage.banner.image} 
        breadcrumbs={privacyPolicyPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18 max-w-5xl">
          
          {/* Top Intro Title */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-4"
            >
              <div className="h-[2px] w-8 md:w-12 bg-[#6C2BD9]/30"></div>
              {privacyPolicyPage.intro.badge}
              <div className="h-[2px] w-8 md:w-12 bg-[#6C2BD9]/30"></div>
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-2"
            >
              {privacyPolicyPage.intro.titleStart}
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-[#38b6ff] tracking-tight"
            >
              {privacyPolicyPage.intro.titleHighlight}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex items-center gap-2"
            >
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#38b6ff]"></div>
              <div className="w-3 h-3 rotate-45 bg-[#6C2BD9]"></div>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#6C2BD9]"></div>
            </motion.div>
          </div>

          {/* Policies List */}
          <div className="bg-white rounded-3xl shadow-xl shadow-purple-900/5 p-8 md:p-10 border border-gray-100 flex flex-col gap-6 md:gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f9f3ff] to-transparent rounded-bl-full pointer-events-none opacity-50"></div>
            
            {privacyPolicyPage.policies.map((policy, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-8 pb-6 md:pb-8 ${idx !== privacyPolicyPage.policies.length - 1 ? 'border-b border-gray-100' : ''} relative z-10`}
              >
                {/* Number */}
                <div className="text-4xl md:text-5xl font-black text-[#6C2BD9] md:w-20 flex-shrink-0 pt-1">
                  {policy.id}
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className="text-2xl font-bold text-[#0b132b]">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                    {policy.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
