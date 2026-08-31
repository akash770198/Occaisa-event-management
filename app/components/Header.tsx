"use client";

import Image from "next/image";
import data from "../../data/content.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const { header } = data;
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (!href || href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full sticky top-0 shadow-sm z-50 flex flex-col">
      {/* Full-width backgrounds */}
      <div className="absolute top-0 left-0 right-0 h-8 max-md:h-12 bg-[#1c3e98] -z-10"></div>
      <div className="absolute top-8 max-md:top-12 left-0 right-0 bottom-0 bg-white -z-10"></div>

      {/* Constrained container for all header content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative flex flex-col h-full">

        {/* Top Bar Content */}
        <div className="flex justify-between items-center h-8 text-white text-xs max-md:flex-col max-md:h-12 max-md:py-1 max-md:gap-0.5 max-md:justify-center">
          <div className="uppercase tracking-wider font-medium max-md:text-center max-md:text-[10px]">
            {header.topbar.welcomeText}
          </div>
          <div className="flex items-center gap-6 max-md:gap-4 max-md:text-[10px]">
            <div className="flex items-center gap-2 max-md:gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 max-md:h-3 max-md:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {header.topbar.phone}
            </div>
            <div className="flex items-center gap-2 max-md:gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 max-md:h-3 max-md:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {header.topbar.email}
            </div>
          </div>
        </div>

        {/* Main Navbar Content */}
        <div className="flex items-center py-2 lg:pr-[300px] xl:pr-[340px] max-lg:justify-between w-full">
          {/* Logo */}
          <Link href="/" className="shrink-0 z-10 -ml-[5px]">
            <Image
              src={header.topbar.logo}
              alt="Occasia Logo"
              width={280}
              height={80}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-[#1c3e98]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Nav - shifted a bit right via pl-8 */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8 font-semibold text-[#0b132b] pl-8">
            {header.nav.map((item: any, index: number) => (
              <div key={index} className="relative group h-full flex items-center">
                <Link
                  href={item.href}
                  onClick={(e) => { if (item.href === "#") e.preventDefault(); }}
                  className={`flex items-center gap-1 hover:text-[#00d0e6] transition-colors py-2 ${isActive(item.href) ? "text-[#00d0e6]" : ""}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.subLinks && (
                  <div className="absolute top-[100%] left-0 w-48 bg-white shadow-[0_10px_40px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col overflow-hidden border border-gray-100 transform translate-y-2 group-hover:translate-y-0">
                    {item.subLinks.map((subLink: any, subIdx: number) => (
                      <Link
                        key={subIdx}
                        href={subLink.href}
                        className="px-5 py-3.5 text-sm font-semibold text-[#0b132b] hover:text-[#00d0e6] hover:bg-[#f0f9fa] transition-colors border-b border-gray-50 last:border-0"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-[70] shadow-2xl flex flex-col overflow-y-auto lg:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <Image src={header.topbar.logo} alt="Occasia Logo" width={140} height={40} className="h-10 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-[#1c3e98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col py-6 px-6 gap-2">
                {header.nav.map((item: any, index: number) => (
                  <div key={index} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.subLinks) {
                          e.preventDefault();
                          setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className={`text-lg font-semibold py-3 px-4 rounded-xl flex items-center justify-between transition-colors ${isActive(item.href) ? "bg-[#f0f9fa] text-[#00d0e6]" : "text-[#0b132b] hover:bg-gray-50"
                        }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <motion.svg
                          animate={{ rotate: openMobileDropdown === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                    </Link>
                    <AnimatePresence>
                      {item.subLinks && openMobileDropdown === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col pl-6 mt-1 border-l-2 border-gray-100 ml-4 gap-1 overflow-hidden"
                        >
                          {item.subLinks.map((subLink: any, subIdx: number) => (
                            <Link
                              key={subIdx}
                              href={subLink.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-base font-semibold text-gray-500 hover:text-[#00d0e6] py-2 px-4 rounded-lg hover:bg-gray-50"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-auto p-6 bg-gradient-to-br from-[#f8f9fc] to-[#f0f4f8]">
                <div className="bg-[#1c3e98] rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
                  <div className="text-sm font-medium text-[#00d0e6] mb-1">{header.consultantBox.title}</div>
                  <div className="text-xl font-bold mb-4">{header.consultantBox.phone}</div>
                  <a href={`tel:${header.consultantBox.phone.replace(/[^0-9+]/g, '')}`} className="w-full py-3 bg-[#00d0e6] text-[#0b132b] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
