"use client";

import { useState } from "react";
import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import { motion } from "framer-motion";
import { CalendarDays, Users, Handshake, Pen, Settings, FileText, User, GraduationCap, ArrowRight, Star, TrendingUp, Gift, Heart, BriefcaseBusiness } from "lucide-react";

export default function CareerClient() {
  const { careerPage } = data;

  const getJobIcon = (name: string) => {
    switch (name) {
      case "calendar": return <CalendarDays className="w-6 h-6 text-[#bd00ff]" />;
      case "users": return <Users className="w-6 h-6 text-[#bd00ff]" />;
      case "handshake": return <Handshake className="w-6 h-6 text-[#bd00ff]" />;
      case "pen": return <Pen className="w-6 h-6 text-[#bd00ff]" />;
      case "settings": return <Settings className="w-6 h-6 text-[#bd00ff]" />;
      case "file-text": return <FileText className="w-6 h-6 text-[#bd00ff]" />;
      case "user": return <User className="w-6 h-6 text-[#bd00ff]" />;
      case "graduation-cap": return <GraduationCap className="w-6 h-6 text-[#bd00ff]" />;
      default: return <BriefcaseBusiness className="w-6 h-6 text-[#bd00ff]" />;
    }
  };

  const getBenefitIcon = (name: string) => {
    switch (name) {
      case "star": return <Star className="w-5 h-5 text-[#bd00ff]" />;
      case "users": return <Users className="w-5 h-5 text-[#bd00ff]" />;
      case "trending-up": return <TrendingUp className="w-5 h-5 text-[#bd00ff]" />;
      case "gift": return <Gift className="w-5 h-5 text-[#bd00ff]" />;
      case "heart": return <Heart className="w-5 h-5 text-[#bd00ff]" />;
      default: return null;
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const JOBS_PER_PAGE = 6;
  
  const totalJobs = careerPage.jobsList.jobs.length;
  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const currentJobs = careerPage.jobsList.jobs.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={careerPage.banner.title} 
        image={careerPage.banner.image} 
        breadcrumbs={careerPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Top Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#6C2BD9]/30 lg:hidden"></div>
                {careerPage.intro.badge}
                <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-2">
                {careerPage.intro.titleStart}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#bd00ff] tracking-tight mb-4">
                {careerPage.intro.titleHighlight}
              </h2>
              <p className="text-[#555] max-w-2xl text-lg">
                {careerPage.intro.description}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <Image src={careerPage.intro.image} alt="Occasia Team" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column - Jobs List */}
            <div className="lg:col-span-8 flex flex-col">
              
              <h3 className="text-gray-500 font-medium mb-6">
                <span className="font-bold text-[#0b132b]">Showing {startIndex + 1}-{Math.min(endIndex, totalJobs)}</span> of {totalJobs} jobs
              </h3>

              <div className="flex flex-col gap-5">
                {currentJobs.map((job: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 hover:border-[#e6ccff] transition-all duration-300 group cursor-pointer"
                  >
                    <Link href={`/career/${job.slug}`} className="flex flex-col md:flex-row gap-6 md:items-center p-6 md:p-8 w-full h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#fcf8ff] border border-[#f0e6ff] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#f0e6ff] transition-all duration-300">
                      {getJobIcon(job.icon)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold text-[#0b132b] mb-2 group-hover:text-[#6C2BD9] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 font-medium mb-3">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{job.type}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                        {job.description}
                      </p>
                    </div>

                    {/* Right Meta */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 mt-4 md:mt-0 md:min-w-[120px]">
                      <div className="flex flex-col md:items-end gap-2">
                        <span className="px-3 py-1 rounded-full border border-[#bd00ff] text-[#bd00ff] text-xs font-bold tracking-wide">
                          {job.category}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">{job.posted}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#fcf8ff] text-[#bd00ff] flex items-center justify-center group-hover:bg-[#bd00ff] group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &lt;
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center font-medium transition-colors shadow-sm ${
                        currentPage === page 
                          ? 'bg-[#bd00ff] border-[#bd00ff] text-white shadow-purple-500/30' 
                          : 'border-gray-200 text-gray-700 bg-white hover:border-[#bd00ff] hover:text-[#bd00ff]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &gt;
                  </button>
                </div>
              )}

            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Join Team Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#120a30] rounded-2xl p-8 shadow-xl text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#bd00ff] opacity-20 blur-[50px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6C2BD9] opacity-20 blur-[40px] rounded-full"></div>
                
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm relative z-10">
                  <BriefcaseBusiness className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 relative z-10">
                  {careerPage.sidebar.joinTeam.title}
                </h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed relative z-10">
                  {careerPage.sidebar.joinTeam.description}
                </p>
                
                <button className="relative z-10 w-full bg-white text-[#120a30] font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:bg-gray-100 transition-all text-sm flex items-center justify-center gap-2">
                  {careerPage.sidebar.joinTeam.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Benefits Block */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-8 relative">
                  {careerPage.sidebar.benefits.title}
                </h3>
                
                <div className="flex flex-col gap-5">
                  {careerPage.sidebar.benefits.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#fcf8ff] flex items-center justify-center flex-shrink-0 border border-[#f0e6ff]">
                        {getBenefitIcon(item.icon)}
                      </div>
                      <span className="text-[14px] text-gray-700 font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Culture Block */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <Image src={careerPage.sidebar.culture.image} alt="Occasia Culture" fill className="object-cover" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0b132b] mb-3">
                  {careerPage.sidebar.culture.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  {careerPage.sidebar.culture.description}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-[#6C2BD9] font-bold hover:text-[#bd00ff] transition-colors text-sm">
                  {careerPage.sidebar.culture.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
