import PageBanner from "@/app/components/PageBanner";
import AwardsIntro from "@/app/components/AwardsIntro";
import AwardsAchievements from "@/app/components/AwardsAchievements";
import AwardsRecognitions from "@/app/components/AwardsRecognitions";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards | Occasia Event Management",
  description: "Our dedication to delivering extraordinary celebrations has earned us the trust of our clients and recognition from the industry.",
};

export default function AwardsPage() {
  const { banner } = data.awardsPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <AwardsIntro />
        <AwardsAchievements />
        <AwardsRecognitions />
      </div>
    </div>
  );
}
