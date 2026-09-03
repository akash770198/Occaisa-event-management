"use client";

import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import { motion } from "framer-motion";
import { 
  CalendarDays, User, Users, Clock, MapPin, Briefcase, Hash, 
  IndianRupee, FileText, CheckCircle2, Award, Gift, TrendingUp, 
  Shield, BookOpen, Plane, Heart, Send, UploadCloud, Lock, 
  Bookmark, Share2
} from "lucide-react";

export default function CareerDetailClient({ slug }: { slug: string }) {
  const { careerDetailPage, careerPage } = data;
  
  const jobData = careerPage.jobsList.jobs.find((j: any) => j.slug === slug);

  if (!jobData) {
    return <div className="min-h-screen flex items-center justify-center text-xl font-bold">Job not found</div>;
  }

  const getIcon = (name: string, className: string = "w-5 h-5") => {
    switch (name) {
      case "calendar": return <CalendarDays className={className} />;
      case "user": return <User className={className} />;
      case "users": return <Users className={className} />;
      case "clock": return <Clock className={className} />;
      case "map-pin": return <MapPin className={className} />;
      case "briefcase": return <Briefcase className={className} />;
      case "hash": return <Hash className={className} />;
      case "currency": return <IndianRupee className={className} />;
      case "file-text": return <FileText className={className} />;
      case "award": return <Award className={className} />;
      case "gift": return <Gift className={className} />;
      case "trending-up": return <TrendingUp className={className} />;
      case "shield": return <Shield className={className} />;
      case "book-open": return <BookOpen className={className} />;
      case "plane": return <Plane className={className} />;
      case "heart": return <Heart className={className} />;
      case "send": return <Send className={className} />;
      default: return <CheckCircle2 className={className} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={jobData.title} 
        image={careerDetailPage.banner.image} 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Career", href: "/career" },
          { label: jobData.title, href: `/career/${jobData.slug}` }
        ]}
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column - Job Details */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Top Header Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-[#f0e6ff] shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#f9f3ff] to-transparent rounded-bl-full pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row gap-6 md:items-start relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#fcf8ff] border border-[#f0e6ff] flex items-center justify-center flex-shrink-0 text-[#6C2BD9]">
                    <CalendarDays className="w-10 h-10" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <span className="px-3 py-1 rounded-md bg-[#fcf8ff] border border-[#f0e6ff] text-[#6C2BD9] text-xs font-bold tracking-wider uppercase inline-flex w-fit mb-3">
                      {jobData.department} TEAM
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0b132b] tracking-tight mb-4">
                      {jobData.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] text-gray-600 font-medium mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#6C2BD9]" />
                        {jobData.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#6C2BD9]" />
                        {jobData.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#6C2BD9]" />
                        {jobData.workModel}
                      </div>
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-[#6C2BD9]" />
                        {jobData.salary}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="bg-[#6C2BD9] hover:bg-[#bd00ff] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Apply Now
                      </button>
                      <button className="bg-white border-2 border-[#e6ccff] text-[#6C2BD9] hover:bg-[#fcf8ff] font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2">
                        <Bookmark className="w-4 h-4" />
                        Save Job
                      </button>
                      <button className="text-gray-500 hover:text-[#6C2BD9] font-bold py-3 px-4 rounded-lg transition-colors flex items-center gap-2 ml-auto md:ml-0">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {jobData.meta.map((item: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center">
                      {getIcon(item.icon, "w-5 h-5")}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-1">{item.label}</span>
                      <span className="text-sm font-bold text-[#0b132b]">{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* About Role */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b132b]">{jobData.about.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                  {jobData.about.content}
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b132b]">{jobData.responsibilities.title}</h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {jobData.responsibilities.items.map((item: any, idx: number) => (
                    <li key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#6C2BD9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed text-[15px] md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b132b]">{jobData.skills.title}</h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {jobData.skills.items.map((item: any, idx: number) => (
                    <li key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#6C2BD9] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed text-[15px] md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center">
                    <Gift className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b132b]">{jobData.benefits.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {jobData.benefits.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-[#f0e6ff] bg-[#fdfcff]">
                      <div className="text-[#6C2BD9]">
                        {getIcon(item.icon, "w-5 h-5")}
                      </div>
                      <span className="text-[14px] font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How to Apply */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#fcf8ff] rounded-2xl p-8 border border-[#e6ccff] shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-40 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#6C2BD9] flex items-center justify-center shadow-sm">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b132b]">{careerDetailPage.job.apply.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-[15px] md:text-base mb-6 relative z-10 max-w-2xl">
                  {careerDetailPage.job.apply.content}
                </p>
                <button className="bg-[#6C2BD9] hover:bg-[#bd00ff] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2 w-fit mb-4 relative z-10">
                  <UploadCloud className="w-5 h-5" />
                  {careerDetailPage.job.apply.buttonText}
                </button>
                <div className="flex items-center gap-2 text-xs text-gray-500 relative z-10">
                  <Lock className="w-3 h-3" />
                  {careerDetailPage.job.apply.privacyNote}
                </div>
              </motion.div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Application Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-6">
                  {careerDetailPage.sidebar.applicationForm.title}
                </h3>
                
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{careerDetailPage.sidebar.applicationForm.fields.name}</label>
                    <input type="text" placeholder={careerDetailPage.sidebar.applicationForm.placeholders.name} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{careerDetailPage.sidebar.applicationForm.fields.email}</label>
                    <input type="email" placeholder={careerDetailPage.sidebar.applicationForm.placeholders.email} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{careerDetailPage.sidebar.applicationForm.fields.phone}</label>
                    <input type="number" placeholder={careerDetailPage.sidebar.applicationForm.placeholders.phone} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{careerDetailPage.sidebar.applicationForm.fields.resume}</label>
                    <div className="w-full bg-[#fcf8ff] border-2 border-dashed border-[#e6ccff] rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#f9f3ff] transition-colors">
                      <UploadCloud className="w-8 h-8 text-[#6C2BD9] mb-2" />
                      <span className="text-sm font-bold text-[#0b132b] mb-1">{careerDetailPage.sidebar.applicationForm.dragDropText}</span>
                      <span className="text-xs text-gray-500">{careerDetailPage.sidebar.applicationForm.dragDropFormat}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">{careerDetailPage.sidebar.applicationForm.fields.coverLetter}</label>
                    <textarea placeholder={careerDetailPage.sidebar.applicationForm.placeholders.coverLetter} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#0b132b] placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#6C2BD9] focus:ring-1 focus:ring-[#6C2BD9] transition-all resize-none"></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#6C2BD9] hover:bg-[#bd00ff] text-white font-bold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all mt-2">
                    {careerDetailPage.sidebar.applicationForm.buttonText}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2">
                    <Lock className="w-3 h-3" />
                    {careerDetailPage.sidebar.applicationForm.privacyText}
                  </div>
                </form>
              </motion.div>

              {/* Job Snapshot */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-6 relative">
                  {careerDetailPage.sidebar.jobSnapshot.title}
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      {getIcon("hash", "w-5 h-5")}
                      <span className="text-sm font-medium">Job ID</span>
                    </div>
                    <span className="text-sm font-bold text-[#0b132b] text-right">EVT{slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) * 42}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      {getIcon("map-pin", "w-5 h-5")}
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <span className="text-sm font-bold text-[#0b132b] text-right">{jobData.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      {getIcon("users", "w-5 h-5")}
                      <span className="text-sm font-medium">Department</span>
                    </div>
                    <span className="text-sm font-bold text-[#0b132b] text-right">{jobData.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      {getIcon("clock", "w-5 h-5")}
                      <span className="text-sm font-medium">Type</span>
                    </div>
                    <span className="text-sm font-bold text-[#0b132b] text-right">{jobData.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      {getIcon("currency", "w-5 h-5")}
                      <span className="text-sm font-medium">Salary</span>
                    </div>
                    <span className="text-sm font-bold text-[#0b132b] text-right">{jobData.salary}</span>
                  </div>
                </div>
              </motion.div>

              {/* Office Location */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-6">
                  {careerDetailPage.sidebar.officeLocation.title}
                </h3>
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160993077!2d72.74109995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>

              {/* Why Join */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-6">
                  {careerDetailPage.sidebar.whyJoin.title}
                </h3>
                <ul className="flex flex-col gap-4 mb-6">
                  {careerDetailPage.sidebar.whyJoin.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#fcf8ff] text-[#6C2BD9] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#f0e6ff]">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-[14px] text-gray-700 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#" className="inline-flex items-center gap-2 text-[#6C2BD9] font-bold hover:text-[#bd00ff] transition-colors text-sm">
                  {careerDetailPage.sidebar.whyJoin.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
