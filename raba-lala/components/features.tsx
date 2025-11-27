import React from "react";
import { Mic, ArrowRight, Icon } from "lucide-react";

const FEATURES = [
  {
    icon: "sound-wave",
    title: "Speak Neutrally",
    description:
      'Say it the way you talk. "Mehn, send 65,000 to Abba." Your voice is your command',
  },
  {
    icon: "shield-check",
    title: "We Confirm it's you",
    description: "Raba understand your voice and confirm your identity",
  },
  {
    icon: "zap",
    title: "Money move instantly",
    description:
      "Once you speak and confirm, your money moves immediately. Fast, secure.",
  },
];

const USE_CASES = [
  {
    image: "/Rectangle 90.png",
    title: "Bills & Subscriptions",
    description: "Electricity, TV, Internet — done in seconds",
    voiceCommand: "Iddo, pay my IKEYA bill",
    color: "orange",
    Icon: Mic,
    isWave: false,
  },
  {
    image: "/Rectangle 88.png",
    title: "Top UP Airtime / Data",
    description: "stay connected, hassle free.",
    voiceCommand: "Ebit, recharge ₦2000  MTN",
    color: "orange",
    Icon: Mic,
    isWave: false,
  },
  {
    image: "/Onboarding.png",
    title: "Send Money",
    description: "Send money to any bank instantly. No stress.",
    voiceCommand: "Raba send ₦2000 to James",
    color: "orange",
    Icon: "/wave.svg",
    isWave: true,
  },
];

const SoundWaveIcon = () => (
  <div className="flex gap-0.5 items-end h-6">
    {[14, 20, 16, 24, 18, 14, 22].map((height, i) => (
      <div
        key={i}
        className="w-1 bg-orange-500 rounded-full"
        style={{ height: `${height}px` }}
      />
    ))}
  </div>
);

const ShieldCheckIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default function VoiceFeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Banking was built for screens.
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-gray-900">
          We built it for voices
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {FEATURES.map((feature, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="flex justify-center text-orange-500">
              {feature.icon === "sound-wave" && <SoundWaveIcon />}
              {feature.icon === "shield-check" && <ShieldCheckIcon />}
              {feature.icon === "zap" && <ZapIcon />}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-20">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
          Try Raba today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Section Divider */}
      <div className="text-center mb-12">
        <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
          Everyday Money, now
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Do It All With Just Your Voice
        </h3>
      </div>

      {/* Use Cases Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {USE_CASES.map((useCase, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={useCase.image}
                alt={useCase.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-bold text-gray-900">
                {useCase.title}
              </h4>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
  ${
    useCase.isWave
      ? "bg-white"
      : "bg-orange-500 text-white"
  }`}
                >
                  {useCase.Icon === Mic ? (
                    <Mic className="w-4 h-4" />
                  ) : (
                    <SoundWaveIcon />
                  )}
                </div>

                <span className="text-gray-700 font-medium">
                  {useCase.voiceCommand}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
