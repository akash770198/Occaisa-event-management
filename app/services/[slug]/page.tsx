"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import { use } from "react";
import PageBanner from "@/app/components/PageBanner";
import { 
  CalendarCheck, Users, Clock, Star, 
  CheckCircle2, Lightbulb, MapPin, Mic, Headset,
  Phone, Mail, ArrowRight, Send
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  CalendarCheck, Users, Clock, Star, Lightbulb, MapPin, Mic, Headset
};

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const { services } = data;
  const service = services.items.find((item: any) => item.slug === slug);
  
  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-[#0b132b]">Service Not Found</div>;
  }

  const { details } = service;

  // Render dynamic icon
  const renderIcon = (iconName: string, customClass: string = "w-6 h-6") => {
    const IconComponent = iconMap[iconName] || Star;
    return <IconComponent className={customClass} strokeWidth={1.5} />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={service.title}
        image="/PageBanner.svg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${slug}` }
        ]}
      />

      <div className="bg-white flex-1 w-full">
        <div className="container mx-auto px-6 md:px-12 lg:px-18 py-20 lg:py-24">
          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* ROW 1: Hero Image & Service Menu */}
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              <div className="w-full lg:w-[68%]">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full lg:w-[32%]">
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                  <div className="flex flex-col gap-1">
                    {services.items.map((navItem: any, idx: number) => {
                      const isActive = navItem.slug === slug;
                      return (
                        <Link 
                          key={idx} 
                          href={`/services/${navItem.slug}`}
                          className={`flex items-center justify-between p-5 rounded-xl font-bold text-base transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#bd00ff] text-white' 
                              : 'bg-white text-[#0b132b] hover:bg-[#f5f0ff] hover:text-[#6C2BD9]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {renderIcon("CalendarCheck")}
                            <span>{navItem.title}</span>
                          </div>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Intro & Features AND Newsletter & Contact */}
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              <div className="w-full lg:w-[68%] flex flex-col">
                <div className="mb-12">
                  <span className="inline-block px-4 py-1.5 bg-[#f5f0ff] text-[#6C2BD9] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {details.badge}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b132b] leading-[1.2] mb-8">
                    {details.mainTitle.split('.').map((part: string, idx: number, arr: string[]) => {
                      const isHighlighted = idx === arr.length - 2;
                      const text = part + (idx < arr.length - 1 ? '.' : '');
                      
                      if (text.includes(" services for you.")) {
                        const parts = text.split(" services for you.");
                        return (
                          <span key={idx} className={isHighlighted ? "text-[#6C2BD9]" : ""}>
                            {parts[0]}
                            <br className="hidden md:block" />
                            services for you.
                          </span>
                        );
                      }
                      
                      return (
                        <span key={idx} className={isHighlighted ? "text-[#6C2BD9]" : ""}>
                          {text}
                        </span>
                      );
                    })}
                  </h1>
                  
                  <div className="flex flex-col gap-6 text-gray-600 leading-relaxed text-base">
                    {details.paragraphs.map((p: string, i: number) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 lg:mb-0">
                  {details.features.map((feat: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      className="flex flex-col items-center text-center group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#f5f0ff] flex items-center justify-center mb-4 group-hover:bg-[#6C2BD9] group-hover:text-white transition-colors duration-300">
                        <div className="text-[#6C2BD9] group-hover:text-white transition-colors duration-300">
                          {renderIcon(feat.icon)}
                        </div>
                      </div>
                      <h4 className="font-bold text-[#0b132b] mb-2 text-base">{feat.title}</h4>
                      <p className="text-gray-500 text-base leading-relaxed">{feat.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[32%] flex flex-col gap-10">
                <div className="bg-[#0b041a] rounded-2xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#bd00ff] opacity-20 blur-3xl rounded-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#bd00ff] text-sm">✦</span>
                      <span className="text-[#bd00ff] font-bold text-xs uppercase tracking-wider">SUBSCRIBE</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Get Newsletter</h3>
                    <p className="text-gray-400 text-base mb-6 leading-relaxed">
                      Stay updated with the latest event trends, tips & inspiration.
                    </p>
                    <form className="relative flex items-center">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full bg-[#1c142e] border border-gray-700 rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#bd00ff] transition-colors"
                      />
                      <button type="submit" className="absolute right-1 w-9 h-9 bg-[#bd00ff] rounded-md flex items-center justify-center text-white hover:bg-[#9d00d8] transition-colors">
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                      <Headset className="w-5 h-5 text-[#6C2BD9]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0b132b] mb-1">Have an Event<br/>in Mind?</h3>
                      <p className="text-gray-500 text-base">Let's bring your ideas to life<br/>with perfection.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-5 mb-8">
                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-[#6C2BD9] shrink-0" />
                      <span className="text-base font-bold text-[#0b132b]">+1 1234567890</span>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-[#6C2BD9] shrink-0" />
                      <span className="text-base font-bold text-[#0b132b]">hello@occasia.com</span>
                    </div>
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-[#6C2BD9] shrink-0 mt-0.5" />
                      <span className="text-base font-bold text-[#0b132b]">123 Celebration Avenue,<br/>Mumbai, Maharashtra 400001</span>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-[#6C2BD9] hover:bg-[#5b22b8] text-white py-3 rounded-lg font-bold text-base transition-colors">
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ROW 3: Why Choose Us AND Banner Image */}
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              <div className="w-full lg:w-[68%] flex flex-col">
                <div className="mb-16 lg:mb-0">
                  <h2 className="text-2xl font-bold text-[#0b132b] mb-4">{details.whyChooseUs.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">{details.whyChooseUs.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {details.whyChooseUs.list.map((item: any, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-[#6C2BD9] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-[#0b132b] mb-1 text-base">{item.title}</h4>
                          <p className="text-gray-500 text-base leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[32%] flex flex-col">
                <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/Services/01_floral_wedding_stage.svg"
                    alt="Wedding Event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ROW 4: What We Offer AND Events We Plan */}
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              <div className="w-full lg:w-[68%] flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold text-[#0b132b] mb-4">{details.whatWeOffer.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">{details.whatWeOffer.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {details.whatWeOffer.items.map((item: any, idx: number) => (
                      <div key={idx} className="group flex gap-4 p-6 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#f5f0ff] flex items-center justify-center shrink-0">
                          <div className="text-[#6C2BD9]">
                            {renderIcon(item.icon)}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0b132b] mb-1.5 text-base">{item.title}</h4>
                          <p className="text-gray-500 text-base leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[32%] flex flex-col">
                <div className="bg-[#fcfaff] border border-[#f5f0ff] rounded-2xl p-8 shadow-md">
                  <h3 className="text-lg font-bold text-[#0b132b] mb-3">{data.servicesPage.eventsWePlan.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {data.servicesPage.eventsWePlan.description}
                  </p>
                  <div className="flex flex-col gap-3 mb-6">
                    {data.servicesPage.eventsWePlan.list.map((evt: string, idx: number) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <CheckCircle2 className="w-4 h-4 text-[#6C2BD9] shrink-0" />
                        <span className="text-base text-gray-700">{evt}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="text-[#6C2BD9] font-bold text-base flex items-center gap-2 hover:text-[#5b22b8] transition-colors">
                    Let's Plan Your Event <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
