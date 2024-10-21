import React from 'react';
import { motion } from 'framer-motion';

const WorkWithUsSection: React.FC = () => {

    const handleButtonClick = () => {
        window.location.href = '/formulario'; // Ruta a la página del formulario
    };

    return (
        <div className="relative w-full h-[50vh] sm:h-[40vh] md:h-[30vh] lg:h-[25vh] flex items-center justify-center">
            {/* Fondo con imagen */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('https://i.ibb.co/xDgczz6/Fondo-Trabajo.png')` }}
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            />

            {/* Filtro oscuro sobre la imagen */}
            <motion.div
                className="absolute inset-0 w-full h-full bg-black opacity-50"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            />

            {/* Contenido centrado */}
            <div className="relative z-10 text-center px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ¡Únete a nuestro equipo en InterPlaza!
                </motion.h2>

                <motion.button
                    onClick={handleButtonClick}
                    className="mt-4 px-6 py-3 bg-[rgb(222,62,86)] text-white text-lg font-semibold rounded-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(222,62,86,0.8)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Llena el Formulario
                </motion.button>
            </div>
        </div>
    );
};

export default WorkWithUsSection;