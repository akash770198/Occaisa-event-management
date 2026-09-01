"use client";

import PageBanner from "@/app/components/PageBanner";
import data from "@/data/content.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronRight, ArrowUpRight } from "lucide-react";
import { use } from "react";

const Facebook = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const Twitter = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const Instagram = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
const Linkedin = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const QuoteIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11H6V7H10V11ZM18 11H14V7H18V11ZM10 13H6C6 15.21 7.79 17 10 17V19C6.69 19 4 16.31 4 13V5H12V13H10ZM18 13H14C14 15.21 15.79 17 18 17V19C14.69 19 12 16.31 12 13V5H20V13H18Z" /></svg>);

export default function TeamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const { teamDetails } = data as any;
  const teamDetail = teamDetails[slug];
  
  if (!teamDetail) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-[#0b132b]">Team Member Not Found</div>;
  }
  
  const { banner, breadcrumb2, profile, about, expertise, relatedTeam } = teamDetail;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />

      <div className="bg-white flex-1 w-full">
        <div className="container mx-auto px-6 md:px-12 lg:px-18 py-20 lg:py-24">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 items-center">
            <motion.div 
              className="w-full lg:w-5/12 xl:w-1/3 relative rounded-[32px] overflow-hidden shrink-0 mx-auto"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] lg:h-[480px]">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-wider">{profile.badge}</span>
                <div className="flex items-center gap-0">
                  <div className="h-[2px] w-6 bg-gray-200"></div>
                  <span className="text-[#6C2BD9] text-lg px-1 leading-none -mt-1">✦</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0b132b] mb-2">{profile.name}</h1>
              <h3 className="text-xl lg:text-2xl font-bold text-[#6C2BD9] mb-6">{profile.role}</h3>
              
              <p className="text-gray-600 text-base mb-8 leading-relaxed max-w-lg">
                {profile.description}
              </p>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4 text-[#0b132b]">
                  <div className="text-[#6C2BD9]">
                    <Phone size={20} />
                  </div>
                  <span>{profile.contact.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-[#0b132b]">
                  <div className="text-[#6C2BD9]">
                    <Mail size={20} />
                  </div>
                  <span>{profile.contact.email}</span>
                </div>
                <div className="flex items-center gap-4 text-[#0b132b]">
                  <div className="text-[#6C2BD9]">
                    <MapPin size={20} />
                  </div>
                  <span>{profile.contact.location}</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href={profile.social.facebook} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all hover:shadow-lg">
                  <Facebook size={20} />
                </a>
                <a href={profile.social.twitter} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all hover:shadow-lg">
                  <Twitter size={20} />
                </a>
                <a href={profile.social.instagram} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all hover:shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href={profile.social.linkedin} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all hover:shadow-lg">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* About & Expertise Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
            {/* About Column */}
            <div className="w-full lg:w-1/2">
              <h4 className="text-[#6C2BD9] font-bold text-sm uppercase tracking-wider mb-6">{about.badge}</h4>
              <div className="flex flex-col gap-6 text-gray-600 leading-relaxed mb-8">
                {about.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              
              <div className="bg-[#f5f0ff] rounded-2xl p-8 flex gap-6 items-start relative overflow-hidden">
                <div className="text-[#6C2BD9] shrink-0 mt-1">
                  <QuoteIcon />
                </div>
                <p className="text-[#0b132b] font-medium text-lg leading-relaxed italic relative z-10">
                  {about.quote}
                </p>
              </div>
            </div>
            
            {/* Expertise Column */}
            <div className="w-full lg:w-1/2">
              <h4 className="text-[#6C2BD9] font-bold text-sm uppercase tracking-wider mb-6">{expertise.badge}</h4>
              <div className="flex flex-col gap-8 mt-2">
                {expertise.skills.map((skill: any, index: number) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm font-medium text-[#0b132b]">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        className="bg-[#6C2BD9] h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Team Section */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex flex-col gap-2 items-center mb-10">
              <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider">{relatedTeam.badge}</span>
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-12 bg-gray-200"></div>
                <span className="text-[#6C2BD9] text-xl px-2 leading-none -mt-1">✦</span>
                <div className="h-[2px] w-12 bg-gray-200"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full mb-12">
              {relatedTeam.members.map((member: any, index: number) => (
                <motion.div
                  key={index}
                  className="group flex flex-col bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/our-team/${member.slug}`} className="block group">
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#6C2BD9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#6C2BD9] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 px-6 pb-2 flex flex-col items-center text-center">
                      <h4 className="text-[#6C2BD9] font-bold text-sm mb-1">{member.role}</h4>
                      <h3 className="text-[#0b132b] font-bold text-xl group-hover:text-[#6C2BD9] transition-colors">{member.name}</h3>
                    </div>
                  </Link>
                  <div className="pb-6 px-6 flex flex-col items-center text-center">
                    <div className="flex gap-3">
                      <a href={member.social.facebook} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-colors">
                        <Facebook size={16} />
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-colors">
                        <Twitter size={16} />
                      </a>
                      <a href={member.social.instagram} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-colors">
                        <Instagram size={16} />
                      </a>
                      <a href={member.social.linkedin} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-colors">
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href={relatedTeam.buttonLink} className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#6C2BD9] text-[#6C2BD9] font-semibold hover:bg-[#6C2BD9] hover:text-white transition-colors">
              {relatedTeam.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
