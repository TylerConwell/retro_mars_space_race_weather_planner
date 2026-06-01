import React from 'react';
import astronaut from './assets/astronaut_facing_side_space_race.jpg'

// const container_image_style = {
//   backgroundImage: `url(${astronaut})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   height: '100vh',
//   width: '100vw',
// };

// export default function StaticBackground() {
//   return (
//     <div style={container_image_style}>
//       <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20%' }}>
//         Welcome to the Mars Weather API!
//       </h1>
//     </div>
//   );
// }


export default function App() {
  return (
    <div className="relative h-screen overflow-hidden">

      <img 
        src={astronaut}
        alt="Astronaut in retro background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <button className="border-4 border-emerald-500 ring-4 ring-blue-500 ring-offset-4 rounded-xl">
        Perfectly Rounded Corners
      </button>

      <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-6 rounded">
          Welcome to the Mars Weather API!
        </h1>
      </div>

    </div>

  );
}