import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Occasia",
  description: "Read our privacy policy and learn how we protect your information at Occasia.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
