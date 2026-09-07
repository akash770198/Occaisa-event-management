import EventDetailClient from "./EventDetailClient";
import { site as data } from "@/data";

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <EventDetailClient slug={resolvedParams.slug} />;
}
