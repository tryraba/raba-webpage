"use client";
import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 mt-90">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-orange-500 font-medium mb-2 tracking-wide">
          Real voices. Real moments.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Banking, the way we actually live.
        </h1>
      </section>

      {/* Voice Banking Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className=" rounded-3xl overflow-visible">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="space-y-6">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Voice Banking
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                I sent rent in Hausa, no typing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Send money using just your voice, in any language you speak.
                Raba understands you, no typing, no stress. Just say it and your
                rent is paid instantly.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Open an account
              </button>
            </div>

            <div className="relative flex justify-center items-center min-h-[450px]">
              {/* Hausa text bubble - positioned to overlap border */}
              <div className="absolute top-12 -left-8 bg-white rounded-full px-5 py-3 shadow-lg flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
                  {/* <Mic className="w-5 h-5 text-white" /> */}r
                </div>
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  Raba, turo min kudin haya
                </span>
              </div>

              {/* Sound wave visualization - positioned on the border */}
              <div className="absolute top-[120px] left-8 bg-white rounded-lg px-4 py-3 shadow-lg z-20">
                <div className="flex gap-1 items-end">
                  {[18, 28, 22, 32, 26, 20, 30, 24, 28, 20, 26, 22].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-orange-500 rounded-full"
                        style={{
                          height: `${height}px`,
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
              <div className="relative w-full max-w-[450px] h-[400px] rounded-[100px] bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50 p-8 overflow-hidden">
                <Image
                  src="/Raba woman.svg"
                  alt="Woman using voice banking"
                  width={338}
                  height={410}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
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
      </section>

      {/* Fast Transaction Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className=" rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="relative">
              <div className="relative w-full max-w-[450px] h-[400px] rounded-[100px] bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50 p-8 overflow-hidden">
                <Image
                  src="/iphone 17.svg"
                  alt="Woman using voice banking"
                  width={295}
                  height={394}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Fast Transaction
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                I sent money to papa Taiwo on the bus.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
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
      </section>

      {/* Trust & Security Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <div className=" rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="space-y-6">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Trust & Security
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                I sabi use bank app now, no stress again
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                No more worrying about fraud or fake apps. Your voice is your
                password — safe, unique, and protected. With Raba, your money
                and your peace of mind stay secure.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Open an account 
              </button>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-[450px] h-[400px] rounded-[100px] bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50 p-8 overflow-hidden">
                {" "}
                <Image
                  src="/image 9.svg"
                  alt="Woman using banking app securely"
                  width={388}
                  height={410}
                />
                {/* <div className="absolute bottom-8 right-8 bg-white rounded-full p-3 shadow-xl">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
