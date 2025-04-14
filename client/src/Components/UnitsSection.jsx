import React from "react";
import TowerImage2 from "../assets/TowerSection2.png";
import imagineBg from "../assets/imagine.jpg";
import { Link } from "react-router-dom";

const UnitsSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] sm:h-[323px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imagineBg})` }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#142B2B] bg-black/50 px-4 text-center">
          <h1 className="text-4xl sm:text-6xl" style={{ fontFamily: '"Snell Roundhand LT Script", cursive' }}>
            imagine
          </h1>
          <h2 className="text-xl sm:text-3xl font-bold">
            <span className="font-bold" style={{ fontFamily: 'Montserrat' }}> A home </span> from where you can see your entire city!
          </h2>
          <p className="mt-2 text-sm sm:text-2xl max-w-4xl" style={{ fontFamily: 'Montserrat' }}>
            See <strong>The Urban Oasis</strong> like you have never seen it before.
            See it from above everything and everyone else. We bet you’ll feel
            nothing less than what it feels like being on cloud nine.
          </p>
        </div>
      </div>

      {/* Units Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:h-screen items-center">
        {/* Image - Spanning 2 columns on large screens */}
        <div className="lg:col-span-2">
          <img
            src={TowerImage2}
            alt="Luxury Apartment"
            className="w-full h-auto lg:h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:text-left space-y-6">
          <h2 className="text-2xl sm:text-5xl font-semibold tracking-wide text-[#142B2B]">
            UNITS
          </h2>
          <div className="space-y-2 sm:space-y-4">
            <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">3 BHK Apartments</p>
            <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">4 BHK Apartments</p>
            <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">Pent House</p>
          </div>
          <Link to="/units" className="no-underline">
            <button className="mt-4 sm:mt-6 bg-[#142B2B] text-white px-4 sm:px-6 py-2 font-semibold rounded-md hover:bg-[#FF4040] transition">
              View More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnitsSection;
