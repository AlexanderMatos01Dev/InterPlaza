'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function SubscribeSection() {
    const [containerHeight, setContainerHeight] = useState('auto')
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const updateContainerHeight = () => {
            if (containerRef.current && imageRef.current) {
                const viewportWidth = window.innerWidth
                const imageHeight = imageRef.current.offsetHeight
                let newHeight = '50vh'

                if (viewportWidth < 640) {
                    newHeight = '50vh'
                } else if (viewportWidth < 768) {
                    newHeight = '40vh'
                } else if (viewportWidth < 1024) {
                    newHeight = '30vh'
                } else {
                    newHeight = '25vh'
                }

                const minHeight = `${imageHeight * 0.8}px`
                setContainerHeight(`max(${newHeight}, ${minHeight})`)
            }
        }

        updateContainerHeight()
        window.addEventListener('resize', updateContainerHeight)
        return () => window.removeEventListener('resize', updateContainerHeight)
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-[rgb(222,62,86)] overflow-hidden flex items-center justify-center"
            style={{ height: containerHeight }}
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative w-full h-full">
                    <img
                        ref={imageRef}
                        src="https://i.ibb.co/5r4y3QG/Persona-Senalando.png"
                        alt=""
                        className="absolute bottom-0 right-0 w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 h-auto object-contain object-bottom -mb-20"
                    />
                    <div className="absolute inset-0 bg-[rgb(222,62,86)] bg-opacity-70"></div>
                </div>
            </motion.div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    className="w-full text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-3">
                        ENTÉRATE DE LO QUE SUCEDE EN <br />
                        <span className="text-white">Inter Plaza</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        Diviértete cada día con todas nuestras marcas, promociones y eventos.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Escribe aquí tu email"
                            className="w-full sm:w-auto px-3 py-2 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Email para suscripción"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-4 py-2 bg-white text-[rgb(222,62,86)] text-sm sm:text-base font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-200"
                        >
                            Suscríbete
                        </button>
                    </form>
                    <div className="mt-2 sm:mt-3 flex items-center justify-center text-xs sm:text-sm">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms">
                            Aceptas nuestros{' '}
                            <a href="/terminos" className="underline hover:text-opacity-80">
                                términos y condiciones
                            </a>
                        </label>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}