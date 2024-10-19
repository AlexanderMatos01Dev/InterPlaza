import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideData {
  id: number
  title: string
  backgroundImage: string
}

const slideData: SlideData[] = [
  {
    id: 1,
    title: "Papa Johns",
    backgroundImage: "https://i.ibb.co/H7sD1VY/Papa-Jhons-imagen-0-75x.png",
  },
  {
    id: 2,
    title: "Super Lama",
    backgroundImage: "https://i.ibb.co/7Q78rjY/supermercado.png",
  },
  {
    id: 3,
    title: "Caribbean Cinemas",
    backgroundImage: "https://i.ibb.co/0F99WVL/img-2024-10-19-13-43-01.png",
  },
];
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length)
  }

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-xl shadow-lg">
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.backgroundImage}
            alt={slide.title}
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold">{slide.title}</h2>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-1 sm:p-2 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-1 sm:p-2 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}