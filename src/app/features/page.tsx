import type { Metadata } from "next";
import CapabilitiesPage from "@/app/capabilities/page";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Legacy route for capabilities.",
};

export default function FeaturesPage() {
  return <CapabilitiesPage />;
}
