import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen bg-[url('https://i.ibb.co/jR60H57/Inter-Plaza-Fondo.png')] bg-cover bg-center bg-opacity-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start p-4 sm:p-6 mt-24 sm:mt-28">
        <Home />
      </main>
    </div>
  );
}

export default App;