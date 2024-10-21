import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import InfinitePartnerCarousel from './components/InfinitePartnerCarousel';
import OpeningHours from './components/OpeningHours';
import EventsAndActivities from './components/EventsAndActivities';
import WorkWithUsSection from './components/WorkWhitUsSection';
import SuscribeSection from "./components/SuscribeSection.tsx";

function App() {
    return (
        <div className="min-h-screen relative flex flex-col">
            <div className="absolute inset-0 bg-[url(https://i.ibb.co/tDLwxWZ/Inter-Plaza-Fondo.png')] bg-cover bg-center opacity-50"></div>
            <div className="absolute inset-0 bg-white opacity-80"></div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar/>
                <main className="flex-grow flex flex-col items-center justify-start p-4 sm:p-6 mt-24 sm:mt-28">
                    <Home/>
                    <div
                        className="w-full max-w-7xl mx-auto my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
                    <div className="w-full text-center">
                        <InfinitePartnerCarousel/>
                    </div>
                    <div
                        className="w-full max-w-7xl mx-auto my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
                    <div className="w-full">
                        <Categories/>
                    </div>
                    <div
                        className="w-full max-w-7xl mx-auto my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
                    <div className="w-full">
                        <OpeningHours/>
                    </div>
                    <div
                        className="w-full max-w-7xl mx-auto my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
                    <div className="w-full">
                        <EventsAndActivities/>
                    </div>

                </main>
                <div className="w-full">
                    <SuscribeSection/>
                </div>
                {/* Aquí separas la sección de WorkWithUs */}
                <div className="w-full">
                    <WorkWithUsSection/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
