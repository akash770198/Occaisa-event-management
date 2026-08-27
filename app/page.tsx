import Image from "next/image";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Team />
      <Blog />
    </div>
  );
}
