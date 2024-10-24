'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const partners = [
    { id: 1, name: "McDonald's", logo: "https://i.ibb.co/CV8KXKd/Mc-Logo-Redondo.png" },
    { id: 2, name: "Burger King", logo: "https://i.ibb.co/G9KWQZp/Burger-King-Logo-Redondo.png" },
    { id: 3, name: "KFC", logo: "https://i.ibb.co/QPGSR78/KCF-Logo-Redondo.png" },
    { id: 4, name: "Pizza Hut", logo: "https://i.ibb.co/C2q7nTs/Pizza-Hut-Logo-Redondo.png" },
    { id: 5, name: "Subway", logo: "https://i.ibb.co/c3kwDky/Sub-Way-Logo-Redondo.png" },
    { id: 6, name: "Super Lama", logo: "https://i.ibb.co/CwvQ7VC/Super-Lama-Logo-Redondo.png" },
    { id: 7, name: "Caribbean Cinemas", logo: "https://i.ibb.co/vxjmKRg/Caribbean-Cinema-Logo.png" },
    { id: 8, name: "Teriyaki", logo: "https://i.ibb.co/42ddm11/Teriyaki-Logo-Redondo.png" },
    { id: 9, name: "Papa Johns", logo: "https://i.ibb.co/THf23F0/Logo-Redondo-Papa-Johns.png" },
];

export default function InfinitePartnerCarousel() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [itemWidth, setItemWidth] = useState(144)
    const gap = 32

    useEffect(() => {
        const updateItemWidth = () => {
            if (window.innerWidth <= 640) {
                setItemWidth(80) // Smaller screens
            } else if (window.innerWidth <= 768) {
                setItemWidth(100) // Medium screens
            } else if (window.innerWidth <= 1024) {
                setItemWidth(120) // Large screens
            } else {
                setItemWidth(144) // Extra large screens
            }
        }

        updateItemWidth()
        window.addEventListener('resize', updateItemWidth)

        return () => window.removeEventListener('resize', updateItemWidth)
    }, [])

    const totalWidth = partners.length * (itemWidth + gap)

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[rgb(222,62,86)]">ANCLAS</h2>
            <div className="relative overflow-hidden" ref={containerRef}>
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
                <motion.div
                    className="flex space-x-4 sm:space-x-6 md:space-x-8"
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
                            className="flex-shrink-0 relative flex items-center justify-center partner-item"
                            style={{ width: `${itemWidth}px`, height: `${itemWidth}px` }}
                            whileHover={{ scale: 1 }}
                            animate={{
                                scale: hoveredIndex === null || hoveredIndex === index ? 1 : 0.8,
                                filter: hoveredIndex === null || hoveredIndex === index ? 'blur(0px)' : 'blur(2px)',
                            }}
                            transition={{ duration: 0.3 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-contain rounded-2xl"
                                loading={index < 9 ? "eager" : "lazy"}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-8 text-center">
                <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-[rgb(222,62,86)] text-white rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 hover:bg-[rgba(222,62,86,0.8)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    VER DIRECTORIO DE ANCLAS
                </motion.button>
            </div>
        </div>
    )
}