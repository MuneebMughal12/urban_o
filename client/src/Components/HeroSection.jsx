import React from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from "../assets/Aboutbg.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Background Image */}
    <img
        src={heroImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            lineHeight: "1.5em",
            letterSpacing: "2rem",
            textShadow:
              "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.5) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 5px 10px",
          }}
        >
          WELCOME
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
          style={{
            fontFamily: "futura-lt-w01-light, futura-lt-w05-light, sans-serif",
            lineHeight: "1.8em",
            letterSpacing: "1rem",
            textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
          }}
        >
          The Urban Oasis
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white"
          style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}
        ></motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-6 bg-[#324158] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#FF4040] transition-all text-lg sm:text-xl"
          onClick={() => window.open("https://wa.me/+9203119019327", "_blank")}
        >
          WhatsApp Us
        </motion.button>
      </div>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/+9203119019327"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </a>
    </div>
  );
};

export default HeroSection;
