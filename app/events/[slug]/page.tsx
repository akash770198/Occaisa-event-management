import EventDetailClient from "./EventDetailClient";
import data from "@/data/content.json";

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <EventDetailClient slug={resolvedParams.slug} />;
}
