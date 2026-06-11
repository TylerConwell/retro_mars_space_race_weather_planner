// import React from 'react';
// import astronaut from './assets/astronaut_facing_side_space_race.jpg';
// import sun from './assets/sun_walk.png';

// export default function App() {
//   const forecastData = [
//     { day: "SUN", sol: "233", dayTemp: "-82°C", nightTemp: "-12°C" },
//     { day: "MON", sol: "234", dayTemp: "-76°C", nightTemp: "-38°C" },
//     { day: "TUE", sol: "235", dayTemp: "-80°C", nightTemp: "-30°C" },
//     { day: "WED", sol: "236", dayTemp: "-49°C", nightTemp: "-29°C" },
//     { day: "THU", sol: "237", dayTemp: "-79°C", nightTemp: "-19°C" },
//     { day: "FRI", sol: "238", dayTemp: "-82°C", nightTemp: "-12°C" },
//     { day: "SAT", sol: "239", dayTemp: "-84°C", nightTemp: "-25°C" },
//   ];

//   return (
//     <div className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center p-4">

//       <img 
//         src={astronaut}
//         alt="Astronaut in retro background"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Header */}
//       <header className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
//         <h1 className="text-white text-3xl md:text-4xl font-bold bg-emerald-500/60 border-4 border-black rounded-3xl p-6 md:p-8">
//           7 DAY FORECAST
//         </h1>
//       </header>

//       {/* Main Container: Forces items to fit the viewport width exactly */}
//       <div className="w-full max-w-7xl flex flex-row gap-2 md:gap-4 justify-between mt-20 z-10 px-2">
        
//         {forecastData.map((data, index) => (
//           // flex-1 forces each of the 7 columns to take up equal, scaling space
//           <div key={index} className="flex-1 flex flex-col items-center gap-3 min-w-0">
            
//             {/* Day Weather Card */}
//             <div className="w-full aspect-[2/3] max-h-[50vh] bg-lime-950 border-2 md:border-4 border-black rounded-sm flex flex-col items-center justify-between py-4 text-white">
//               <h1 className="text-sm md:text-xl font-bold text-center truncate w-full px-1">
//                 {data.day}
//               </h1>
              
//               <h2 className="text-[10px] md:text-xs tracking-wide text-lime-300 truncate w-full text-center">
//                 SOL: {data.sol}
//               </h2>
              
//               <img
//                 src={sun}
//                 alt="Sun walking on Mars"
//                 className="w-12 h-12 md:w-24 md:h-24 object-contain my-2"
//               />
              
//               <h1 className="text-sm md:text-xl font-bold text-center truncate w-full px-1">
//                 {data.dayTemp}
//               </h1>
//             </div>

//             {/* Night Weather Card */}
//             <div className="w-full text-center">
//               <p className="text-white text-xs md:text-base font-semibold bg-lime-950 border-2 md:border-4 border-black rounded-sm p-2 block truncate">
//                 {data.nightTemp}
//               </p>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import astronaut from './assets/astronaut_facing_side_space_race.jpg';
import sun from './assets/sun_walk.png';

export default function App() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the live weather stream from the Curiosity Rover
    fetch('https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // The API returns the most recent data first. 
        // We take the first 7 entries (sol days) and map them to our format.
        const rawSols = data.soles.slice(0, 7);
        
        const formattedData = rawSols.map((solItem) => {
          // Convert the terrestrial date into a standard Day name (e.g., "SUN")
          const dateObj = new Date(solItem.terrestrial_date);
          const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

          return {
            day: dayName,
            sol: solItem.sol,
            // Fallback strings if the rover sensor missed a recording that day
            dayTemp: solItem.max_temp ? `${solItem.max_temp}°C` : 'N/A',
            nightTemp: solItem.min_temp ? `${solItem.min_temp}°C` : 'N/A',
          };
        }).reverse(); // Reverse so it reads chronologically past-to-present left-to-right

        setForecastData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Mars weather:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center p-4">
      <img 
        src={astronaut}
        alt="Astronaut in retro background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
        <h1 className="text-white text-3xl md:text-4xl font-bold bg-emerald-500/70 border-4 border-black rounded-3xl p-6 md:p-8">
          7 DAY FORECAST AT GALES CRATER
        </h1>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl flex flex-row gap-2 md:gap-4 justify-between mt-20 z-10 px-2">
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
              
              <img
                src={sun}
                alt="Sun walking on Mars"
                className="w-12 h-12 md:w-24 md:h-24 object-contain my-2"
              />
              
              <h1 className="text-sm md:text-xl font-bold text-center truncate w-full px-1">
                {data.dayTemp}
              </h1>
            </div>

            {/* Night Weather Card */}
            <div className="w-full text-center">
              <p className="text-white text-xs md:text-base font-semibold bg-lime-950 border-2 md:border-4 border-black rounded-sm p-2 block truncate">
                {data.nightTemp}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}