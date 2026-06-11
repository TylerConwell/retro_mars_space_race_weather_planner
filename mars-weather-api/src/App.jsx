// import React from 'react';
// import astronaut from './assets/astronaut_facing_side_space_race.jpg'
// import sun from './assets/sun_walk.png'

// export default function App() {
//   return (
//     <div className="relative h-screen overflow-hidden">

//       <img 
//         src={astronaut}
//         alt="Astronaut in retro background"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       <header className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
//         {/* Using the modern slash syntax for guaranteed background opacity */}
//         <h1 className="text-white text-4xl font-bold bg-emerald-500/60 border-4 border-black rounded-3xl p-8">
//           7 DAY FORECAST
//         </h1>
//       </header>

//       {/* sunday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           SUN
//         </h1>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -84°C
//         </h1>
//       </div>

//       {/* monday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm left-1/2 transform -translate-x-1/2">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           MON
//         </h1>
//         <h2>SOL: 234</h2>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -82°C
//         </h1>
//       </div>

//       {/* night weather card */}
//       <div className="absolute bottom-0 left-0 w-full flex justify-center pb-6 z-10">
//         <p className="text-white text-lg font-semibold bg-lime-950 border-4 border-black rounded-sm p-4">
//           12°C
//         </p>
//       </div>

//       {/* tuesday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           TUE
//         </h1>
//         <h2>SOL: 235</h2>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -84°C
//         </h1>
//       </div>

//       {/* wednesday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm left-1/2 transform -translate-x-1/2">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           WED
//         </h1>
//         <h2>SOL: 236</h2>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -82°C
//         </h1>
//       </div>

//       {/* night weather card */}
//       <div className="absolute bottom-0 left-0 w-full flex justify-center pb-6 z-10">
//         <p className="text-white text-lg font-semibold bg-lime-950 border-4 border-black rounded-sm p-4">
//           12°C
//         </p>
//       </div>

//   {/* thursday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           THU
//         </h1>
//         <h2>SOL: 237</h2>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -84°C
//         </h1>
//       </div>

//       {/* friday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm left-1/2 transform -translate-x-1/2">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           FRI
//         </h1>
//         <h2>SOL: 238</h2>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -82°C
//         </h1>
//       </div>

//        {/* night weather card */}
//       <div className="absolute bottom-0 left-0 w-full flex justify-center pb-6 z-10">
//         <p className="text-white text-lg font-semibold bg-lime-950 border-4 border-black rounded-sm p-4">
//           12°C
//         </p>
//       </div>

//       {/* saturday weather card */}
//       <div className="w-64 h-96 bg-lime-950 border-4 border-black rounded-sm left-1/2 transform -translate-x-1/2">
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           SAT
//         </h1>
//         <h2>SOL: 238</h2>
//         <img
//           src= {sun}
//           alt="Sun walking on Mars"
//           className="mx-auto mt-4 w-32 h-32"
//         />
//         <h1 className="text-white text-2xl font-bold text-center mt-6">
//           -82°C
//         </h1>
//       </div>

//     </div>
//   );
// }



import React from 'react';
import astronaut from './assets/astronaut_facing_side_space_race.jpg';
import sun from './assets/sun_walk.png';

export default function App() {
  const forecastData = [
    { day: "SUN", sol: "233", dayTemp: "-82°C", nightTemp: "-12°C" },
    { day: "MON", sol: "234", dayTemp: "-76°C", nightTemp: "-38°C" },
    { day: "TUE", sol: "235", dayTemp: "-80°C", nightTemp: "-30°C" },
    { day: "WED", sol: "236", dayTemp: "-49°C", nightTemp: "-29°C" },
    { day: "THU", sol: "237", dayTemp: "-79°C", nightTemp: "-19°C" },
    { day: "FRI", sol: "238", dayTemp: "-82°C", nightTemp: "-12°C" },
    { day: "SAT", sol: "239", dayTemp: "-84°C", nightTemp: "-25°C" },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center p-4">

      <img 
        src={astronaut}
        alt="Astronaut in retro background"
        className="absolute inset-0 w-fit h-fit object-cover -z-10"
      />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
        <h1 className="text-white text-3xl md:text-4xl font-bold bg-emerald-500/60 border-4 border-black rounded-3xl p-6 md:p-8">
          7 DAY FORECAST
        </h1>
      </header>

      {/* Main Container: Forces items to fit the viewport width exactly */}
      <div className="w-full max-w-7xl flex flex-row gap-2 md:gap-4 justify-between mt-20 z-10 px-2">
        
        {forecastData.map((data, index) => (
          // flex-1 forces each of the 7 columns to take up equal, scaling space
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