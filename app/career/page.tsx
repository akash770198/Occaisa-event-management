import { Metadata } from "next";
import CareerClient from "./CareerClient";

export const metadata: Metadata = {
  title: "Career | Occasia",
  description: "Join our passionate team and be a part of something extraordinary.",
};

export default function CareerPage() {
  return <CareerClient />;
}
