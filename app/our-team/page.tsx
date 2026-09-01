import PageBanner from "@/app/components/PageBanner";
import TeamGrid from "@/app/components/TeamGrid";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teams | Occasia Event Management",
  description: "The Creative Minds Behind Every Amazing Event!",
};

export default function OurTeamPage() {
  const { banner } = data.teamPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <TeamGrid />
      </div>
    </div>
  );
}
