"use client";

import { useState } from "react";
import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import data from "@/data/content.json";

export default function GalleryClient() {
  const { galleryPage } = data as any;
  const { banner, photoGallery, videoGallery } = galleryPage;

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (items: any[], index: number) => {
    setLightboxItems(items);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === lightboxItems.length - 1 ? 0 : prev + 1));
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? lightboxItems.length - 1 : prev - 1));
  };

  const currentItem = lightboxItems[currentIndex];

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner title={banner.title} image={banner.image} breadcrumbs={banner.breadcrumbs} />
      
      {/* Photo Gallery Section */}
      <section className="py-16 lg:py-20 bg-white flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3">
              {photoGallery.badge}
            </span>
            <div className="flex items-center justify-center gap-0 w-48 mb-6">
              <div className="h-[2px] flex-1 bg-[#6C2BD9]/30"></div>
              <div className="w-2.5 h-2.5 bg-[#6C2BD9] rotate-45 mx-3"></div>
              <div className="h-[2px] flex-1 bg-[#6C2BD9]/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-6">
              {photoGallery.titleStart}
              <span className="text-[#bd00ff]">{photoGallery.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {photoGallery.description}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {photoGallery.images.map((img: any, idx: number) => (
              <div 
                key={idx} 
                className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden group shadow-sm border border-gray-100 cursor-pointer"
                onClick={() => openLightbox(photoGallery.images, idx)}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 lg:py-20 bg-[#f8f9fc] flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3">
              {videoGallery.badge}
            </span>
            <div className="flex items-center justify-center gap-0 w-48 mb-6">
              <div className="h-[2px] flex-1 bg-[#6C2BD9]/30"></div>
              <div className="w-2.5 h-2.5 bg-[#6C2BD9] rotate-45 mx-3"></div>
              <div className="h-[2px] flex-1 bg-[#6C2BD9]/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-6">
              {videoGallery.titleStart}
              <span className="text-[#bd00ff]">{videoGallery.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {videoGallery.description}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {videoGallery.videos.map((vid: any, idx: number) => (
              <div 
                key={idx} 
                className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden group shadow-sm border border-gray-100 cursor-pointer"
                onClick={() => openLightbox(videoGallery.videos, idx)}
              >
                <Image 
                  src={vid.thumbnail} 
                  alt={vid.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-[1.5px] border-white flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <button className="flex items-center gap-3 border-[1.5px] border-[#6C2BD9] text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all duration-300 px-8 py-3.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md">
              {videoGallery.buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            onClick={showPrev}
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Main Content */}
          <div 
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={currentItem.src || currentItem.thumbnail} 
              alt={currentItem.alt} 
              fill 
              className="object-contain" 
            />
            
            {/* If it's a video, show the play button in lightbox too */}
            {currentItem.thumbnail && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

            {/* Counter/Title positioned over the image */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-white font-medium z-10 pointer-events-none">
              <p className="text-xl mb-1 text-white drop-shadow-md">{currentItem.alt}</p>
              <p className="text-sm text-gray-300">{currentIndex + 1} / {lightboxItems.length}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            onClick={showNext}
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      )}
    </div>
  );
}
