import PageBanner from "@/app/components/PageBanner";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Occasia Event Management",
  description: "Why choose Occasia for your event planning needs.",
};

export default function WhyChooseUsPage() {
  const { banner } = data.whyChooseUsPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <WhyChooseUs />
      </div>
    </div>
  );
}
