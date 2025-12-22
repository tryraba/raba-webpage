import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import WhyRabapay from "./components/WhyRabapay";
import MissionVisionSection from "./components/MissionVisionSection";
import RabaFoundation from "./components/RabaFoundation";
import AboutCTASection from "./components/AboutCTASection";
import Teams from "./components/teams";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Raba Pay — Africa’s voice-first digital banking app. Discover our mission, vision, and commitment to empowering customers with fast, secure, and convenient financial services.",
  keywords: [
    "Raba Pay",
    "About Raba Pay",
    "African fintech app",
    "Voice banking Africa",
    "Digital banking app Nigeria",
    "Financial services Africa",
    "Secure money transfer",
    "Business banking Africa",
  ],
  openGraph: {
    title: "About Raba Pay | Africa’s Voice-First Digital Banking App",
    description:
      "Discover Raba Pay’s mission, vision, and dedication to providing fast, secure, and innovative financial solutions for individuals and businesses in Africa.",
    url: "https://tryraba.com/about",
    siteName: "Raba Pay",
    images: [
      {
        url: "https://tryraba.com/og/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Raba Pay About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Raba Pay | Africa’s Voice-First Digital Banking App",
    description:
      "Learn about Raba Pay’s mission and vision. Fast, secure, and innovative financial services for Africa.",
    images: ["https://tryraba.com/og/about-og.jpg"],
  },
  alternates: {
    canonical: "https://tryraba.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyRabapay />
      <MissionVisionSection />
      <RabaFoundation />
      <Teams />
      <AboutCTASection />
    </>
  );
}
