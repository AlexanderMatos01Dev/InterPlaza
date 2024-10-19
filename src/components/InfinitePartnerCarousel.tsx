"use client"

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface Partner {
    id: number
    name: string
    logo: string
}

const partners: Partner[] = [
    { id: 1, name: "McDonald's", logo: "https://i.ibb.co/Yk9Pn2P/Mc-Logo-Redondo.png" },
    { id: 2, name: "Burger King", logo: "https://i.ibb.co/ZVfTN5K/Burger-King-Logo-Redondo.png" },
    { id: 3, name: "KFC", logo: "https://i.ibb.co/XZm00Xt/KCF-Logo-Redondo.png" },
    { id: 4, name: "Pizza Hut", logo: "https://i.ibb.co/TBDw341/Pizza-Hut-Logo-Redondo.png" },
    { id: 5, name: "Subway", logo: "https://i.ibb.co/kKdqsnX/Sub-Way-Logo-Redondo.png" },
]

export default function InfinitePartnerCarousel() {
    const controls = useAnimation()
    const carouselRef = useRef<HTMLDivElement>(null)

    const itemWidth = 125 // 200px width reduced by 40% + 8px gap
    const carouselWidth = partners.length * itemWidth
    const duration = 20 // seconds for one full rotation

    useEffect(() => {
        let startTime: number
        let animationFrameId: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = (elapsed % (duration * 1000)) / (duration * 1000)
            const x = -progress * carouselWidth

            controls.set({ x })

            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [controls, carouselWidth, duration])

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'rgb(222, 64, 87)' }}>Nuestros Partners</h2>
            <div className="relative overflow-hidden" ref={carouselRef}>
                <div className="blur-effect" />
                <div className="blur-effect blur-effect-right" />
                <motion.div
                    className="flex space-x-8"
                    animate={controls}
                    style={{ width: `${carouselWidth * 2}px` }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 w-30 h-30 relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-contain rounded-2xl"
                                style={{ width: '120px', height: '120px' }} // 200px reduced by 40%
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-8 text-center">
                <button
                    className="px-6 py-3 rounded-full text-lg font-semibold text-white transition-colors duration-300"
                    style={{
                        backgroundColor: 'rgb(222, 64, 87)',
                        ':hover': {
                            backgroundColor: 'rgba(222, 64, 87, 0.9)'
                        }
                    }}
                >
                    VER DIRECTORIO DE PARTNERS
                </button>
            </div>
        </div>
    )
}