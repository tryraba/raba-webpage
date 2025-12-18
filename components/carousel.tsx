"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/Rectangle60.svg",
    alt: "Person in marketplace",
  },
  {
    id: 2,
    url: "/Rectangle80.svg",
    alt: "Business owner",
  },
  {
    id: 3,
    url: "/Rectangle79.svg",
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
    <div className="w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative flex flex-row items-stretch gap-2 sm:gap-3 md:gap-4">
        {/* Main Featured Image */}
        <div className="relative w-[55%] sm:w-[58%] h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] group">
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <Image
              key={`main-${CAROUSEL_IMAGES[activeIndex].id}`}
              src={CAROUSEL_IMAGES[activeIndex].url || "/placeholder.svg"}
              alt={CAROUSEL_IMAGES[activeIndex].alt}
              fill
              className="object-cover w-full h-full"
              style={{
                animation: isAnimating ? "fadeIn 0.6s ease-out" : "none",
              }}
            />
          </div>

          {/* Arrow Button */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:cursor-not-allowed z-10"
            aria-label="Next image"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
          </button>
        </div>

        {/* Side Images */}
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 w-[45%] sm:w-[42%] h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px]">
          {/* Previous Image */}
          <div
            className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-300"
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setActiveIndex(getPrevIndex())
              setTimeout(() => setIsAnimating(false), 600)
            }}
          >
            <Image
              key={`prev-${CAROUSEL_IMAGES[getPrevIndex()].id}`}
              src={CAROUSEL_IMAGES[getPrevIndex()].url || "/placeholder.svg"}
              alt={CAROUSEL_IMAGES[getPrevIndex()].alt}
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Next Image */}
          <div
            className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-300"
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
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6 lg:mt-8">
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
