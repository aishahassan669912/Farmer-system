// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-green-700 bg-opacity-90 text-white py-4 px-8 flex justify-between items-center shadow-md fixed w-full z-50">
      <div className="text-2xl font-bold">AgriResilience</div>
      <ul className="flex space-x-6 text-sm font-semibold">
        <li><a href="#home" className="hover:text-green-200">Home</a></li>
        <li><a href="#tips" className="hover:text-green-200">Farming Tips</a></li>
        <li><a href="#knowledge" className="hover:text-green-200">Knowledge</a></li>
        <li><a href="#mission" className="hover:text-green-200">Our Mission</a></li>
        <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
      </ul>
    </nav>
  );
}
