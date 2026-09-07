import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#05001a] flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bd00ff] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6C2BD9] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#360866] to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-18 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          
          {/* Left Side: 404 Graphic */}
          <div className="relative">
            <div className="relative flex items-end justify-center">
              {/* The "4"s */}
              <div className="text-[180px] md:text-[240px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#b575ff] to-[#4c0d8f] drop-shadow-[0_0_30px_rgba(181,117,255,0.3)] select-none">
                4
              </div>
              
              {/* The "0" Archway */}
              <div className="relative mx-4 flex flex-col items-center justify-end w-32 md:w-48 h-[160px] md:h-[220px] bg-gradient-to-b from-[#b575ff] to-[#2a0459] rounded-t-full shadow-[0_0_50px_rgba(181,117,255,0.4)] overflow-hidden">
                {/* Glowing Doorway */}
                <div className="w-16 md:w-24 h-24 md:h-36 bg-[#ffdbfc] rounded-t-full mt-auto shadow-[0_0_40px_#ffdbfc,inset_0_0_20px_#bd00ff] flex flex-col items-center justify-end">
                  {/* Stairs inside doorway */}
                  <div className="w-full h-1 bg-[#d996ff] mt-1"></div>
                  <div className="w-[85%] h-1 bg-[#d996ff] mt-1"></div>
                  <div className="w-[70%] h-1 bg-[#d996ff] mt-1"></div>
                  <div className="w-[55%] h-1 bg-[#d996ff] mt-1"></div>
                  <div className="w-[40%] h-1 bg-[#d996ff] mt-1"></div>
                  <div className="w-[25%] h-1 bg-[#d996ff] mt-1 mb-2"></div>
                </div>
                {/* Stars/Sparkles around */}
                <Sparkles className="absolute top-8 left-6 w-4 h-4 text-white opacity-60" />
                <Sparkles className="absolute top-12 right-8 w-3 h-3 text-[#ffdbfc] opacity-80" />
              </div>

              {/* The "4" */}
              <div className="text-[180px] md:text-[240px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#b575ff] to-[#4c0d8f] drop-shadow-[0_0_30px_rgba(181,117,255,0.3)] select-none">
                4
              </div>
            </div>
            
            {/* Ground / Stairs extending out */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
               <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#b575ff] to-transparent shadow-[0_0_10px_#b575ff]"></div>
               <div className="w-5/6 h-[2px] bg-gradient-to-r from-transparent via-[#b575ff] to-transparent shadow-[0_0_10px_#b575ff] mt-2"></div>
               <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#b575ff] to-transparent shadow-[0_0_10px_#b575ff] mt-2"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
            <div className="flex items-center gap-4 text-[#b575ff] font-bold text-sm uppercase tracking-widest mb-8">
              <div className="h-[1px] w-8 bg-[#b575ff]"></div>
              <span>Oops! Page Not Found</span>
              <div className="h-[1px] w-8 bg-[#b575ff]"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Looks like you're <br className="hidden md:block" />
              off the <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#ff7eb3] to-[#ff758c] font-normal tracking-normal">Guest List!</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              The page you are looking for doesn't exist or has been moved. Let's get you back to something amazing.
            </p>

            <Link 
              href="/"
              className="inline-flex items-center gap-3 border border-[#b575ff] text-[#b575ff] hover:bg-[#b575ff] hover:text-[#05001a] transition-all duration-300 px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(181,117,255,0.2)] hover:shadow-[0_0_30px_rgba(181,117,255,0.5)] group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
