import Footer from "@/app/components/Footer";
import PageBanner from "@/app/components/PageBanner";
import MissionPurpose from "@/app/mission/MissionPurpose";
import MissionValues from "@/app/mission/MissionValues";
import MissionCommitment from "@/app/mission/MissionCommitment";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | Occasia Event Management",
  description: "At Occasia, our mission is to transform your vision into extraordinary celebrations.",
};

export default function MissionPage() {
  const { banner } = data.missionPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <MissionPurpose />
        <MissionValues />
        <MissionCommitment />
      </div>
    </div>
  );
}
