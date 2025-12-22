import Image from "next/image";
import SmoothImageCarousel from "@/app/components/carousel";
import { Container } from "./ui/Container";
export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between gap-2 py-12.5">
        <div className="flex flex-col gap-4 md:gap-1.75rem">
          <p className="px-3 py-1 lg:px-4 lg:py-2 text-raba-orange bg-[#EE9F8042] rounded-full  md:rounded-lg w-fit md:mx-0 text-sm font-medium">
            Say it, Send it, Done
          </p>
          <h1 className="max-w-166.75 font-semibold text-2xl md:text-[2rem]  md:leading-15 text-neutral-black">
            The First African Banking App That Speaks Your Language, And Listens
            Too.
          </h1>
        </div>
        <div className="max-w-92 flex flex-col gap-4.75rem">
          <p className=" text-neutral-black/80 text-base leading-relaxed">
            RABA is redefining the way you move money, fast, secure, and
            completely hands-free.
          </p>
          <div className="flex flex-wrap flex-row max-sm:flex-row gap-4">
            <button className="flex items-center gap-1.5 md:gap-3 bg-black text-white py-1 px-1.5 md:py-2 md:px-4 rounded-lg">
              <Image
                src="/apple.svg"
                alt="Google Play Logo"
                width={32}
                height={32}
                sizes="32px"
              />
              <div className="text-left text-sm leading-tight">
                <span className="text-xs">GET IT ON</span> <br />
                <span className="font-medium text-base">APP STORE</span>
              </div>
            </button>
            <button className="flex items-center gap-1.5 md:gap-3 bg-black text-white py-1 px-1.5 md:py-2 md:px-4 rounded-lg">
              <Image
                src="/icon-google-playstore.png"
                alt="Google Play Logo"
                width={32}
                height={32}
                sizes="32px"
              />
              <div className="text-left text-sm leading-tight">
                <span className="text-xs">GET IT ON</span> <br />
                <span className="font-medium text-base">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <SmoothImageCarousel />
      </div>
    </Container>
  );
}
