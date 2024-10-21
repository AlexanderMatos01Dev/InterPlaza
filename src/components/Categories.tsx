'use client'

import { motion } from 'framer-motion'
import { hoverScale, buttonHoverScale } from '../animations'

interface Category {
    id: number
    title: string
    image: string
    description: string
}

const categories: Category[] = [
    { id: 1, title: "SERVICIOS", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Encuentra todos los servicios que necesitas en un solo lugar." },
    { id: 2, title: "ENTRETENIMIENTO", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Disfruta de las mejores opciones de entretenimiento para toda la familia." },
    { id: 3, title: "GASTRONOMÍA", image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Descubre una amplia variedad de opciones culinarias para todos los gustos." },
    { id: 4, title: "MODA", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Encuentra las últimas tendencias en moda y accesorios." },
    { id: 5, title: "HOGAR", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Todo lo que necesitas para hacer de tu casa un hogar." },
    { id: 6, title: "TECNOLOGÍA", image: "https://images.unsplash.com/photo-1518997554305-5eea2f04e384?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", description: "Explora las últimas innovaciones tecnológicas y gadgets." },
]

export default function CategoryComponent() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <div className="absolute inset-0 bg-[rgba(200,200,210,0.3)] rounded-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-8 text-center text-[rgb(222,62,86)]">Explora InterPlaza</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                            {...hoverScale}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(71,79,84,0.8)] to-transparent" />
                                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-[rgb(71,79,84)] text-sm">{category.description}</p>
                            </div>
                            <div className="p-4 bg-[rgb(71,79,84)] bg-opacity-10">
                                <motion.button
                                    className="w-full px-4 py-2 bg-[rgb(222,62,86)] text-white rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-[rgba(222,62,86,0.8)]"
                                    {...buttonHoverScale}
                                >
                                    Explorar {category.title}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.button
                        className="px-8 py-4 bg-[rgb(222,62,86)] text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[rgba(222,62,86,0.8)] hover:scale-105 active:scale-95"
                    >
                        VER DIRECTORIO COMPLETO
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
