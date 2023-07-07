"use client";

import "tailwindcss/tailwind.css";

export default function NavBar() {
  return (
    <div className="h-24 bg-nav-bar rounded-b-lg flex justify-around">
      <h1 className="absolute">Gamepad Tester</h1>
      <button className="bg-nav-bar-content rounded-lg p-2 max-h-12 mt-auto">Button 1</button>
      <button className="bg-nav-bar-content rounded-lg p-2 max-h-12 mt-auto">Button 2</button>
      <button className="bg-nav-bar-content rounded-lg p-2 max-h-12 mt-auto">Button 3</button>
      <button className="bg-nav-bar-content rounded-lg p-2 max-h-12 mt-auto">Button 4</button>
      <button className="bg-nav-bar-content rounded-lg p-2 max-h-12 mt-auto">Button 5</button>
    </div>
  );
}
