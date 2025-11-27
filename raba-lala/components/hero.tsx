import React from "react";
import Image from "next/image";
import SmoothImageCarousel from "@/components/carousel"

const Hero = () => {
  return (
    <>
    <section className="w-full max-w-6xl mx-auto px-6 py-12 flex justify-between items-start gap-10">
      
      {/* LEFT SECTION */}
      <div className="flex flex-col gap-4">
        
        <p className="px-3 py-1 text-[#EF5A22] bg-[#FEE7DB] rounded-full w-fit text-sm font-medium">
          Say it, Send it, Done
        </p>

        <h1 className="font-semibold text-4xl leading-tight text-gray-800">
          The First African Banking App That
          <br />
          Speaks Your Language, And Listens Too.
        </h1>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-start gap-4 max-w-md">
        <p className="text-gray-600 text-base leading-relaxed">
          RABA is redefining the way you move money —
          fast, secure, and completely hands-free.
        </p>

        {/* Google Play Button */}
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

    </section>
    <div className=" h-[414px] mx-auto justify-center">
      <SmoothImageCarousel/>
    </div>
    </>
  );
};

export default Hero;
