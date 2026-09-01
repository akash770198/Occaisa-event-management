"use client";

import Image from "next/image";
import data from "@/data/content.json";
import PageBanner from "@/app/components/PageBanner";
import { User, Mail, FileText, PenLine, Send, MapPin, Phone, Clock, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  MapPin, Phone, Mail, Clock
};

const Facebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Linkedin = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const Youtube = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

export default function ContactPage() {
  const { contactPage } = data;
  const { banner, heading, form, details, map } = contactPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />

      <div className="bg-[#fcfaff] flex-1 w-full pb-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-18 py-20 lg:py-24">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#6C2BD9] text-sm font-bold uppercase tracking-wider mb-4">
              {heading.badge}
            </span>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#6C2BD9]"></div>
              <div className="text-[#6C2BD9] text-sm">✦</div>
              <div className="h-[2px] w-12 bg-[#6C2BD9]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] mb-6 tracking-tight">
              {heading.titleStart} 
              <span className="text-[#6C2BD9]">Hear From </span>
              <span className="text-[#bd00ff]">You!</span>
            </h2>
            <p className="text-gray-600 text-base max-w-xl whitespace-pre-line leading-relaxed">
              {heading.description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full mb-20">
            {/* Form Section */}
            <motion.div 
              className="w-full lg:w-[55%] bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-[#0b132b] mb-8">{form.title}</h3>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-[#0b132b]/60" strokeWidth={1.5} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0b132b] placeholder-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/20 focus:border-[#bd00ff] transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#0b132b]">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-[#0b132b]/60" strokeWidth={1.5} />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0b132b] placeholder-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/20 focus:border-[#bd00ff] transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0b132b]">Subject</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FileText className="w-5 h-5 text-[#0b132b]/60" strokeWidth={1.5} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter subject" 
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0b132b] placeholder-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/20 focus:border-[#bd00ff] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#0b132b]">Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <PenLine className="w-5 h-5 text-[#0b132b]/60" strokeWidth={1.5} />
                    </div>
                    <textarea 
                      placeholder="Write your message here..." 
                      rows={5}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0b132b] placeholder-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/20 focus:border-[#bd00ff] transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center mt-2">
                  <button type="submit" className="flex items-center gap-2 bg-[#bd00ff] hover:bg-[#a600e6] text-white py-3.5 px-8 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#bd00ff]/25 hover:-translate-y-1">
                    {form.submitText}
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="flex items-center gap-2 text-xs text-gray-500 mt-6">
                    <Lock className="w-3.5 h-3.5" />
                    {form.securityText}
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Contact Details Section */}
            <motion.div 
              className="w-full lg:w-[45%] bg-[#0b041a] rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Background Image & Overlay */}
              <Image 
                src="/PageBanner.svg" 
                alt="Background" 
                fill 
                className="object-cover opacity-[0.15]" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b041a]/50 to-[#0b041a]/90 pointer-events-none"></div>

              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#bd00ff] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#6C2BD9] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">{details.title}</h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                  {details.description}
                </p>

                <div className="flex flex-col gap-8 flex-1">
                  {details.items.map((item: any, idx: number) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div key={idx} className="flex gap-5 items-start">
                        <div className="w-12 h-12 rounded-full bg-[#bd00ff]/10 border border-[#bd00ff]/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#bd00ff]" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-white font-bold text-base mb-5">{details.social.title}</h4>
                  <div className="flex items-center gap-4">
                    {[Facebook, Instagram, Linkedin, Youtube].map((SocialIcon, idx) => (
                      <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#bd00ff] hover:border-[#bd00ff] transition-all duration-300">
                        <SocialIcon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div 
            className="w-full mx-auto rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative h-[450px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* We are using an iframe for Google Maps based on Mumbai */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Card */}
            <div className="absolute top-8 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-[280px]">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-[#bd00ff]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#bd00ff]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b132b] text-base mb-1">{map.title}</h4>
                  <p className="text-gray-500 text-xs whitespace-pre-line leading-relaxed">
                    {map.address}
                  </p>
                </div>
              </div>
              <a href="#" className="text-[#6C2BD9] font-bold text-xs flex items-center gap-1 hover:text-[#5b22b8] transition-colors">
                {map.linkText} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
