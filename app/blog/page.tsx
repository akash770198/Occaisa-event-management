import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Occasia",
  description: "Ideas, Inspiration & Insights for your next unforgettable event.",
};

export default function BlogPage() {
  return <BlogClient />;
}
