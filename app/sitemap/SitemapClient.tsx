"use client";

import PageBanner from "@/app/components/PageBanner";
import data from "@/data/content.json";
import { motion } from "framer-motion";
import { Home, Users, Calendar, Briefcase, FileText, Mail, User, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SitemapClient() {
  const { sitemapPage } = data;

  // Helper to map string icon names to Lucide components
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "home": return <Home className={className} />;
      case "users": return <Users className={className} />;
      case "calendar": return <Calendar className={className} />;
      case "briefcase": return <Briefcase className={className} />;
      case "file-text": return <FileText className={className} />;
      case "mail": return <Mail className={className} />;
      case "user": return <User className={className} />;
      case "shield": return <Shield className={className} />;
      default: return <Home className={className} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={sitemapPage.banner.title} 
        image={sitemapPage.banner.image} 
        breadcrumbs={sitemapPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#f9f3ff] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#f0e6ff] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-18 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapPage.sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center flex-shrink-0 border border-[#f0e6ff]">
                    {getIcon(section.icon, "w-6 h-6")}
                  </div>
                  <h3 className="text-xl font-bold text-[#0b132b]">
                    {section.id}. {section.title}
                  </h3>
                </div>
                
                <div className="h-1 w-8 bg-[#6C2BD9] rounded-full mb-6 ml-16"></div>
                
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href={link.href} className="flex items-center gap-3 text-gray-600 hover:text-[#6C2BD9] font-medium transition-colors group">
                        <ChevronRight className="w-4 h-4 text-[#6C2BD9] group-hover:translate-x-1 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Decorative Graphic Block (9th slot) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hidden lg:flex items-center justify-center relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#fcf8ff] to-white pointer-events-none"></div>
              
              {/* CSS Sitemap Graphic */}
              <div className="relative z-10 w-full h-full flex items-center justify-center pt-8 pr-4">
                <div className="relative w-48 h-32">
                  {/* Top Node */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-gradient-to-r from-[#e6ccff] to-[#bd00ff] rounded-lg shadow-sm border border-[#d9b3ff] flex items-center justify-center opacity-80">
                    <div className="w-8 h-2 bg-white/50 rounded-full"></div>
                  </div>
                  {/* Lines */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#e6ccff]"></div>
                  <div className="absolute top-16 left-4 right-4 h-0.5 bg-[#e6ccff]"></div>
                  
                  <div className="absolute top-16 left-4 w-0.5 h-6 bg-[#e6ccff]"></div>
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#e6ccff]"></div>
                  <div className="absolute top-16 right-4 w-0.5 h-6 bg-[#e6ccff]"></div>
                  
                  {/* Bottom Nodes */}
                  <div className="absolute top-22 left-0 w-12 h-8 bg-white rounded border border-[#e6ccff] shadow-sm flex items-center justify-center">
                    <div className="w-6 h-1 bg-[#e6ccff] rounded-full"></div>
                  </div>
                  <div className="absolute top-22 left-1/2 -translate-x-1/2 w-12 h-8 bg-white rounded border border-[#e6ccff] shadow-sm flex items-center justify-center">
                    <div className="w-6 h-1 bg-[#e6ccff] rounded-full"></div>
                  </div>
                  <div className="absolute top-22 right-0 w-12 h-8 bg-white rounded border border-[#e6ccff] shadow-sm flex items-center justify-center">
                    <div className="w-6 h-1 bg-[#e6ccff] rounded-full"></div>
                  </div>

                  {/* Shield Overlay */}
                  <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-[#6C2BD9] rounded-xl flex items-center justify-center shadow-lg rotate-12 shadow-purple-500/30">
                    <svg className="w-8 h-8 text-white -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
