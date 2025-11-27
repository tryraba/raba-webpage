"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/subtract.svg",
    alt: "Person in marketplace",
  },
  {
    id: 2,
    url: "/business.svg",
    alt: "Business owner",
  },
  {
    id: 3,
    url: "/alata.svg",
    alt: "Market vendor",
  },
]

export default function SmoothImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)

    setTimeout(() => setIsAnimating(false), 600)
  }

  // Get next and previous indices for side images
  const getPrevIndex = () => (activeIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length
  const getNextIndex = () => (activeIndex + 1) % CAROUSEL_IMAGES.length

  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Carousel Container */}
        <div className="relative flex items-center gap-4 overflow-visible">
          {/* Main Featured Image */}
          <div className="relative w-[692px] h-[390px] group">
            <div
              className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-600 ease-out"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%)",
              }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[32px]">
                <Image
                  key={`main-${CAROUSEL_IMAGES[activeIndex].id}`}
                  src={CAROUSEL_IMAGES[activeIndex].url || "/placeholder.svg"}
                  alt={CAROUSEL_IMAGES[activeIndex].alt}
                  fill
                  className="object-cover w-full h-full"
                  style={{
                    animation: isAnimating ? "fadeIn 0.6s ease-out" : "none",
                    objectPosition: "center",
                  }}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Arrow Button */}
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:cursor-not-allowed z-10"
              style={{
                transform: "translate(-24px, -24px)",
              }}
              aria-label="Next image"
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </button>

            {/* Purple border accent */}
            <div
              className="absolute inset-0 rounded-[32px] pointer-events-none"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%)",
                border: "3px solid rgba(147, 51, 234, 0.3)",
              }}
            />
          </div>

          {/* Side Images */}
          <div className="flex gap-4 w-[42%] h-[500px]">
            {/* Left Side Image */}
            <div
              className="relative flex-1 rounded-[32px]  w-[239px] h-[410px] mt-12 overflow-hidden shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setActiveIndex(getPrevIndex())
                setTimeout(() => setIsAnimating(false), 600)
              }}
            >
              <img
                key={`prev-${CAROUSEL_IMAGES[getPrevIndex()].id}`}
                src={CAROUSEL_IMAGES[getPrevIndex()].url || "/placeholder.svg"}
                alt={CAROUSEL_IMAGES[getPrevIndex()].alt}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center center",
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
                  View
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div
              className="relative flex-1 rounded-[32px] w-[239px] h-[410px] mt-12 overflow-hidden shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setActiveIndex(getNextIndex())
                setTimeout(() => setIsAnimating(false), 600)
              }}
            >
              <Image
                key={`next-${CAROUSEL_IMAGES[getNextIndex()].id}`}
                src={CAROUSEL_IMAGES[getNextIndex()].url || "/placeholder.svg"}
                alt={CAROUSEL_IMAGES[getNextIndex()].alt}
                width={400}
                height={500}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center center",
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
                  View
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating || idx === activeIndex) return
                setIsAnimating(true)
                setActiveIndex(idx)
                setTimeout(() => setIsAnimating(false), 600)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
