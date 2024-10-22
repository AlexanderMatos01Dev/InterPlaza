'use client'

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Landmark, MapPin } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const cardHover = {
    scale: 1.05,
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
};

const QuienesSomos: React.FC = () => {
    const features = useMemo(() => [
        { icon: Building2, title: "Más de 20 Tiendas", description: "Una amplia variedad de opciones para todos los gustos y necesidades." },
        { icon: Users, title: "Generador de Empleo", description: "Creando oportunidades laborales para nuestra comunidad." },
        { icon: Landmark, title: "Inversión Local", description: "Impulsando el desarrollo económico de San Pedro de Macorís." },
        { icon: MapPin, title: "Ubicación Estratégica", description: "Fácil acceso desde todos los puntos de la ciudad." },
    ], []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
            <div className="absolute inset-0 bg-[rgba(200,200,210,0.3)] rounded-3xl"></div>
            <div className="relative z-10">
                <div className="flex justify-center mb-8">
                    <img src="https://i.ibb.co/sC900wQ/img-2024-10-18-18-53-56-removebg-preview.png" alt="InterPlaza Logo" className="h-24 w-auto" loading="lazy" />
                </div>
                <motion.h2
                    className="text-4xl font-bold mb-8 text-center text-[rgb(222,62,86)]"
                    {...fadeIn}
                >
                    Quiénes Somos
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence>
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-6 relative"
                            {...fadeIn}
                            whileHover={cardHover}
                            layout
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[rgb(222,62,86)] to-[rgb(71,79,84)]"></div>
                            <h3 className="text-2xl font-semibold mb-4 text-[rgb(71,79,84)] relative">
                                InterPlaza: El Futuro del Comercio en San Pedro de Macorís
                            </h3>
                            <p className="text-[rgb(71,79,84)] mb-4 relative pl-4 border-l-4 border-[rgb(222,62,86)]">
                                InterPlaza es el proyecto más ambicioso y vanguardista en el corazón de San Pedro de Macorís,
                                República Dominicana. Nacida de la visión de INVERSIONES RM, un grupo de inversionistas
                                comprometidos con el desarrollo y progreso de la región, InterPlaza se erige como un símbolo
                                de innovación y excelencia en el comercio minorista.
                            </p>
                            <p className="text-[rgb(71,79,84)] relative pl-4 border-l-4 border-[rgb(222,62,86)]">
                                Nuestro complejo no es solo la plaza comercial más grande de la provincia; es un destino
                                integral que reúne una amplia gama de establecimientos y servicios, diseñados para satisfacer
                                las necesidades y deseos de nuestra comunidad y visitantes.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-6 relative"
                            {...fadeIn}
                            whileHover={cardHover}
                            layout
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[rgb(71,79,84)] to-[rgb(222,62,86)]"></div>
                            <h3 className="text-2xl font-semibold mb-4 text-[rgb(71,79,84)] flex items-center">
                                Nuestra Misión
                            </h3>
                            <p className="text-[rgb(71,79,84)] mb-4 bg-gray-100 p-4 rounded-lg">
                                En InterPlaza, nos dedicamos a crear una experiencia de compra y entretenimiento sin igual,
                                fomentando el crecimiento económico local y ofreciendo un espacio donde la comunidad pueda
                                reunirse, disfrutar y prosperar.
                            </p>
                            <h3 className="text-2xl font-semibold mb-4 text-[rgb(71,79,84)] flex items-center">
                                Nuestra Visión
                            </h3>
                            <p className="text-[rgb(71,79,84)] bg-gray-100 p-4 rounded-lg">
                                Aspiramos a ser el epicentro del comercio y la vida social en San Pedro de Macorís,
                                estableciendo nuevos estándares de excelencia en el sector retail y contribuyendo
                                significativamente al desarrollo sostenible de nuestra región.
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={cardHover}
                            layout
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(222,62,86)] to-[rgb(71,79,84)]"></div>
                            <item.icon size={40} className="text-[rgb(222,62,86)] mb-4" />
                            <h4 className="text-lg font-semibold mb-2 text-[rgb(71,79,84)]">{item.title}</h4>
                            <p className="text-sm text-[rgb(71,79,84)]">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-lg text-[rgb(71,79,84)] mb-6 italic">
                        "InterPlaza es más que un centro comercial; es el corazón palpitante de San Pedro de Macorís,
                        un lugar donde los sueños se hacen realidad y las comunidades se unen."
                    </p>
                    <motion.button
                        className="px-8 py-4 bg-[rgb(222,62,86)] text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[rgba(222,62,86,0.8)]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Conoce Más Sobre Nosotros
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default QuienesSomos;