"use client";
import React from "react";
import Image from "next/image";
import { Container } from "./container";

const Content = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-blue-50 ">
      {/* Hero Section */}
      <Container as="section" className="py-16 text-center">
        <p className="text-orange-500 font-medium mb-2 tracking-wide">
          Real voices. Real moments.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Banking, the way we actually live.
        </h1>
      </Container>

      {/* Voice Banking Section */}
      <Container as="section" className="py-12">
        <div className="rounded-3xl overflow-visible">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Voice Banking
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                I sent rent in Hausa, no typing
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Send money using just your voice, in any language you speak.
                Raba understands you, no typing, no stress. Just say it and your
                rent is paid instantly.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Open an account
              </button>
            </div>

            <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
              {/* Hausa text bubble - positioned to overlap border */}
              <div className="absolute top-4 sm:top-12 left-0 sm:-left-8 bg-white rounded-full px-3 sm:px-5 py-2 sm:py-3  flex items-center gap-2 sm:gap-3 z-20">
                <div className=" relative w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center  text-xs sm:text-sm">
                  <Image
                    src="/microphone.svg"
                    alt="Microphone Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-800 ">
                  Raba, turo min kudin haya
                </span>
              </div>

              {/* Sound wave visualization - positioned on the border */}
              <div className="absolute top-[140px] left-[60px] sm:top-28 sm:left-10 md:left-20 lg:left-32 rounded-lg px-3 py-2 z-20">
                <div className="flex gap-1 items-end">
                  {[18, 28, 22, 32, 26, 20, 30, 24, 28, 20, 26, 22].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-orange-500 rounded-full"
                        style={{
                          height: `${height * 0.7}px`,
                          animation: `pulse 1s ease-in-out ${
                            i * 0.1
                          }s infinite`,
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Rounded border container with gradient background */}
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] h-[280px] sm:h-[350px] md:h-[400px] rounded-[60px] sm:rounded-[80px] md:rounded-[100px] bg-linear-to-br from-orange-50 via-orange-100 to-yellow-50 overflow-hidden">
                <Image
                  src="/Raba woman.svg"
                  alt="Woman using voice banking"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              transform: scaleY(0.7);
            }
            50% {
              transform: scaleY(1);
            }
          }
        `}</style>
      </Container>

      {/* Fast Transaction Section */}
      <Container as="section" className="py-12">
        <div className="rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] h-[280px] sm:h-[350px] md:h-[400px] rounded-[60px] sm:rounded-[80px] md:rounded-[100px] bg-linear-to-br from-orange-50 via-orange-100 to-yellow-50 overflow-hidden">
                <Image
                  src="/iphone 17.svg"
                  alt="Phone showing fast transaction"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            <div className="space-y-6 text-center md:text-left order-1 md:order-2">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Fast Transaction
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                I sent money to Papa Taiwo on the bus.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Even on the go, Raba ensures fast, reliable transfers. No
                network interruptions, no waiting — just open the app or speak,
                and your transaction is complete.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Open an account
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Trust & Security Section */}
      <Container as="section" className="py-12 pb-20">
        <div className="rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Trust & Security
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                I sabi use bank app now, no stress again
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                No more worrying about fraud or fake apps. Your voice is your
                password — safe, unique, and protected. With Raba, your money
                and your peace of mind stay secure.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Open an account
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] h-[280px] sm:h-[350px] md:h-[400px] rounded-[60px] sm:rounded-[80px] md:rounded-[100px] bg-linear-to-br from-orange-50 via-orange-100 to-yellow-50 overflow-hidden">
                <Image
                  src="/image 9.svg"
                  alt="Woman using banking app securely"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Content;
