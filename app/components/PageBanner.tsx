"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

type Breadcrumb = {
  label: string;
  href: string;
};

type PageBannerProps = {
  title: string;
  image: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageBanner({ title, image, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#05001a]/55"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative h-full flex flex-col justify-center">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>

        <motion.nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-white/90 text-sm md:text-base font-medium"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={crumb.label} className="flex items-center gap-2">
                {index === 0 && <Home className="w-4 h-4" />}
                {isLast ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#00d0e6] transition-colors">
                    {crumb.label}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-4 h-4 text-white/70" />}
              </span>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
}
