"use client";

import Image from "next/image";
import Link from "next/link";
import { site, EventsTeamData, SectionProps } from "@/data";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Team({ data, className }: SectionProps<EventsTeamData> = {}) {
  const team = data || site.team;

  return (
    <section className="py-20 lg:py-24 bg-[#0b041a] relative overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Banner/event_banner.svg"
          alt="Team Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0b041a]/90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-18">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-[#9d4edd] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
            <span>✦ {team.badge} ✦</span>
            <div className="h-[1px] w-12 bg-[#9d4edd]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight whitespace-pre-line">
            {team.titleStart}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d0e6] to-[#9d4edd]">
              {team.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed whitespace-pre-line">
            {team.description}
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.items.map((member: any, index: number) => {
            const memberSlug = member.slug || member.name.toLowerCase().replace(/\s+/g, "-");
            const memberUrl = `/our-team/${memberSlug}`;

            return (
              <motion.div
                key={index}
                className="relative rounded-2xl border border-[#360866]/80 bg-[#0b041a] overflow-hidden group hover:border-[#9d4edd]/60 hover:shadow-[0_10px_30px_rgba(157,78,221,0.2)] transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Full card clickable link */}
                <Link
                  href={memberUrl}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${member.name}'s profile`}
                >
                  <span className="sr-only">View {member.name}&apos;s profile</span>
                </Link>

                {/* Floating detail arrow on hover */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#9d4edd] group-hover:border-[#9d4edd] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Image Area */}
                <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full max-md:h-[350px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient to fade into card background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b041a] via-[#0b041a]/40 to-transparent"></div>
                </div>

                {/* Text & Social Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col items-center text-center pointer-events-none">
                  <h4 className="text-[#9d4edd] text-sm md:text-base font-semibold mb-2">
                    {member.role}
                  </h4>
                  <h3 className="text-white text-2xl font-bold mb-6 group-hover:text-[#00d0e6] transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Social Icons */}
                  <div
                    className="relative z-20 flex gap-4 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={member.social.facebook} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </a>
                    <a href={member.social.instagram} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Team Members Button */}
        <motion.div
          className="mt-12 lg:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={team.viewAllLink || "/our-team"}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-[#9d4edd] text-white font-semibold hover:bg-[#9d4edd] transition-all duration-300 group shadow-[0_0_20px_rgba(157,78,221,0.25)] hover:shadow-[0_0_30px_rgba(157,78,221,0.5)]"
          >
            <span>{team.viewAllText || "View All Team Members"}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
