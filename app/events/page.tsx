"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import PageBanner from "@/app/components/PageBanner";
import { 
  Calendar, MapPin, Clock, ArrowRight, Search, LayoutGrid, 
  Briefcase, Heart, Mic, PartyPopper, Star, ChevronDown, Mail
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  LayoutGrid, Briefcase, Heart, Mic, PartyPopper, Star
};

export default function EventsPage() {
  const { eventsPage } = data;
  const { banner, upcoming, sidebar } = eventsPage;

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ date: "", location: "", category: "" });
  const [appliedFilters, setAppliedFilters] = useState({ date: "", location: "", category: "" });

  const uniqueDates = useMemo(() => Array.from(new Set(upcoming.events.map((e: any) => e.date))), [upcoming.events]);
  const uniqueLocations = useMemo(() => Array.from(new Set(upcoming.events.map((e: any) => e.location))), [upcoming.events]);
  const uniqueCategories = useMemo(() => Array.from(new Set(upcoming.events.map((e: any) => e.badge))), [upcoming.events]);

  const filteredEvents = useMemo(() => {
    return upcoming.events.filter((event: any) => {
      const matchDate = appliedFilters.date ? event.date === appliedFilters.date : true;
      const matchLocation = appliedFilters.location ? event.location === appliedFilters.location : true;
      const matchCategory = appliedFilters.category ? event.badge === appliedFilters.category : true;
      return matchDate && matchLocation && matchCategory;
    });
  }, [upcoming.events, appliedFilters]);

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleSearch = () => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

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
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] mb-6 tracking-tight">
              {upcoming.titleStart} 
              <span className="text-[#bd00ff]">{upcoming.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 text-base max-w-xl whitespace-pre-line leading-relaxed">
              {upcoming.description}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-12 flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full bg-[#f8f9fc] rounded-xl border border-transparent hover:border-gray-200 transition-colors">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-[#bd00ff]/60" />
              </div>
              <select 
                value={filters.date}
                onChange={(e) => setFilters(f => ({ ...f, date: e.target.value }))}
                className="w-full bg-transparent appearance-none pl-12 pr-10 py-3.5 text-sm text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="">Select Date</option>
                {uniqueDates.map((date: any, idx) => <option key={idx} value={date}>{date}</option>)}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative flex-1 w-full bg-[#f8f9fc] rounded-xl border border-transparent hover:border-gray-200 transition-colors">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="w-5 h-5 text-[#bd00ff]/60" />
              </div>
              <select 
                value={filters.location}
                onChange={(e) => setFilters(f => ({ ...f, location: e.target.value }))}
                className="w-full bg-transparent appearance-none pl-12 pr-10 py-3.5 text-sm text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="">Select Location</option>
                {uniqueLocations.map((loc: any, idx) => <option key={idx} value={loc}>{loc}</option>)}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="relative flex-1 w-full bg-[#f8f9fc] rounded-xl border border-transparent hover:border-gray-200 transition-colors">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LayoutGrid className="w-5 h-5 text-[#bd00ff]/60" />
              </div>
              <select 
                value={filters.category}
                onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))}
                className="w-full bg-transparent appearance-none pl-12 pr-10 py-3.5 text-sm text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map((cat: any, idx) => <option key={idx} value={cat}>{cat}</option>)}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <button onClick={handleSearch} className="w-full md:w-auto bg-[#bd00ff] hover:bg-[#a600e6] text-white px-8 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#bd00ff]/20">
              Search Events <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Event List */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                  <p className="text-gray-500 font-medium">No events match your selected criteria.</p>
                </div>
              ) : (
                <>
                  {paginatedEvents.map((event: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % ITEMS_PER_PAGE) * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 md:gap-8 group"
                >
                  <div className="relative w-full sm:w-[340px] h-56 sm:h-auto shrink-0 overflow-hidden rounded-xl">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="py-2 sm:py-3 pr-2 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block border border-[#bd00ff]/30 text-[#bd00ff] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-[#bd00ff]/5">
                        {event.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0b132b] mb-4 group-hover:text-[#6C2BD9] transition-colors">{event.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#6C2BD9]" /> {event.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#6C2BD9]" /> {event.time}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 text-[#6C2BD9]" /> {event.location}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                      <Link href={event.linkUrl} className="text-[#6C2BD9] text-sm font-bold flex items-center gap-1 hover:text-[#5b22b8] transition-colors">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="border border-[#bd00ff] text-[#bd00ff] hover:bg-[#bd00ff] hover:text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Pagination */}
              {totalPages > 0 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &lsaquo;
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                        currentPage === page 
                          ? "bg-[#6C2BD9] text-white font-bold shadow-md shadow-[#6C2BD9]/20 border border-transparent" 
                          : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &rsaquo;
                  </button>
                </div>
              )}
                </>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              
              {/* Featured Event */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0b132b] mb-4">{sidebar.featured.title.split(' 2024')[0]}</h3>
                <div className="w-12 h-[2px] bg-[#bd00ff] mb-6"></div>
                
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
                  <Image src={sidebar.featured.image} alt={sidebar.featured.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-[#bd00ff] text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                </div>
                
                <div className="mb-3">
                   <span className="inline-block border border-gray-200 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-gray-50">
                    {sidebar.featured.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0b132b] mb-3">{sidebar.featured.title}</h4>
                
                <div className="flex flex-col gap-2 text-xs font-medium text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6C2BD9]" /> {sidebar.featured.date} <span className="mx-1">•</span> <Clock className="w-4 h-4 text-[#6C2BD9]" /> {sidebar.featured.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#6C2BD9]" /> {sidebar.featured.location}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  {sidebar.featured.description}
                </p>
                
                <button className="w-full bg-[#6C2BD9] hover:bg-[#5b22b8] text-white py-3 rounded-xl text-sm font-bold transition-all shadow-md shadow-[#6C2BD9]/20">
                  Book Now
                </button>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0b132b] mb-4">{sidebar.categories.title}</h3>
                <div className="w-12 h-[2px] bg-[#bd00ff] mb-6"></div>
                
                <div className="flex flex-col gap-2">
                  {sidebar.categories.items.map((cat: any, idx: number) => {
                    const Icon = iconMap[cat.icon];
                    
                    // Dynamically calculate the count
                    let count = 0;
                    if (cat.label === "All Events") {
                      count = upcoming.events.length;
                    } else {
                      const l = cat.label.toLowerCase();
                      const lSingular = l.endsWith('s') ? l.slice(0, -1) : l;
                      count = upcoming.events.filter((e: any) => {
                        const b = e.badge.toLowerCase();
                        const bSingular = b.endsWith('s') ? b.slice(0, -1) : b;
                        return bSingular === lSingular || bSingular.includes(lSingular) || lSingular.includes(bSingular);
                      }).length;
                    }
                    const formattedCount = count < 10 ? `0${count}` : count;

                    return (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f9fc] transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#f8f9fc] group-hover:bg-white flex items-center justify-center border border-transparent group-hover:border-[#6C2BD9]/20 transition-colors">
                            <Icon className="w-4 h-4 text-[#6C2BD9]" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#6C2BD9] transition-colors">{cat.label}</span>
                        </div>
                        <span className="text-xs font-bold text-[#6C2BD9] bg-[#6C2BD9]/10 px-2 py-1 rounded-md">
                          {formattedCount}
                        </span>
                      </div>
                    )
                  })}
                </div>
                
                <Link href="#" className="inline-flex items-center gap-2 text-[#6C2BD9] text-sm font-bold mt-6 hover:text-[#5b22b8] transition-colors">
                  {sidebar.categories.linkText} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Newsletter */}
              <div className="bg-[#13072E] rounded-2xl p-8 relative overflow-hidden shadow-xl">
                {/* Background Details */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#bd00ff] opacity-20 blur-[40px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 whitespace-pre-line">
                    {sidebar.newsletter.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {sidebar.newsletter.description}
                  </p>
                  
                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder={sidebar.newsletter.placeholder}
                      className="w-full bg-white px-4 py-3.5 rounded-xl text-sm text-[#0b132b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bd00ff]/50"
                    />
                    <button type="submit" className="w-full bg-[#bd00ff] hover:bg-[#a600e6] text-white py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#bd00ff]/20">
                      {sidebar.newsletter.buttonText} <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
