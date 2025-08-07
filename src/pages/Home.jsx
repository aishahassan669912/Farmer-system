import React from "react";

function Navbar() {
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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center text-white pt-24"
        style={{ backgroundImage: "url('/img/2f6abe36-f133-4728-a0c7-cab02daa82c4.png')" }}
        id="home"
      >
        <div className="bg-black bg-opacity-60 min-h-screen flex flex-col justify-center px-8 py-12">
          <h1 className="text-5xl font-bold text-green-400 mb-4 max-w-4xl">
            Support Your Soil, <span className="text-white">Secure Your Future</span>
          </h1>

          <p className="text-lg max-w-3xl mb-6">
            Empowering farmers with knowledge, resources, and innovative tools to build drought resilience and practice sustainable agriculture.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-xl font-semibold">10,000+ Farmers Supported</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-xl font-semibold">Sustainable Practices</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-xl font-semibold">Drought Resilience</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12" id="tips">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold">
              Get Farming Tips
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-full font-semibold">
              Learn About Drought
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg max-w-4xl backdrop-blur-sm" id="knowledge">
            <h2 className="text-3xl font-bold mb-2 text-green-300">
              Essential Farming Knowledge
            </h2>
            <p className="text-base mb-4">
              Learn about soil health, crop rotation, irrigation techniques, climate-smart agriculture, pest management, and the use of data-driven tools to optimize yields while preserving natural resources.
            </p>

            <h2 className="text-3xl font-bold mb-2 text-green-300" id="mission">
              Our Mission: Building Resilient Farming Communities
            </h2>
            <p className="text-base">
              We aim to provide farmers with the education, support, and digital tools necessary to adapt to climate challenges, boost productivity, and ensure long-term food security for communities around the world.
            </p>
          </div>

          <div className="mt-12 text-sm text-gray-300" id="contact">
            <p>Success Rate: <span className="font-bold text-green-400">95%</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
