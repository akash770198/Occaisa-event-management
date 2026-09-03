"use client";

import PageBanner from "@/app/components/PageBanner";
import data from "@/data/content.json";
import { motion } from "framer-motion";
import { Award, Users, Lightbulb, ShieldCheck, ThumbsUp, ArrowRight, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function GetQuoteClient() {
  const { getQuotePage } = data;

  // Helper to map string icon names to Lucide components
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "award": return <Award className={className} />;
      case "users": return <Users className={className} />;
      case "lightbulb": return <Lightbulb className={className} />;
      case "shield-check": return <ShieldCheck className={className} />;
      case "thumbs-up": return <ThumbsUp className={className} />;
      default: return <Award className={className} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={getQuotePage.banner.title} 
        image={getQuotePage.banner.image} 
        breadcrumbs={getQuotePage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18 max-w-6xl">
          
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
              {getQuotePage.intro.badge}
              <div className="h-[2px] w-8 md:w-12 bg-[#6C2BD9]/30"></div>
            </motion.span>
            
            <div className="flex flex-wrap justify-center gap-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-[#0b132b] tracking-tight"
              >
                {getQuotePage.intro.titleStart}
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-[#6C2BD9] tracking-tight"
              >
                {getQuotePage.intro.titleHighlight}
              </motion.h2>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-purple-900/5 p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden">
            
            {/* Left Column - Form */}
            <div className="lg:w-2/3 flex flex-col">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[#6C2BD9] font-bold text-lg tracking-wide mb-8 uppercase"
              >
                {getQuotePage.form.title}
              </motion.h3>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.name}</label>
                    <input type="text" placeholder={getQuotePage.form.placeholders.name} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </motion.div>
                  {/* Email */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.email}</label>
                    <input type="email" placeholder={getQuotePage.form.placeholders.email} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </motion.div>
                  {/* Phone */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.phone}</label>
                    <input type="number" placeholder={getQuotePage.form.placeholders.phone} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </motion.div>
                  {/* Event Type */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-col gap-2 relative">
                    <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.eventType}</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all appearance-none cursor-pointer">
                        <option value="" disabled>{getQuotePage.form.placeholders.eventType}</option>
                        {getQuotePage.form.eventTypeOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </motion.div>
                  {/* Event Date */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="flex flex-col gap-2 relative">
                    <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.eventDate}</label>
                    <div className="relative">
                      <input type="date" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all appearance-none" />
                    </div>
                  </motion.div>
                  {/* Expected Guests */}
                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.25 }} className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.guests}</label>
                    <input type="number" placeholder={getQuotePage.form.placeholders.guests} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </motion.div>
                </div>
                
                {/* Event Location */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.location}</label>
                  <input type="text" placeholder={getQuotePage.form.placeholders.location} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                </motion.div>

                {/* Event Details */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35 }} className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.details}</label>
                  <textarea placeholder={getQuotePage.form.placeholders.details} rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all resize-none"></textarea>
                </motion.div>

                {/* Budget Range */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0b132b]">{getQuotePage.form.fields.budget}</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-[#0b132b] text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all appearance-none cursor-pointer">
                      <option value="" disabled>{getQuotePage.form.placeholders.budget}</option>
                      {getQuotePage.form.budgetOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Agreement Checkbox */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.45 }} className="flex items-start gap-3 mt-2">
                  <input type="checkbox" className="mt-1 flex-shrink-0 w-4 h-4 rounded border-gray-300 text-[#6C2BD9] focus:ring-[#6C2BD9]" />
                  <span className="text-sm text-gray-600">
                    {getQuotePage.form.agreementText}
                    <Link href="/privacy-policy" className="text-[#6C2BD9] font-bold hover:underline">{getQuotePage.form.privacyLink}</Link>
                    {" "}and{" "}
                    <Link href="#" className="text-[#6C2BD9] font-bold hover:underline">{getQuotePage.form.termsLink}</Link>
                  </span>
                </motion.div>

                {/* Submit Button */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }} className="mt-4">
                  <button type="button" className="bg-[#6C2BD9] hover:bg-[#bd00ff] text-white font-bold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2 w-fit">
                    {getQuotePage.form.submitButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <p className="text-sm text-gray-500 mt-4">{getQuotePage.form.footerText}</p>
                </motion.div>

              </form>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#fcf8ff] rounded-2xl p-8 md:p-10 border border-[#f0e6ff] h-full flex flex-col gap-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-60 blur-3xl rounded-full pointer-events-none"></div>

                <h3 className="text-[#6C2BD9] font-bold text-lg tracking-wide uppercase relative z-10 border-b border-[#e6ccff] pb-4">
                  {getQuotePage.sidebar.title}
                </h3>
                
                <div className="flex flex-col gap-8 relative z-10">
                  {getQuotePage.sidebar.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white text-[#6C2BD9] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#f0e6ff]">
                        {getIcon(item.icon, "w-6 h-6")}
                      </div>
                      <div className="flex flex-col mt-0.5">
                        <span className="text-base font-bold text-[#0b132b] mb-1">{item.title}</span>
                        <span className="text-sm text-gray-600 leading-relaxed">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
