'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useMotionValue, useDragControls } from 'framer-motion'

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
    { id: 6, name: "Super Lama", logo: "https://i.ibb.co/cFxNVb5/Super-Lama-Logo-Redondo.png" },
    { id: 7, name: "Caribbean Cinemas", logo: "https://i.ibb.co/HgN2G5P/Caribbean-Cinema-Logo.png" },
    { id: 8, name: "Teriyaki", logo: "https://i.ibb.co/d7Hpxyj/Teriyaki-Logo-Redondo.png" },
    { id: 9, name: "Papa Johns", logo: "https://i.ibb.co/6JtyN6T/Logo-Redondo-Papa-Johns.png" },
]

export default function Component() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    const [itemWidth, setItemWidth] = useState(144)
    const gap = 32

    const controls = useAnimation()
    const x = useMotionValue(0)
    const dragControls = useDragControls()
    const [isDragging, setIsDragging] = useState(false)

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

    useEffect(() => {
        const autoScroll = () => {
            controls.start({
                x: -totalWidth,
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            })
        }

        if (!isDragging) {
            autoScroll()
        }

        return () => controls.stop()
    }, [controls, totalWidth, isDragging])

    const handleDragStart = () => {
        controls.stop()
        setIsDragging(true)
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        const currentX = x.get()
        controls.start({
            x: currentX,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        })
    }

    const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        dragControls.start(event, { snapToCursor: false })
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[rgb(222,62,86)]">Nuestros Partners</h2>
            <div className="relative overflow-hidden" ref={containerRef}>
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
                <motion.div
                    ref={carouselRef}
                    className="flex space-x-4 sm:space-x-6 md:space-x-8 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragControls={dragControls}
                    dragConstraints={{
                        left: -totalWidth,
                        right: 0
                    }}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{ x, width: `${totalWidth * 2}px` }}
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
                            onPointerDown={startDrag}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-contain rounded-2xl"
                                draggable="false"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="mt-8 text-center">
                <motion.button
                    className="px-8 py-4 bg-[rgb(222,62,86)] text-white rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-[rgba(222,62,86,0.8)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    VER DIRECTORIO DE PARTNERS
                </motion.button>
            </div>
        </div>
    )
}