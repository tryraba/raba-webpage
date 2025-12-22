import type { Metadata } from "next";
import Hero from "@/app/components/hero";
import VoiceFeaturesSection from "@/app/components/features";
import VoiceBankingSection from "./components/voice-banking";
import FastTransaction from "./components/fast-transaction";
import TrustSecuritySection from "./components/trust-security";
import Howitworks from "./components/Howitworks";
import LanguageSelectorSection from "./components/LanguageSelectorSection";
import CoreBenefits from "./components/CoreBenefits";
import ComingSoon from "./components/ComingSoon";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "RabaPay is a fast, secure African fintech app for sending money, paying bills, topping up airtime and data, managing business accounts, and using voice banking for hands-free transactions.",

  keywords: [
    "RabaPay",
    "African fintech app",
    "Send money in Nigeria",
    "Voice banking app",
    "Digital wallet Nigeria",
    "Pay bills online Nigeria",
    "Airtime and data top up",
    "Business banking app Africa",
    "Secure money transfer",
    "Mobile banking Africa",
  ],

  openGraph: {
    title: "RabaPay | Voice-First Digital Banking for Africa",
    description:
      "Send money, pay bills, top up airtime & data, and manage business finances with RabaPay — Africa’s voice-first digital banking app.",
    url: "https://tryraba.com",
    siteName: "RabaPay",
    images: [
      {
        url: "https://tryraba.com/rabapay-og.jpg",
        width: 1200,
        height: 630,
        alt: "RabaPay – Voice-First Digital Banking App",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RabaPay | Voice-First Digital Banking for Africa",
    description:
      "Africa’s voice-first fintech app for fast payments, airtime, data, and business banking.",
    images: ["https://tryraba.com/rabapay-og.jpeg"],
  },

  alternates: {
    canonical: "https://tryraba.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <VoiceBankingSection />
      <FastTransaction />
      <TrustSecuritySection />
      <Howitworks />
      <VoiceFeaturesSection />
      <LanguageSelectorSection />
      <CoreBenefits />
      <ComingSoon />
      <CTASection />
    </>
  );
}
