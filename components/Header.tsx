"use client";

import Image from "next/image";
import data from "../data/content.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const { header } = data;
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!href || href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full sticky top-0 shadow-sm z-50 flex flex-col">
      {/* Full-width backgrounds */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#1c3e98] -z-10"></div>
      <div className="absolute top-8 left-0 right-0 bottom-0 bg-white -z-10"></div>

      {/* Constrained container for all header content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative flex flex-col h-full">

        {/* Top Bar Content */}
        <div className="flex justify-between items-center h-8 text-white text-xs">
          <div className="uppercase tracking-wider font-medium">
            {header.topbar.welcomeText}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {header.topbar.phone}
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {header.topbar.email}
            </div>
          </div>
        </div>

        {/* Main Navbar Content */}
        <div className="flex items-center py-2 lg:pr-[300px] xl:pr-[340px]">
          {/* Logo */}
          <Link href="/" className="shrink-0 z-10">
            <Image
              src="/Occasia_logo.svg"
              alt="Occasia Logo"
              width={280}
              height={80}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav - shifted a bit right via pl-8 */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8 font-semibold text-[#0b132b] pl-8">
            {header.nav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-1 hover:text-[#00d0e6] transition-colors ${isActive(item.href) ? "text-[#00d0e6]" : ""}`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Overlapping Cyan Consultant Box - Aligned to right padding */}
        <div className="hidden lg:flex absolute top-8 right-6 md:right-12 lg:right-18 h-[100px] xl:h-[110px] w-[260px] xl:w-[300px] z-20 overflow-hidden">
          <motion.div 
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
            className="w-full h-full bg-[#00d0e6] text-white flex-col items-center justify-center shadow-lg flex"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center border-opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">{header.consultantBox.title}</div>
                <div className="text-xl font-bold">{header.consultantBox.phone}</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </header>
  );
}
