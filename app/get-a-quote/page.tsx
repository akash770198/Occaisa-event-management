import { Metadata } from "next";
import GetQuoteClient from "./GetQuoteClient";

export const metadata: Metadata = {
  title: "Get A Quote | Occasia",
  description: "Request a quote and let us plan your perfect event.",
};

export default function GetQuotePage() {
  return <GetQuoteClient />;
}
