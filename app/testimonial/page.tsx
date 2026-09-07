import { Metadata } from "next";
import TestimonialClient from "./TestimonialClient";

export const metadata: Metadata = {
  title: "Testimonials | Occasia",
  description: "Read what our clients say about their experience with Occasia.",
};

export default function TestimonialPage() {
  return <TestimonialClient />;
}
