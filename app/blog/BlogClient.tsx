"use client";

import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import { motion } from "framer-motion";

export default function BlogClient() {
  const { blogPage } = data;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={blogPage.banner.title} 
        image={blogPage.banner.image} 
        breadcrumbs={blogPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#6C2BD9] font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
              {blogPage.header.badge}
              <div className="h-[2px] w-12 bg-[#6C2BD9]/30"></div>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b132b] tracking-tight mb-4">
              {blogPage.header.titleStart} <span className="text-[#bd00ff]">{blogPage.header.titleHighlight}</span>
            </h2>
            <p className="text-[#555] max-w-2xl text-lg">
              {blogPage.header.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column - Main Posts */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {blogPage.mainPosts.map((post: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden relative">
                          <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <svg className="w-4 h-4 text-[#bd00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0b132b] mb-4 hover:text-[#bd00ff] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link href={post.href} className="inline-flex items-center gap-2 text-[#6C2BD9] font-bold hover:text-[#bd00ff] transition-colors self-start text-sm uppercase tracking-wide">
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm">&lt;</button>
                <button className="w-10 h-10 rounded-lg bg-[#bd00ff] text-white font-bold shadow-md shadow-purple-500/30 flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-medium hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm">2</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-medium hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm">3</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-medium hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm">4</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#bd00ff] hover:text-[#bd00ff] transition-colors bg-white shadow-sm">&gt;</button>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Popular Posts */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0b132b] mb-6 relative">
                  Popular Posts
                  <div className="absolute -bottom-3 left-0 w-8 h-1 bg-[#bd00ff] rounded-full"></div>
                </h3>
                
                <div className="flex flex-col gap-6 mt-8">
                  {blogPage.sidebar.popularPosts.map((post: any, idx: number) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[15px] font-bold text-[#0b132b] leading-tight mb-2 group-hover:text-[#bd00ff] transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#120a30] rounded-2xl p-8 shadow-xl text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#bd00ff] opacity-20 blur-[50px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6C2BD9] opacity-20 blur-[40px] rounded-full"></div>
                
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm relative z-10">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 relative z-10">{blogPage.sidebar.newsletter.title}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed relative z-10">{blogPage.sidebar.newsletter.subtitle}</p>
                
                <div className="flex flex-col gap-3 relative z-10">
                  <input 
                    type="email" 
                    placeholder={blogPage.sidebar.newsletter.placeholder} 
                    className="w-full bg-white text-gray-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#bd00ff] text-sm"
                  />
                  <button className="w-full bg-gradient-to-r from-[#6C2BD9] to-[#bd00ff] text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-[#bd00ff]/30 transition-all text-sm">
                    {blogPage.sidebar.newsletter.buttonText} &rarr;
                  </button>
                </div>
              </motion.div>

              {/* Contact Help */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-[#f0e6ff] flex items-center justify-center mb-5 text-[#bd00ff]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0b132b] mb-3 whitespace-pre-line">
                  {blogPage.sidebar.contact.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {blogPage.sidebar.contact.subtitle}
                </p>
                
                <Link href={blogPage.sidebar.contact.href} className="w-full py-3 rounded-lg border-2 border-[#e6ccff] text-[#6C2BD9] font-bold hover:bg-[#bd00ff] hover:border-[#bd00ff] hover:text-white transition-all flex items-center justify-center gap-2">
                  {blogPage.sidebar.contact.buttonText} &rarr;
                </Link>
              </motion.div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
