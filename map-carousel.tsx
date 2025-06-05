"use client"

import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function MapCarousel() {
  const [activePointer, setActivePointer] = useState(0)

  // Sample data for 3 locations
  const locations = [
    {
      id: 0,
      title: "New York",
      description: "The city that never sleeps with endless opportunities.",
      position: { top: "20%", left: "15%" },
    },
    {
      id: 1,
      title: "Los Angeles",
      description: "Entertainment capital with beautiful beaches.",
      position: { top: "35%", left: "8%" },
    },
    {
      id: 2,
      title: "Chicago",
      description: "Known for architecture and deep-dish pizza.",
      position: { top: "25%", left: "35%" },
    },
  ]

  const handlePrevious = () => {
    setActivePointer((prev) => (prev === 0 ? locations.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActivePointer((prev) => (prev === locations.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="position-relative" style={{ width: "100%", height: "900px" }}>
      {/* Background Image */}
      <div
        className="w-100 h-100 position-relative"
        style={{
          backgroundImage: "url(/placeholder.svg?height=900&width=1200)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Map Pointers */}
        {locations.map((location, index) => (
          <div
            key={location.id}
            className="position-absolute"
            style={{
              top: location.position.top,
              left: location.position.left,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <div
              className={`rounded-circle bg-danger d-flex align-items-center justify-content-center ${
                activePointer === index ? "active-pointer" : ""
              }`}
              style={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  activePointer === index
                    ? "0 0 20px 8px rgba(255, 255, 255, 0.8), 0 0 40px 15px rgba(255, 255, 255, 0.4)"
                    : "none",
              }}
              onClick={() => setActivePointer(index)}
            >
              <div className="rounded-circle bg-white" style={{ width: "8px", height: "8px" }}></div>
            </div>
          </div>
        ))}

        {/* Content Box - Left Bottom */}
        <div
          className="position-absolute bg-white rounded shadow-lg p-4"
          style={{
            bottom: "40px",
            left: "40px",
            width: "300px",
            maxWidth: "90vw",
            zIndex: 20,
          }}
        >
          {/* Navigation Arrows */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              onClick={handlePrevious}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>

            <div className="text-center">
              <small className="text-muted">
                {activePointer + 1} / {locations.length}
              </small>
            </div>

            <button
              className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              onClick={handleNext}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="text-center">
            <h4 className="mb-3 text-primary">{locations[activePointer].title}</h4>
            <p className="text-muted mb-0" style={{ fontSize: "14px", lineHeight: "1.5" }}>
              {locations[activePointer].description}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active-pointer {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8), 0 0 40px 15px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 25px 12px rgba(255, 255, 255, 0.9), 0 0 50px 20px rgba(255, 255, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8), 0 0 40px 15px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  )
}
