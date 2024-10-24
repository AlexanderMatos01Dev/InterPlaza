import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideData {
  id: number;
  title: string;
  backgroundImage: string;
  overlayImage: string;
}

const slideData: SlideData[] = [
  {
    id: 1,
    title: "Papa Johns",
    backgroundImage: "https://i.ibb.co/gRZ6HJS/Inter-Plaza-Papa-Jhons.png",
    overlayImage: "https://i.ibb.co/THf23F0/Logo-Redondo-Papa-Johns.png",
  },
  {
    id: 2,
    title: "Super Lama",
    backgroundImage: "https://i.ibb.co/hC2zwKY/Super-Lama.png",
    overlayImage: "https://i.ibb.co/CwvQ7VC/Super-Lama-Logo-Redondo.png",
  },
  {
    id: 3,
    title: "Caribbean Cinemas",
    backgroundImage: "https://i.ibb.co/znTXtkq/Cine.png",
    overlayImage: "https://i.ibb.co/vxjmKRg/Caribbean-Cinema-Logo.png",
  },
  {
    id: 4,
    title: "Teriyaki",
    backgroundImage: "https://i.ibb.co/qNBshQR/Teriyaki.png",
    overlayImage: "https://i.ibb.co/42ddm11/Teriyaki-Logo-Redondo.png",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    let interval: number | undefined
    if (isAutoPlaying) {
      interval = window.setInterval(nextSlide, 5000)
    }
    return () => window.clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
      <div className="w-full max-w-none mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-[rgb(222,62,86)] px-4">Novedades del Día</h2>
        <div
            className="relative w-full max-w-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <div
              className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden rounded-xl shadow-lg">
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
                      className="w-full h-full object-cover object-center"
                      loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(71,79,84,0.8)] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-white text-sm sm:text-base">Descubre las últimas novedades en InterPlaza</p>
                  </div>
                  {slide.overlayImage && (
                      <img
                          src={slide.overlayImage}
                          alt={`${slide.title} logo`}
                          className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain bg-white rounded-full p-2"
                          loading="lazy"
                      />
                  )}
                </div>
            ))}
          </div>
          <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[rgb(222,62,86)] text-white hover:bg-[rgb(222,62,86)]/80 rounded-full p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(222,62,86)]"
              aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[rgb(222,62,86)] text-white hover:bg-[rgb(222,62,86)]/80 rounded-full p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(222,62,86)]"
              aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white rounded-full px-2 py-1 shadow-md">
            {slideData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-[rgb(222,62,86)]' : 'bg-[rgb(71,79,84)]/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
          </div>
        </div>
      </div>
  )
}