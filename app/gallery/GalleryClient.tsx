"use client";

import { useState, useRef } from "react";
import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { site, SectionProps, EventsGalleryPageData } from "@/data";

interface VideoCardProps {
  vid: {
    thumbnail?: string;
    videoUrl?: string;
    alt?: string;
  };
  onClick: () => void;
}

function VideoCard({ vid, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const isVideo = vid.thumbnail?.endsWith(".mp4") || vid.videoUrl?.endsWith(".mp4");
  const videoSrc = vid.thumbnail?.endsWith(".mp4") ? vid.thumbnail : vid.videoUrl;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Play request interrupted by pause or blocked by browser
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative h-64 md:h-72 w-full rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-gray-100 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6C2BD9]/25 hover:border-[#6C2BD9]/40 hover:ring-2 hover:ring-[#6C2BD9]/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          className="object-cover w-full h-full pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        vid.thumbnail && (
          <Image
            src={vid.thumbnail}
            alt={vid.alt || "Video thumbnail"}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )
      )}

      {/* Dynamic Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${
          isHovered ? "bg-black/15" : "bg-black/35"
        }`}
      />

      {/* Center Play Button Overlay - Fades and scales smoothly on hover when preview starts */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-16 h-16 rounded-full border-[1.5px] border-white/90 bg-white/15 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 ease-out shadow-lg ${
            isHovered
              ? "opacity-0 scale-75"
              : "opacity-100 scale-100 group-hover:scale-110 group-hover:bg-white/25"
          }`}
        >
          <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Video Details & Status Badge at bottom */}
      {vid.alt && (
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-center justify-between text-white pointer-events-none transition-opacity duration-300">
          <span className="font-semibold text-sm md:text-base drop-shadow-sm truncate pr-2">
            {vid.alt}
          </span>
          <span
            className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/20 shadow-sm shrink-0 transition-all duration-300 ${
              isHovered
                ? "bg-[#6C2BD9] text-white shadow-[#6C2BD9]/50"
                : "bg-black/40 backdrop-blur-sm text-gray-200"
            }`}
          >
            {isHovered ? "Playing" : "Video"}
          </span>
        </div>
      )}
    </div>
  );
}

export default function GalleryClient({ data, className }: SectionProps<EventsGalleryPageData> = {}) {
  const galleryPage = data || site.galleryPage;
  const { banner, photoGallery, videoGallery } = galleryPage;

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pagination State
  const [visibleImages, setVisibleImages] = useState(9);
  const [visibleVideos, setVisibleVideos] = useState(9);

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
            {photoGallery.images.slice(0, visibleImages).map((img: any, idx: number) => (
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

          {/* View More Button for Images */}
          {visibleImages < photoGallery.images.length && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setVisibleImages(prev => prev + 9)}
                className="flex items-center gap-3 border-[1.5px] border-[#6C2BD9] text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all duration-300 px-8 py-3.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md"
              >
                {(photoGallery as any).buttonText || "View More"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

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
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${visibleVideos < videoGallery.videos.length ? 'mb-14' : ''}`}>
            {videoGallery.videos.slice(0, visibleVideos).map((vid: any, idx: number) => (
              <VideoCard
                key={idx}
                vid={vid}
                onClick={() => openLightbox(videoGallery.videos, idx)}
              />
            ))}
          </div>

          {/* View More Button */}
          {visibleVideos < videoGallery.videos.length && (
            <div className="flex justify-center">
              <button 
                onClick={() => setVisibleVideos(prev => prev + 9)}
                className="flex items-center gap-3 border-[1.5px] border-[#6C2BD9] text-[#6C2BD9] hover:bg-[#6C2BD9] hover:text-white transition-all duration-300 px-8 py-3.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md"
              >
                {videoGallery.buttonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

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
            {((currentItem.src || currentItem.thumbnail || "").endsWith(".mp4") || (currentItem.videoUrl || "").endsWith(".mp4")) ? (
              <video 
                src={currentItem.videoUrl && currentItem.videoUrl !== "#" ? currentItem.videoUrl : (currentItem.src || currentItem.thumbnail)} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <>
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
              </>
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
