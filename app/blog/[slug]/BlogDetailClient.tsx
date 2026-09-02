"use client";

import PageBanner from "@/app/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/content.json";
import { motion } from "framer-motion";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const { blogPage, blogDetailPage } = data;
  const post = blogDetailPage.post;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      {/* Banner Section */}
      <PageBanner 
        title={blogDetailPage.banner.title} 
        image={blogDetailPage.banner.image} 
        breadcrumbs={blogDetailPage.banner.breadcrumbs} 
      />
      
      {/* Main Content Section */}
      <section className="py-16 lg:py-24 flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-18">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column - Sidebar */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-8">
              
              {/* Popular Posts */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
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
                  {blogPage.sidebar.popularPosts.map((p: any, idx: number) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 rounded-lg overflow-hidden relative flex-shrink-0">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[15px] font-bold text-[#0b132b] leading-tight mb-2 group-hover:text-[#bd00ff] transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">{p.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
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
                initial={{ opacity: 0, x: -20 }}
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

            {/* Right Column - Main Post Content */}
            <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-[#0b132b] mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {post.intro}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-[#f0e6ff]">
                      <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-[#0b132b]">{post.author.name}</span>
                      <span className="text-xs text-gray-500 font-medium">{post.author.designation}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-[#bd00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                </div>
                
                {/* Main Image */}
                <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden mb-10 shadow-sm">
                  <Image src={post.mainImage} alt={post.title} fill className="object-cover" />
                </div>
                
                {/* Content Sections 1-3 */}
                <div className="flex flex-col gap-8 mb-10">
                  {post.sections.map((section: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-[#0b132b] mb-3">{section.heading}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* Inline Gallery */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {post.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                      <Image src={img} alt="Gallery" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                
                {/* Content Sections 4-5 */}
                <div className="flex flex-col gap-8 mb-10">
                  {post.moreSections.map((section: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-[#0b132b] mb-3">{section.heading}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* Blockquote */}
                <div className="bg-[#fcf8ff] rounded-xl p-8 mb-10 border border-[#f0e6ff] flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#e6ccff] rounded-xl flex items-center justify-center text-[#bd00ff]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-[#0b132b] font-medium text-lg leading-relaxed italic">
                    {post.quote}
                  </p>
                </div>
                
                {/* Conclusion */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-[#0b132b] mb-3">{post.conclusion.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{post.conclusion.content}</p>
                </div>

              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
