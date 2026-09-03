import PageBanner from "@/app/components/PageBanner";
import VisionPurpose from "@/app/vision/VisionPurpose";
import VisionValues from "@/app/vision/VisionValues";
import VisionCommitment from "@/app/vision/VisionCommitment";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision | Occasia Event Management",
  description: "At Occasia, our vision is to be the most trusted and innovative event partner.",
};

export default function VisionPage() {
  const { banner } = data.visionPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <VisionPurpose />
        <VisionValues />
        <VisionCommitment />
      </div>
    </div>
  );
}
