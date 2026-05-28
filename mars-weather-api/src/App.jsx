import React from 'react';

// 1. Define the full Tailwind classes in a dictionary mapping object
const BANNER_STYLES = {
  success: "bg-emerald-500 text-white",
  warning: "bg-amber-400 text-amber-950",
  danger: "bg-rose-600 text-white",
  info: "bg-sky-500 text-white",
};

export default function Banner({ variant = "info", title, message }) {
  // 2. Safely grab the exact compiled classes based on the prop
  const variantClass = BANNER_STYLES[variant] || BANNER_STYLES.info;

  return (
    // <div className={`flex flex-col md:flex-row gap-2 p-4 rounded-md shadow-sm ${variantClass}`}>
   <div className="h-screen w-screen bg-[url('/assets/astronaut_facing_side_space_race.jpg')] bg-cover bg-center">
  {/* Content goes here */}
    </div>
    // </div>
  );
}

