'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';

interface BusinessArea {
    name: string;
    image: string;
    weekdayHours: string;
    weekendHours: string;
}

const businessAreas: BusinessArea[] = [
    {
        name: "Tiendas y Servicios",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        weekdayHours: "Lunes a Viernes: 10:00AM - 9:00PM",
        weekendHours: "Domingos y Feriados: 10:00AM - 8:00PM",
    },
    {
        name: "Jumbo",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        weekdayHours: "Lunes a Sábados: 7:00AM - 10:00PM",
        weekendHours: "Domingos: 8:00AM - 9:00PM",
    },
    {
        name: "Bancos",
        image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        weekdayHours: "Lunes a viernes: 8:00AM - 9:00PM",
        weekendHours: "Domingos y Feriados: 10:00AM - 2:00PM",
    },
    {
        name: "Food Court",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        weekdayHours: "Domingo a jueves: 11:00AM - 11:00PM",
        weekendHours: "Viernes, Sábados y días antes de feriados: 11:00AM - 12:00AM",
    },
];

const OpeningHours: React.FC = () => {
    const [showAllHours, setShowAllHours] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
            <div className="absolute inset-0 bg-[rgba(200,200,210,0.3)] rounded-3xl"></div>
            <div className="relative z-10">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-center text-[rgb(222,62,86)]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Horarios
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {businessAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={area.image}
                                    alt={area.name}
                                    className="w-full h-48 object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(71,79,84,0.8)] to-transparent"></div>
                                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{area.name}</h3>
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 text-[rgb(222,62,86)] mr-2" />
                                    <p className="text-sm text-gray-600">{area.weekdayHours}</p>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 text-[rgb(222,62,86)] mr-2" />
                                    <p className="text-sm text-gray-600">{area.weekendHours}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.button
                        onClick={() => setShowAllHours(true)}
                        className="px-8 py-4 bg-[rgb(222,62,86)] text-white rounded-full text-lg font-semibold flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(222,62,86,0.8)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Todos los Horarios
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </motion.button>
                </div>

                {showAllHours && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-[rgb(222,62,86)]">Todos los Horarios</h3>
                            {businessAreas.map((area, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="text-lg font-semibold">{area.name}</h4>
                                    <p className="text-sm text-gray-600">{area.weekdayHours}</p>
                                    <p className="text-sm text-gray-600">{area.weekendHours}</p>
                                </div>
                            ))}
                            <motion.button
                                onClick={() => setShowAllHours(false)}
                                className="mt-6 px-6 py-2 bg-[rgb(222,62,86)] text-white rounded-full text-base font-semibold"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(222,62,86,0.8)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Cerrar
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default OpeningHours;