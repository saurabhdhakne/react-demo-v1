"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const locations = [
  {
    id: 1,
    title: "Mountain Peak Observatory",
    description:
      "Experience breathtaking views from our highest observation point. This location offers panoramic vistas of the surrounding valleys and distant mountain ranges. Perfect for sunrise and sunset photography sessions.",
    position: { top: "20%", left: "25%" },
  },
  {
    id: 2,
    title: "Crystal Lake Resort",
    description:
      "A serene lakeside retreat surrounded by pristine wilderness. The crystal-clear waters reflect the sky like a mirror, creating perfect conditions for kayaking, fishing, and peaceful meditation.",
    position: { top: "45%", left: "60%" },
  },
  {
    id: 3,
    title: "Ancient Forest Trail",
    description:
      "Walk through centuries-old trees in this mystical forest pathway. The trail winds through towering redwoods and ancient oaks, offering glimpses of rare wildlife and unique flora.",
    position: { top: "65%", left: "30%" },
  },
  {
    id: 4,
    title: "Coastal Lighthouse",
    description:
      "Historic lighthouse standing guard over dramatic coastal cliffs. This iconic landmark has guided ships safely to shore for over 150 years and offers spectacular ocean views.",
    position: { top: "30%", left: "80%" },
  },
  {
    id: 5,
    title: "Valley Meadows",
    description:
      "Rolling green meadows dotted with wildflowers in spring and summer. This peaceful valley is home to grazing wildlife and offers excellent hiking trails for all skill levels.",
    position: { top: "75%", left: "70%" },
  },
]

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1))
  }

  const handlePointerClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=900&width=1600')",
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Map Pointers */}
      {locations.map((location, index) => (
        <button
          key={location.id}
          onClick={() => handlePointerClick(index)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            index === activeIndex
              ? "scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              : "scale-100 opacity-70 hover:opacity-100"
          }`}
          style={{
            top: location.position.top,
            left: location.position.left,
          }}
        >
          <div className={`relative ${index === activeIndex ? "animate-pulse" : ""}`}>
            <MapPin
              className={`w-8 h-8 ${
                index === activeIndex
                  ? "text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                  : "text-white/80"
              }`}
              fill={index === activeIndex ? "white" : "rgba(255,255,255,0.8)"}
            />
            {index === activeIndex && (
              <div className="absolute inset-0 rounded-full bg-white/30 blur-md scale-150 -z-10" />
            )}
          </div>
        </button>
      ))}

      {/* Information Box */}
      <Card className="absolute bottom-8 left-8 w-96 bg-white/95 backdrop-blur-sm shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" size="icon" onClick={handlePrevious} className="h-8 w-8 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {locations.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={handleNext} className="h-8 w-8 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">{locations[activeIndex].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{locations[activeIndex].description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
