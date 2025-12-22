import Image from "next/image";
import MissionVisionIllustration from "@/public/about/mission-vision-image.webp";
import { SoundWave } from "@/app/components/ui/SoundWave";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-[75px] md:py-[100px] px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="w-full lg:flex-1 lg:max-w-[562px]">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight -tracking-[0.5px] text-neutral-black font-semibold mb-4 md:mb-8">
              Our Mission & Vision
            </h2>

            <p className="text-base leading-6 -tracking-[0.25px] text-neutral-black/80">
              Our mission is to simplify digital payments through speed,
              security, and the power of voice.
              <br />
              <br />
              Our vision is to become Africa’s most trusted and intelligent
              digital wallet, where technology adapts to you, and payments
              happen effortlessly.
            </p>
          </div>

          <div className="relative w-full md:flex-1 max-w-[500px] aspect-5/3 shrink-0">
            <Image
              src={MissionVisionIllustration}
              fill
              placeholder="blur"
              className="object-cover -scale-x-100 rounded-3xl"
              alt="Mission Vision Illustration"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            />

            <div className="absolute z-20" style={{ top: "37%", left: "5%" }}>
              <SoundWave
                bars={[15, 21, 17, 22, 19, 12, 23, 17, 21, 15]}
                barWidth={4}
                gap={3}
                containerHeight={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
