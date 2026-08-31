import PageBanner from "@/app/components/PageBanner";
import StoryPurpose from "@/app/components/StoryPurpose";
import StoryJourney from "@/app/components/StoryJourney";
import StoryValuesBar from "@/app/components/StoryValuesBar";
import StoryPhilosophy from "@/app/components/StoryPhilosophy";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Occasia Event Management",
  description: "From a simple idea to a trusted event partner — our journey has been about turning dreams into extraordinary celebrations.",
};

export default function StoryPage() {
  const { banner } = data.storyPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <StoryPurpose />
        <StoryJourney />
        <StoryValuesBar />
        <StoryPhilosophy />
      </div>
    </div>
  );
}
