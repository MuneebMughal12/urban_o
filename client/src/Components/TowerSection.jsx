import React from "react";
import { motion } from "framer-motion";
import Aboutbg from "../assets/Aboutbg.png";
import imagineBg from "../assets/imagine.jpg";
import skydle from "../assets/skydle.png";

const TowerSection = () => {
  const features = [
    "State-of-the-Art Design",
    "01 Dedicated Parking Floors",
    "Paradise Complex Location",
    "Structural Design As per Standard",
    "Authentic Firm Design Inn",
    "Monitoring by Design Inn",
    "Ceiling Height 11 ft.",
    "Penthouse Ceiling Height 11 ft.",
    "Specially Designed Vertical Louvers on the Building for Heat & Wind Control",
    "Garbage Tube Each Floor",
    "01 Cargo Lift",
    "2 Passenger Lift",
    "Service Area",
    "05 Residential Floors",
    "1 Floors Split Type Penthouses",
  ];

  return (
    <div className="w-full">
      {/* Tower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#142B2B] text-white min-h-screen w-full">
        {/* Left Side - Features */}
        <div className="flex flex-col items-center justify-center p-6 lg:p-10 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">THE URBAN OASIS</h1>
          <p
            className="text-2xl lg:text-4xl"
            style={{
              textShadow:
                "rgba(10, 189, 240, 0.298) 3px 3px 0px, rgba(254, 1, 1, 0.298) -3px -3px 0px",
            }}
          >
            MODERN LIVING
          </p>
          <ul className="mt-5 space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-white text-lg lg:text-xl flex items-center"
                style={{
                  textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
                }}
              >
                <span className="text-white mr-2">&#9670;</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Building Image */}
        <div className="relative">
          <motion.img
            src={Aboutbg}
            alt="The Urban Oasis"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] sm:h-[323px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imagineBg})` }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#142B2B] bg-black/50 px-4">
          <h1
            className="text-4xl sm:text-6xl"
            style={{ fontFamily: '"Snell Roundhand LT Script", cursive' }}
          >
            imagine
          </h1>
          <h2 className="text-xl sm:text-3xl font-bold text-center">
            <span className="font-bold"> A home </span> from where you can see your entire city!
          </h2>
          <p className="mt-2 text-center text-lg sm:text-2xl max-w-4xl">
            See <strong>The Urban Oasis</strong> like you have never seen it before. See it from
            above everything and everyone else.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16 py-10 items-center">
        {/* Left Side - Image */}
        <div className="w-full">
          <img src={skydle} alt="Engineers" className="w-full h-auto" />
        </div>

        {/* Right Side - Stats */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold">A VERTICAL WORK OF ART</h2>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-6 text-lg font-semibold text-gray-900">
            {[
              { number: "2", label: "Penthouses" },
              { number: "6", label: "Three Bed Apartments" },
              { number: "26", label: "Two Bed Apartments" },
              { number: "6", label: "One Bed Apartments" },
              { number: "2", label: "Shopping Outlets" },
              { number: "35", label: "Parking Facility" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl sm:text-4xl font-bold">{item.number}</p>
                <hr className="w-6 sm:w-8 border-t-2 border-gray-600 my-1" />
                <p className="text-base sm:text-lg text-gray-500 uppercase">{item.label}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={() => window.open("https://wa.me/+9203119019327", "_blank")}
            className="mt-6 w-48 h-12 flex justify-center items-center bg-[#142B2B] hover:bg-[#FF4040] text-white font-bold uppercase tracking-wider transition-all duration-300"
          >
            WhatsApp us
          </button>
        </div>
      </div>
    </div>
  );
};

export default TowerSection;
