"use client";

import { useState } from "react";
import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, Award, Lightbulb, Shield, ThumbsUp, Headset, PhoneCall } from "lucide-react";

export default function FaqClient() {
  const { faqPage } = data;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case "award": return <Award className="w-6 h-6 text-[#bd00ff]" />;
      case "lightbulb": return <Lightbulb className="w-6 h-6 text-[#bd00ff]" />;
      case "shield": return <Shield className="w-6 h-6 text-[#bd00ff]" />;
      case "thumbs-up": return <ThumbsUp className="w-6 h-6 text-[#bd00ff]" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={faqPage.banner.title} 
        image={faqPage.banner.image} 
        breadcrumbs={faqPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
              {faqPage.header.badge}
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-4">
              {faqPage.header.title}
            </h2>
            <p className="text-[#555] max-w-2xl text-lg">
              {faqPage.header.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
            
            {/* Left Column - FAQ Accordion */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {faqPage.faqs.map((faq: any, idx: number) => {
                const isActive = activeIndex === idx;
                
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isActive ? 'border-[#e6ccff] shadow-md shadow-purple-500/5' : 'border-gray-100 shadow-sm hover:border-[#e6ccff]'}`}
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    >
                      <h3 className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isActive ? 'text-[#6C2BD9]' : 'text-[#0b132b]'}`}>
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'text-[#6C2BD9]' : 'text-[#bd00ff]'}`}>
                        {isActive ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 flex flex-col md:flex-row gap-6">
                            {faq.image && (
                              <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                                <Image src={faq.image} alt="FAQ Visual" fill className="object-cover" />
                              </div>
                            )}
                            <p className="text-gray-600 leading-relaxed text-[15px] md:text-base flex-1">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Newsletter */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#531b9c] to-[#bd00ff] rounded-2xl p-8 shadow-xl text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-[50px] rounded-full"></div>
                
                <span className="text-white/80 font-bold text-sm tracking-wider mb-4 block">
                  {faqPage.sidebar.newsletter.badge}
                </span>
                
                <h3 className="text-2xl font-bold mb-3 relative z-10 leading-tight">
                  {faqPage.sidebar.newsletter.title}
                </h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed relative z-10">
                  {faqPage.sidebar.newsletter.subtitle}
                </p>
                
                <div className="flex relative z-10 bg-[#35106b]/50 border border-white/20 rounded-lg p-1 overflow-hidden">
                  <input 
                    type="email" 
                    placeholder={faqPage.sidebar.newsletter.placeholder} 
                    className="flex-1 bg-transparent text-white placeholder-white/60 px-4 py-2 outline-none text-sm w-full"
                  />
                  <button className="bg-white text-[#6C2BD9] w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Features Block */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-8 relative">
                  {faqPage.sidebar.features.title}
                </h3>
                
                <div className="flex flex-col gap-6">
                  {faqPage.sidebar.features.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-[#fcf8ff] flex items-center justify-center flex-shrink-0 border border-[#f0e6ff] group-hover:scale-110 transition-transform duration-300">
                        {getFeatureIcon(item.icon)}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[15px] font-bold text-[#0b132b] mb-1">
                          {item.title}
                        </h4>
                        <span className="text-sm text-gray-500 leading-snug">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom Help Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#fdfcff] rounded-2xl border border-[#f0e6ff] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#6C2BD9] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-purple-500/30">
                <Headset className="w-8 h-8" />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#0b132b] mb-2">{faqPage.helpSection.title}</h3>
                <p className="text-gray-500">{faqPage.helpSection.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
              <Link href={faqPage.helpSection.buttonLink} className="bg-[#6C2BD9] hover:bg-[#bd00ff] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#bd00ff]/30 transition-all flex items-center gap-2 whitespace-nowrap">
                {faqPage.helpSection.buttonText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <div className="hidden sm:block w-[1px] h-12 bg-gray-200"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0e6ff] flex items-center justify-center text-[#bd00ff]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium">{faqPage.helpSection.phoneLabel}</span>
                  <span className="text-[#0b132b] font-bold text-lg">{faqPage.helpSection.phoneNumber}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
