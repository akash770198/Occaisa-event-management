"use client";

import Image from "next/image";
import Link from "next/link";
import data from "../data/content.json";
import { MapPin, Phone, Mail, ChevronRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const { footer } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05001a] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Abstract wave background in top right */}
      <div className="absolute top-0 right-0 w-1/3 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7209b7]">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,50 Q100,100 200,50 T400,50" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,80 Q100,130 200,80 T400,80" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,110 Q100,160 200,110 T400,110" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,140 Q100,190 200,140 T400,140" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,170 Q100,220 200,170 T400,170" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,200 Q100,250 200,200 T400,200" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,230 Q100,280 200,230 T400,230" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative z-10">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: About */}
          <div className="w-full lg:w-1/4 xl:w-1/3 pr-0 lg:pr-8 flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/Occasia_logo.svg" 
                alt="Occasia Logo" 
                width={280} 
                height={80} 
                className="h-16 md:h-20 w-auto brightness-0 invert"
              />
            </Link>
            
            <h3 className="text-xl font-bold mb-6 leading-snug whitespace-pre-line">
              {footer.about.titleStart}
              <span className="text-[#9d4edd]">{footer.about.titleHighlight}</span>
            </h3>
            
            {/* Divider with star */}
            <div className="flex items-center gap-0 mb-6">
              <div className="h-[1px] w-16 bg-[#360866]"></div>
              <span className="text-[#9d4edd] text-xs">✦</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              {footer.about.description}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href={footer.social.facebook} className="w-10 h-10 rounded-full border border-[#360866] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={footer.social.twitter} className="w-10 h-10 rounded-full border border-[#360866] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href={footer.social.instagram} className="w-10 h-10 rounded-full border border-[#360866] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={footer.social.linkedin} className="w-10 h-10 rounded-full border border-[#360866] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={footer.social.youtube} className="w-10 h-10 rounded-full border border-[#360866] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-[#360866] to-transparent mx-2 xl:mx-4"></div>

          {/* Links Columns */}
          <div className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footer.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-white font-bold mb-2 tracking-wider">{col.title}</h4>
                <div className="h-[2px] w-8 bg-[#9d4edd] mb-6"></div>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                        <ChevronRight className="w-3 h-3 text-[#9d4edd] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#1c1635] mb-10"></div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 relative">
          
          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full border border-[#360866] flex items-center justify-center text-[#9d4edd]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold mb-1">{footer.contact.location.title}</h5>
              <p className="text-gray-400 text-sm whitespace-pre-line">{footer.contact.location.text}</p>
            </div>
          </div>
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block w-[1px] h-full bg-[#1c1635] mx-auto absolute left-1/3"></div>

          {/* Phone */}
          <div className="flex items-center gap-4 md:justify-center">
            <div className="shrink-0 w-12 h-12 rounded-full border border-[#360866] flex items-center justify-center text-[#9d4edd]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold mb-1">{footer.contact.phone.title}</h5>
              <p className="text-gray-400 text-sm">{footer.contact.phone.text}</p>
            </div>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block w-[1px] h-full bg-[#1c1635] mx-auto absolute left-2/3"></div>

          {/* Email */}
          <div className="flex items-center gap-4 md:justify-end">
            <div className="shrink-0 w-12 h-12 rounded-full border border-[#360866] flex items-center justify-center text-[#9d4edd]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold mb-1">{footer.contact.email.title}</h5>
              <p className="text-gray-400 text-sm">{footer.contact.email.text}</p>
            </div>
          </div>

        </div>

        <div className="h-[1px] w-full bg-[#1c1635] mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-gray-400 text-sm">
            {footer.bottom.copyright}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-400 text-sm">
            {footer.bottom.links.map((link, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
                {idx < footer.bottom.links.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#360866] flex items-center justify-center text-white hover:bg-[#9d4edd] hover:border-[#9d4edd] transition-colors shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          
        </div>

      </div>
    </footer>
  );
}
