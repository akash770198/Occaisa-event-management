import { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap | Occasia",
  description: "Navigate through the Occasia website.",
};

export default function SitemapPage() {
  return <SitemapClient />;
}
