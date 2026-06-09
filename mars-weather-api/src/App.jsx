import React from 'react';
import astronaut from './assets/astronaut_facing_side_space_race.jpg'
import './assets/sun_walk.png'

export default function App() {
  return (
    <div className="relative h-screen overflow-hidden">

      <img 
        src={astronaut}
        alt="Astronaut in retro background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <header className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
        {/* Using the modern slash syntax for guaranteed background opacity */}
        <h1 className="text-white text-4xl font-bold bg-emerald-500/60 border-4 border-black rounded-3xl p-8">
          7 DAY FORECAST
        </h1>
      </header>


      <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm">
        <h1 className="text-white text-2xl font-bold text-center mt-6">
          MARS WEATHER
        </h1>
        <img
          src="./assets/sun_walk.png"
          alt="Sun walking on Mars"
          className="mx-auto mt-4 w-32 h-32"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-6 z-10">
        <p className="text-white text-lg font-semibold bg-lime-950 border-4 border-black rounded-sm p-4">
          12°C
        </p>
      </div>


      

    </div>
  );
}
