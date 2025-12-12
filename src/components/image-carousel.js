"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ImageWithFallback } from "./image-with-fallback"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ImageCarousel({ images, className }) {
  const scrollRef = React.useRef(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const checkForScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
      
      const index = Math.round(scrollLeft / clientWidth)
      setCurrentIndex(index)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = (scrollRef.current.clientWidth / 3) * (direction === "left" ? -1 : 1)
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const scrollTo = (index) => {
    if (scrollRef.current) {
        const { clientWidth } = scrollRef.current
        scrollRef.current.scrollTo({ left: index * clientWidth, behavior: "smooth" })
    }
  }

  React.useEffect(() => {
    const currentRef = scrollRef.current
    if (currentRef) {
      checkForScroll()
      currentRef.addEventListener("scroll", checkForScroll)
      window.addEventListener("resize", checkForScroll)
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkForScroll)
        window.removeEventListener("resize", checkForScroll)
      }
    }
  }, [checkForScroll])

  // Auto-play 7 seconds
  React.useEffect(() => {
      const interval = setInterval(() => {
          if (scrollRef.current) {
              const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
              if (scrollLeft + clientWidth >= scrollWidth - 10) {
                  // Loop back to start
                  scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
              } else {
                  scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" })
              }
          }
      }, 7000)
      return () => clearInterval(interval)
  }, [])

  if (!images || images.length === 0) return null

  return (
    <div className={cn("relative group", className)}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide rounded-xl"
      >
        {images.map((src, index) => (
          <div key={index} className="snap-center flex-shrink-0 w-full relative">
            <div className="aspect-video w-full overflow-hidden bg-slate-100">
              <ImageWithFallback src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button 
            onClick={() => scroll("left")} 
            variant="ghost" 
            size="icon" 
            className={cn("absolute top-1/2 left-4 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-sm", !canScrollLeft && "opacity-0 pointer-events-none")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button 
            onClick={() => scroll("right")} 
            variant="ghost" 
            size="icon" 
            className={cn("absolute top-1/2 right-4 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-sm", !canScrollRight && "opacity-0 pointer-events-none")}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
              <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all shadow-sm",
                      idx === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
              />
          ))}
        </div>
      )}
    </div>
  )
}