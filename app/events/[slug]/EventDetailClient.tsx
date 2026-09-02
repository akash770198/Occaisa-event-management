"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import PageBanner from "@/app/components/PageBanner";
import { 
  Calendar, MapPin, Clock, ArrowRight,
  Music, Utensils, Trophy, Camera, Gift, 
  Lock
} from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  Users: Music, // Reusing Music for Live Entertainment
  Utensils, 
  Trophy, 
  Camera, 
  Gift
};

export default function EventDetailClient({ slug }: { slug: string }) {
  const { eventsPage } = data;
  const { banner, upcoming, detailTemplate } = eventsPage;

  // Find the event by slug
  const targetUrl = `/events/${slug}`;
  const event = upcoming.events.find((e: any) => e.linkUrl === targetUrl);

  if (!event) {
    notFound();
  }

  // Determine related events (just grab the first 3 that are not this one)
  const relatedEvents = upcoming.events.filter((e: any) => e.linkUrl !== targetUrl).slice(0, 3);

  // Customize breadcrumbs for this detail page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Event Detail", href: targetUrl }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Event Detail"
        image={banner.image}
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-[#fcfaff] flex-1 w-full pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-18 py-12 lg:py-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              
              {/* Inner Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                <Link href="/" className="hover:text-[#6C2BD9] transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#f8f9fc] rounded flex items-center justify-center text-[#6C2BD9]">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </span>
                  Home
                </Link>
                <span>&rsaquo;</span>
                <Link href="/events" className="hover:text-[#6C2BD9] transition-colors">Events</Link>
                <span>&rsaquo;</span>
                <span className="text-[#6C2BD9]">{event.title}</span>
              </div>

              {/* Event Image and Hero Info */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="relative w-full h-80 sm:h-[450px]">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col sm:flex-row gap-6 sm:items-end z-10">
                    
                    {/* Date Box */}
                    <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 shrink-0 w-24">
                      <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">{event.date.split(" ")[1]}</span>
                      <span className="text-white text-3xl font-bold my-1">{event.date.split(" ")[0]}</span>
                      <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">{event.date.split(" ")[2]}</span>
                    </div>

                    <div className="flex-1">
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{event.title}</h1>
                      <p className="text-gray-300 text-base max-w-xl leading-relaxed mb-6">{event.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-white" /> {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-white" /> {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Full Description */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {detailTemplate.fullDescription}
                </p>
              </motion.div>

              {/* Event Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[#0b132b] mb-6 flex items-center gap-4">
                  {detailTemplate.highlights.title}
                  <div className="h-[2px] w-12 bg-[#bd00ff]"></div>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {detailTemplate.highlights.items.map((item: any, idx: number) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 rounded-full bg-[#bd00ff]/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-[#bd00ff]" />
                        </div>
                        <h4 className="text-[#0b132b] font-bold text-sm mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Event Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[#0b132b] mb-8 flex items-center gap-4">
                  {detailTemplate.schedule.title}
                  <div className="h-[2px] w-12 bg-[#bd00ff]"></div>
                </h3>
                
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <div className="relative border-l border-gray-200 ml-4 md:ml-24 space-y-8">
                    {detailTemplate.schedule.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-8 md:pl-10">
                        {/* Timeline Dot */}
                        <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-[#bd00ff] border-4 border-white shadow-sm"></div>
                        
                        {/* Time Pill (Absolute on md) */}
                        <div className="md:absolute md:-left-[6.5rem] md:top-1 inline-block bg-[#f8f9fc] text-[#6C2BD9] text-xs font-bold px-3 py-1.5 rounded-full mb-3 md:mb-0 border border-gray-100 w-[80px] text-center">
                          {item.time}
                        </div>
                        
                        <div>
                          <h4 className="text-[#0b132b] font-bold text-base mb-2">{item.title}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 flex flex-col gap-10">
              
                {/* Registration Form */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#0b132b] mb-6 flex items-center gap-3">
                      {detailTemplate.registrationForm.title}
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#bd00ff] to-transparent opacity-50"></div>
                    </h3>

                    <div className="flex flex-col gap-4">
                      
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#0b132b] ml-1">{detailTemplate.registrationForm.fields.name}</label>
                        <input type="text" placeholder="Enter your full name" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#0b132b] placeholder:text-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50 focus:bg-white transition-colors" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#0b132b] ml-1">{detailTemplate.registrationForm.fields.email}</label>
                        <input type="email" placeholder="Enter your email" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#0b132b] placeholder:text-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50 focus:bg-white transition-colors" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#0b132b] ml-1">{detailTemplate.registrationForm.fields.phone}</label>
                        <input type="tel" placeholder="Enter your phone number" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#0b132b] placeholder:text-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50 focus:bg-white transition-colors" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#0b132b] ml-1">{detailTemplate.registrationForm.fields.company}</label>
                        <input type="text" placeholder="Enter your company name" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#0b132b] placeholder:text-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50 focus:bg-white transition-colors" />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#0b132b] ml-1">{detailTemplate.registrationForm.fields.seats}</label>
                        <select className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#0b132b] focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50 focus:bg-white transition-colors cursor-pointer appearance-none">
                          <option value="">Select number of seats</option>
                          <option value="1">1 Seat</option>
                          <option value="2">2 Seats</option>
                          <option value="3">3 Seats</option>
                          <option value="4">4+ Seats</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-[#0b132b] ml-1">{detailTemplate.registrationForm.fields.message}</label>
                        <textarea rows={3} placeholder="Any special requests?" className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3 text-sm text-[#0b132b] placeholder:text-[#0b132b]/60 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50 focus:bg-white transition-colors resize-none"></textarea>
                      </div>

                      <button type="button" className="w-full bg-[#6C2BD9] hover:bg-[#5b22b8] text-white py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all mt-2 shadow-lg shadow-[#6C2BD9]/20">
                        {detailTemplate.registrationForm.buttonText} <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-3">
                        <Lock className="w-3 h-3" />
                        <span>{detailTemplate.registrationForm.securityText}</span>
                      </div>

                    </div>
                  </div>
                </motion.div>

                {/* Related Events */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
                >
                <h3 className="text-lg font-bold text-[#0b132b] mb-6">{detailTemplate.relatedEventsTitle}</h3>
                
                <div className="flex flex-col gap-6">
                  {relatedEvents.map((rel: any, idx: number) => (
                    <Link key={idx} href={rel.linkUrl} className="flex gap-4 group">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-[#0b132b] mb-1.5 group-hover:text-[#6C2BD9] transition-colors">{rel.title}</h4>
                        <div className="flex flex-col gap-1 text-[11px] text-gray-500 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-[#bd00ff]" /> {rel.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-[#bd00ff]" /> {rel.location}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href="/events" className="inline-flex items-center gap-2 text-[#6C2BD9] text-sm font-bold hover:text-[#5b22b8] transition-colors">
                    {detailTemplate.viewAllText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
