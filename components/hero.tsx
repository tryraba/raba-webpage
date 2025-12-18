import React from "react";
import Image from "next/image";
import SmoothImageCarousel from "@/components/carousel";
import { Container } from "./container";

const Hero = () => {
  return (
    <>
      <Container
        as="section"
        className="py-10 md:py-16 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10"
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="px-3 py-1 text-[#EF5A22] bg-[#FEE7DB] rounded-full w-fit mx-auto md:mx-0 text-sm font-medium">
            Say it, Send it, Done
          </p>

          <h1 className="font-semibold text-3xl md:text-4xl leading-tight text-gray-800">
            The First African Banking App That
            <br className="hidden md:block" />
            Speaks Your Language, And Listens Too.
          </h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center md:items-start gap-4 max-w-md text-center md:text-left">
          <p className="text-gray-600 text-base leading-relaxed">
            RABA is redefining the way you move money —
            fast, secure, and completely hands-free.
          </p>

          {/* Google Play Button */}
          <div className="flex flex-row max-sm:flex-row gap-4">
          <button className="flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg">
            <Image
              src="/apple.svg"
              alt="Google Play Logo"
              width={32}
              height={32}
            />
            <div className="text-left text-sm leading-tight">
              <span className="text-xs">GET IT ON</span> <br />
              <span className="font-medium text-base">APP STORE</span>
            </div>
          </button>
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
          </button>
          </div>
        </div>
      </Container>

      {/* CAROUSEL */}
      <Container className="py-8">
        <SmoothImageCarousel />
      </Container>
    </>
  );
};

export default Hero;
