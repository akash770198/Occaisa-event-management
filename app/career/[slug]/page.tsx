import { Metadata } from "next";
import CareerDetailClient from "./CareerDetailClient";

export const metadata: Metadata = {
  title: "Career Detail | Occasia",
  description: "View details and apply for open positions at Occasia.",
};

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <CareerDetailClient slug={resolvedParams.slug} />;
}
