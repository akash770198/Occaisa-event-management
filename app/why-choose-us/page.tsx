import PageBanner from "@/app/components/PageBanner";
import WhyChooseUs from "@/app/why-choose-us/WhyChooseUs";
import { site as data } from "@/data";
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
