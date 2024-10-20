import React from 'react';
import Carousel from './Carousel';
import Partners from './InfinitePartnerCarousel';
import Component from './Categorias-InterPlaza';

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
            <Carousel />
            <div className="mt-8 text-center">
                <Partners />
            </div>
            <div className="mt-8">
                <Component />
            </div>
        </div>
    );
};

export default Home;