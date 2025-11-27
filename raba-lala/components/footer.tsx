import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "How it works", href: "#" },
      { label: "Legal notice", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of use", href: "#" },
    ],
  },
  {
    title: "Products/Features",
    links: [
      { label: "Virtual cards", href: "#" },
      { label: "Voice Transfers", href: "#" },
      { label: "Airtime & Data Purchase", href: "#" },
      { label: "Subscription & Bill Payments", href: "#" },
      { label: "Merchant Business Wallet", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "User documentation", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Become a Field Agent", href: "#" },
    ],
  },
];

const GooglePlayBadge = () => (
  <a href="#" className="inline-block">
    <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
      <div className="text-left">
        <div className="text-xs">GET IT ON</div>
        <div className="text-sm font-semibold">Google Play</div>
      </div>
    </div>
  </a>
);

export default function FooterCTASection() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                This is our time, Banking By Voice in Our Language
              </h2>
              <p className="text-lg text-white/90">
                Join thousands already sending money, paying bills, and
                recharging — just by speaking.
              </p>
              <button className="flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg">
                <Image
                  src="/image 6.png"
                  alt="Google Play Logo"
                  width={32}
                  height={32}
                />
                <div className="text-left text-sm leading-tight">
                  <span className="text-xs">GET IT ON</span> <br />
                  <span className="font-medium text-base">Google Play</span>
                </div>
              </button>{" "}
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Phone mockups */}
                <div className="relative w-full max-w-md">
                  <Image
                    src="/iphone 15 pro.svg"
                    width={692}
                    height={571}
                    alt="Raba App on Phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 space-y-2">
              {/* Logo */}
              <div>
                <Image
                  src="/rabalogo.png"
                  alt="Raba Logo"
                  width={120}
                  height={40}
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Say it, Send it, Done.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Raba is Nigerian first voice-powered banking experience — built
                to make everyday money moments effortless. Send money, pay
                bills, and top up; all by speaking.
              </p>
              <p className="text-sm text-gray-600">
                Proudly built in Nigeria, for Nigerians.
              </p>
              <div className="mt-4 flex gap-4">
                <button className="flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg">
                  <Image
                    src="/image 6.png"
                    alt="Google Play Logo"
                    width={32}
                    height={32}
                  />
                  <div className="text-left text-sm leading-tight">
                    <span className="text-xs">GET IT ON</span> <br />
                    <span className="font-medium text-base">Google Play</span>
                  </div>
                </button>{" "}
                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {FOOTER_SECTIONS.map((section, index) => (
              <div key={index} className="space-y-2 ">
                <h3 className="font-bold text-gray-900">{section.title}</h3>
                <ul className="space-y-1.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2025 Raba. All rights reserved
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Cookies Policy
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              RabaPay is not a bank. We operate as a Wallet-as-a-Service (WaaS)
              platform, working with licensed financial service partners who
              provide the regulated wallet and payment infrastructure. RabaPay
              is operated by a registered brand collaborator, legally
              incorporated in Nigeria, and licensed in partnership with Providus
              Bank.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
