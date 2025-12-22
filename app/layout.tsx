import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/app/components/LenisWrapper";
import Header from "@/app/components/header";
import FooterCTASection from "@/app/components/footer";
import Script from "next/script";
// import WaitlistModal from "./components/ui/WaitlistModal";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ef5a22",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | RabaPay",
    default:
      "RabaPay | The First African Banking App That Speaks Your Language",
  },
  description:
    "RabaPay is the first African banking app that speaks your language, offering fast, secure, and easy money transfers, airtime top-ups, data recharges, POS payments, and digital banking services for individuals and businesses across Nigeria.",
  keywords: [
    "RabaPay",
    "RabaPay fintech app",
    "Send money Nigeria",
    "Airtime top up app",
    "Data recharge Nigeria",
    "Mobile banking app Nigeria",
    "RabaPay business account",
    "POS payment Nigeria",
    "Voice banking app",
    "Secure money transfer Nigeria",
    "Fast payment app Nigeria",
    "Trusted fintech Nigeria",
    "Online wallet Nigeria",
    "Digital banking Nigeria",
  ],
  authors: [{ name: "RabaPay", url: "https://tryraba.com" }],
  robots: "index, follow",
  openGraph: {
    title: "RabaPay",
    description:
      "RabaPay is the first African banking app that speaks your language, offering fast, secure, and easy money transfers, airtime top-ups, data recharges, POS payments, and digital banking services for individuals and businesses across Nigeria.",
    url: "https://tryraba.com",
    siteName: "RabaPay",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tryraba.com/rabapay-og.jpeg",
        width: 1200,
        height: 630,
        alt: "RabaPay Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RabaPay",
    description:
      "RabaPay is the first African banking app that speaks your language, offering fast, secure, and easy money transfers, airtime top-ups, data recharges, POS payments, and digital banking services for individuals and businesses across Nigeria.",
    creator: "",
    images: ["https://tryraba.com/rabapay-og.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/rabapay-og.jpeg",
  },
  metadataBase: new URL("https://tryraba.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <LenisWrapper>
          <Header />

          <main>
            {children}
            {/* <WaitlistModal /> */}
          </main>
          <FooterCTASection />
        </LenisWrapper>
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Raba Pay",
              url: "https://tryraba.com",
              logo: "https://tryraba.com/logo.png",
              sameAs: [
                "https://twitter.com/rabapay",
                "https://facebook.com/rabapay",
                "https://instagram.com/rabapay",
                "https://linkedin.com/company/rabapay",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+2349015759875",
                  contactType: "customer support",
                  email: "support@raba.ng",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
