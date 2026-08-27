import type { Metadata } from "next";

import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import data from "@/data/content.json";

export const metadata: Metadata = {
  title: "About Us | Occasia",
  description:
    "Learn about Occasia — crafting unforgettable events with precision and passion.",
};

export default function AboutPage() {
  const { banner } = data.aboutPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <About />
      <MissionVision />
      <WhyChooseUs />
    </div>
  );
}
