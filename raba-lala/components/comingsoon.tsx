"use client";
import React, { useState } from "react";
import { Mic } from "lucide-react";
import Image from "next/image";

const LANGUAGES = [
  { id: "hausa", label: "Hausa", text: "Raba, aika N5,000 ga Aisha." },
  { id: "igbo", label: "Igbo", text: "Raba, ziga N5,000 nye Aisha." },
  { id: "yoruba", label: "Yoruba", text: "Raba, fi N5,000 ranṣẹ si Aisha." },
  { id: "pidgin", label: "Pidgin", text: "Raba, send N5,000 give Aisha." },
];

const SECURITY_FEATURES = [
  {
    icon: "voice",
    title: "One Voice, One phone",
    description: "Your unique voice signature keeps your account secure.",
  },
  {
    icon: "/lock.svg",
    title: "Voice PIN Security",
    description: "Set up your secure voice PIN to keep your account safe",
  },
  {
    icon: "/files.svg",
    title: "Licensed & Protected",
    description: "Your unique voice signature keeps your account secure.",
  },
];

const VoiceIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const LockIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SoundWave = () => (
  <div className="flex gap-1 items-center justify-center">
    {[12, 18, 14, 22, 16, 12, 20, 14, 18, 12].map((height, i) => (
      <div
        key={i}
        className="w-1 bg-orange-500 rounded-full animate-pulse"
        style={{
          height: `${height}px`,
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
  </div>
);

export default function LanguageSelectorSection() {
  const [selectedLanguage, setSelectedLanguage] = useState("hausa");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageChange = (languageId: string  ) => {
    if (languageId === selectedLanguage) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSelectedLanguage(languageId);
      setIsAnimating(false);
    }, 300);
  };

  const currentLanguage = LANGUAGES.find(
    (lang) => lang.id === selectedLanguage
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mic className="w-5 h-5 text-orange-500" />
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
            SPEAK MONEY YOUR WAY
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Bank in <span className="text-orange-500">Your Own Language</span>.
        </h2>
      </div>

      {/* Language Selector */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {LANGUAGES.map((language) => (
          <button
            key={language.id}
            onClick={() => handleLanguageChange(language.id)}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              selectedLanguage === language.id
                ? "bg-orange-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border border-gray-300 hover:border-orange-500 hover:text-orange-500"
            }`}
          >
            {language.label}
          </button>
        ))}
      </div>

      {/* Voice Command Display */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-white rounded-2xl  p-8 text-center overflow-hidden">
          <div
            className={`transition-all duration-300 ${
              isAnimating
                ? "opacity-0 translate-x-full"
                : "opacity-100 translate-x-0"
            }`}
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              &quot;{currentLanguage?.text}&quot;
            </p>
            <SoundWave />
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Your Money. Your Voice.{" "}
          <span className="text-orange-500">Protected</span>
        </h3>
      </div>

      {/* Security Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {SECURITY_FEATURES.map((feature, index) => (
          <div
            key={index}
            className="text-center space-y-5 border rounded-2xl py-5"
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                {feature.icon === "voice" ? (
                  <VoiceIcon />
                ) : (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                )}
              </div>
            </div>
            <h4 className="text-xl text-start ml-5 font-bold text-gray-900">{feature.title}</h4>
            <p className="text-gray-500  text-start ml-5 text-sm leading-relaxed max-w-xs mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-12 space-y-6">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              Coming Soon
            </span>
            <h3 className="text-3xl font-bold text-gray-900">
              Raba For Business is Coming to You. <br /> Get Notify When We
              Launched
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For shop, for salon, and merchants everywhere . Accept payment
              with just your voice . No POS, No Stress
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 pr-28 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Waitlist{" "}
              </button>
            </div>
          </div>
          <div className="h-full">
            <Image
              src="/Rectangle 99.svg"
              alt="Business owner"
              className="w-full h-full object-cover"
              width={535}
              height={440}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scaleY(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.2);
          }
        }
      `}</style>
    </section>
  );
}
