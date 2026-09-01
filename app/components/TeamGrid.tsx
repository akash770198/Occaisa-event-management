"use client";

import Image from "next/image";
import Link from "next/link";
import data from "../../data/content.json";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const Facebook = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const Twitter = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const Instagram = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
const Linkedin = ({size=16}) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);

export default function TeamGrid() {
  const { team } = data.teamPage;

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-18">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex flex-col gap-2 items-center mb-4">
            <span className="text-[#6C2BD9] font-bold text-sm md:text-base uppercase tracking-wider">{team.badge}</span>
            <div className="flex items-center gap-0">
              <div className="h-[2px] w-12 bg-gray-200"></div>
              <span className="text-[#6C2BD9] text-xl px-2 leading-none -mt-1">✦</span>
              <div className="h-[2px] w-12 bg-gray-200"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0b132b] tracking-tight mb-4 leading-tight whitespace-pre-line">
            {team.titleStart}
            <span className="text-[#6C2BD9]">
              {team.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed whitespace-pre-line">
            {team.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.items.map((member, index) => (
            <motion.div
              key={index}
              className="group flex flex-col bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/our-team/${member.slug}`} className="block group">
                {/* Image */}
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

                {/* Card Body */}
                <div className="pt-6 px-6 pb-2 flex flex-col items-center text-center">
                  <h4 className="text-[#6C2BD9] font-bold text-sm mb-1">{member.role}</h4>
                  <h3 className="text-[#0b132b] font-bold text-xl group-hover:text-[#6C2BD9] transition-colors">{member.name}</h3>
                </div>
              </Link>
              
              <div className="pb-6 px-6 flex flex-col items-center text-center">
                {/* Social Icons */}
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

      </div>
    </section>
  );
}
