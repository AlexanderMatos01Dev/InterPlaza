import { motion } from 'framer-motion'

interface Category {
    id: number
    title: string
    image: string
    description: string
}

const categories: Category[] = [
    { id: 1, title: "SERVICIOS", image: "/placeholder.svg?height=200&width=300", description: "Encuentra todos los servicios que necesitas en un solo lugar." },
    { id: 2, title: "ENTRETENIMIENTO", image: "/placeholder.svg?height=200&width=300", description: "Disfruta de las mejores opciones de entretenimiento para toda la familia." },
    { id: 3, title: "GASTRONOMÍA", image: "/placeholder.svg?height=200&width=300", description: "Descubre una amplia variedad de opciones culinarias para todos los gustos." },
    { id: 4, title: "MODA", image: "/placeholder.svg?height=200&width=300", description: "Encuentra las últimas tendencias en moda y accesorios." },
    { id: 5, title: "HOGAR", image: "/placeholder.svg?height=200&width=300", description: "Todo lo que necesitas para hacer de tu casa un hogar." },
    { id: 6, title: "TECNOLOGÍA", image: "/placeholder.svg?height=200&width=300", description: "Explora las últimas innovaciones tecnológicas y gadgets." },
]

export default function Component() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-[rgb(218,64,88)]">Explora InterPlaza</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{category.title}</h3>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                        <div className="p-4 bg-gray-50">
                            <motion.button
                                className="w-full px-4 py-2 bg-[rgb(218,64,88)] text-white rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-[rgba(218,64,88,0.9)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explorar {category.title}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <motion.button
                    className="px-8 py-4 bg-[rgb(218,64,88)] text-white rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-[rgba(218,64,88,0.9)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    VER DIRECTORIO COMPLETO
                </motion.button>
            </div>
        </div>
    )
}