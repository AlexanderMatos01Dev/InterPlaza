"use client"

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const itemWidth = 240
    const gap = 32 // 8px * 4 (space-x-8)
    const totalWidth = partners.length * (itemWidth + gap)

    useEffect(() => {
        const updateContainerWidth = () => {
            if (containerRef.current) {
                // You can use containerRef.current.offsetWidth here if needed in the future
            }
        }

        updateContainerWidth()
        window.addEventListener('resize', updateContainerWidth)

        return () => window.removeEventListener('resize', updateContainerWidth)
    }, [])

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <h2 className="text-3xl font-bold mb-4 text-center text-[rgb(222,64,87)]">Nuestros Partners</h2>
            <div className="relative overflow-hidden" ref={containerRef}>
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
                <motion.div
                    className="flex space-x-8"
                    animate={{
                        x: [-totalWidth, 0],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    style={{ width: `${totalWidth * 2}px` }}
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 w-60 h-60 relative flex items-center justify-center"
                            whileHover={{ scale: 1.1, zIndex: 1 }}
                            animate={{
                                scale: hoveredIndex === null || hoveredIndex === index ? 1 : 0.9,
                                filter: hoveredIndex === null || hoveredIndex === index ? 'blur(0px)' : 'blur(2px)',
                            }}
                            transition={{ duration: 0.3 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-48 h-48 object-contain rounded-2xl"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-8 text-center">
                <button
                    className="px-6 py-3 rounded-full text-lg font-semibold text-white transition-colors duration-300 bg-[rgb(222,64,87)] hover:bg-[rgba(222,64,87,0.9)]"
                >
                    VER DIRECTORIO DE PARTNERS
                </button>
            </div>
        </div>
    )
}