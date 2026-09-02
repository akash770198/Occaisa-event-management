import { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const metadata: Metadata = {
  title: "Our Partners | Occasia",
  description: "Proud to collaborate with incredible partners.",
};

export default function PartnersPage() {
  return <PartnersClient />;
}
