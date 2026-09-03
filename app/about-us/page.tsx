import type { Metadata } from "next";

import PageBanner from "@/app/components/PageBanner";
import About from "@/app/components/About";
import MissionVision from "@/app/about-us/MissionVision";
import WhyChooseUs from "@/app/why-choose-us/WhyChooseUs";
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
