import PageBanner from "@/app/components/PageBanner";
import ServicesGrid from "./ServicesGrid";
import data from "@/data/content.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Occasia Event Management",
  description: "Providing quality services for all your event needs.",
};

export default function ServicesPage() {
  const { banner } = data.servicesPage;

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title={banner.title}
        image={banner.image}
        breadcrumbs={banner.breadcrumbs}
      />
      <div className="overflow-hidden">
        <ServicesGrid />
      </div>
    </div>
  );
}
