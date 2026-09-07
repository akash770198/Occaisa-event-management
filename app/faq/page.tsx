import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Occasia",
  description: "Frequently Asked Questions about our event planning services.",
};

export default function FaqPage() {
  return <FaqClient />;
}
