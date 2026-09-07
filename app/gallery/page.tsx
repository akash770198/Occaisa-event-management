import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Occasia Event Management",
  description: "Explore our beautiful event photos and videos.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
