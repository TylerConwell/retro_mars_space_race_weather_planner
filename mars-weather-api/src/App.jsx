import React, { useState, useEffect } from 'react';
import astronaut from './assets/astronaut_facing_side_space_race.jpg';
import sun from './assets/sun_walk.png';
import hot_sun from './assets/hot_sun_walk.png';

export default function App() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 'C' for Celsius, 'F' for Fahrenheit
  const [unit, setUnit] = useState('C'); 

  useEffect(() => {
    fetch('https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        const rawSols = data.soles.slice(0, 7);
        
        const formattedData = rawSols.map((solItem) => {
          const dateObj = new Date(solItem.terrestrial_date);
          const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

          return {
            day: dayName,
            sol: solItem.sol,
            // Keep the raw temperatures as numbers (or null) so we can calculate conversions easily
            dayTempC: solItem.max_temp ? parseInt(solItem.max_temp, 10) : null,
            nightTempC: solItem.min_temp ? parseInt(solItem.min_temp, 10) : null,
          };
        }).reverse();

        setForecastData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Helper function to format temperatures based on the selected unit
  const formatTemp = (tempInC) => {
    if (tempInC === null || tempInC === undefined) return 'N/A';
    
    if (unit === 'F') {
      const tempInF = Math.round((tempInC * 9) / 5 + 32);
      return `${tempInF}°F`;
    }
    
    return `${tempInC}°C`;
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center p-4">
      <img 
        src={astronaut}
        alt="Astronaut in retro background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Header & Unit Switcher Container */}
      <header className="absolute top-0 left-0 w-full flex flex-col items-center pt-6 z-10 gap-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold bg-emerald-500/60 border-4 border-black rounded-3xl p-6 md:p-8 shadow-lg">
          7 DAY FORECAST AT GALE CRATER, MARS
        </h1>

        {/* Toggle Switch Button */}
        <button 
          onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
          className="text-white text-sm md:text-base font-black bg-lime-900 hover:bg-lime-800 border-4 border-black rounded-xl px-4 py-2 transition-all duration-100 active:scale-95 shadow-md"
        >
          DISPLAY: <span className="text-lime-300">{unit === 'C' ? '°CELSIUS' : '°FAHRENHEIT'}</span>
        </button>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl flex flex-row gap-2 md:gap-4 justify-between mt-32 z-10 px-2">
        {loading && (
          <div className="text-white text-2xl font-bold bg-black/50 p-6 rounded-xl mx-auto">
            CONNECTING TO MARS...
          </div>
        )}

        {error && (
          <div className="text-red-500 text-xl font-bold bg-black/80 p-6 rounded-xl mx-auto border-2 border-red-500">
            ERROR LOADING TELEMETRY: {error}
          </div>
        )}
        
        {!loading && !error && forecastData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-3 min-w-0">
            
            {/* Day Weather Card */}
            <div className="w-full aspect-[2/3] max-h-[50vh] bg-lime-950 border-2 md:border-4 border-black rounded-sm flex flex-col items-center justify-between py-4 text-white">
              <h1 className="text-sm md:text-xl font-bold text-center truncate w-full px-1">
                {data.day}
              </h1>
              
              <h2 className="text-[10px] md:text-xs tracking-wide text-lime-300 truncate w-full text-center">
                SOL: {data.sol}
              </h2>
              
              {/* Conditional Image Swap */}
              <img
                src={data.dayTempC !== null && data.dayTempC >= 0 ? hot_sun : sun}
                alt={data.dayTempC !== null && data.dayTempC >= 0 ? "Hot sun walking on Mars" : "Sun walking on Mars"}
                className="w-12 h-12 md:w-24 md:h-24 object-contain my-2"
              />
              
              {/* Dynamic Day Temp */}
              <h1 className="text-sm md:text-xl font-bold text-center truncate w-full px-1">
                {formatTemp(data.dayTempC)}
              </h1>
            </div>

            {/* Night Weather Card */}
            <div className="w-full text-center">
              {/* Dynamic Night Temp */}
              <p className="text-white text-xs md:text-base font-semibold bg-lime-950 border-2 md:border-4 border-black rounded-sm p-2 block truncate">
                {formatTemp(data.nightTempC)}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}