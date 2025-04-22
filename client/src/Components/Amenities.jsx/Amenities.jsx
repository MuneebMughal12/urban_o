import React from "react";
import "tailwindcss/tailwind.css";
import Aminities from "./Amenities.jpg";
import { motion } from "framer-motion";
import Gym from "./gym.jpg"
import Spa from "./spa.jpg"
import imagineBg from "./imagine.jpg";
import MiniTheater from "./Mini.jpg";
import RoofTopCafe from "./rooftopcafe.jpg";
import KID from "./kidplyaing.jpg";
import GARBAGE from "./garbgeshooot.jpeg";
import RomanticGetaway from "./RomanticGetaway.png";



const Amenities = () => {
  return (
    <div style={{ fontFamily: 'Montserrat'  ,   
      textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
    }}>
       {/* Background image */}
           <div className="relative w-full h-[64vh] overflow-hidden">
             <img src={Aminities} alt="Units Background" className="absolute top-0 left-0 w-full h-full" />
             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
               <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1 }}
                 className="text-6xl font-bold"
               >
                 Aminities
               </motion.h1>
             </div>
           </div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[323px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imagineBg})` }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="absolute gap-3 inset-0 flex flex-col  items-center justify-center text-[#142B2B] bg-black/50">
          <h1 className="text-6xl italic">imagine</h1>
          <h2 className="text-3xl font-bold text-center">
            <span className="font-bold"> LIFE STYLES </span>
          </h2>
          <p className="mt-2 text-center text-2xl max-w-7xl">
            <strong>WITH FACILITIES </strong> OF THE FUTURE
          </p>
        </div>
      </div>

      <section className="bg-[#142B2B] py-10 px-4">
        {/* First Section - Gym */}
        <div className="grid grid-cols-2 items-center justify-center text-white">
          {/* Left Side - Gym Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={Gym}
              alt="Gym"
              className="w-full h-[572px] object-cover"
            />
          </div>

          {/* Right Side - Gym Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col text-gold p-10 items-center justify-center"
          >
            <h2 className="text-center md:text-7xl text-5xl font-bold text-gold mb-10">
              BEST SLICE OF LIFE
            </h2>
          </motion.div>
        </div>

        {/* Second Section - Spa */}
        <div className="grid grid-cols-2 items-center justify-center text-white mt-10">
          {/* Left Side - Spa Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col text-white p-10 items-center justify-center"
          >
            <p className="text-lg text-center">
              Our living space extends beyond your front door with outstanding <br />
              community amenities. Get rejuvenated after a long day in our Spa. Stay <br />
              fit in our fully equipped fitness centre. Our friendly staff, concierge <br />
              cater your needs creating a unique sense of community.
            </p>
          </motion.div>

          {/* Right Side - Spa Image */}
          <div className="relative overflow-hidden mt-1">
            <motion.img
              src={Spa}
              alt="Spa"
              className="w-full h-[572px] object-cover"
            />
          </div>
        </div>
        {/* Cafe Section */}
        <div className="grid grid-cols-2 items-center mt-10">
          {/* Left Side - Cafe Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={RoofTopCafe}
              alt="Roof Top Cafe"
              className="w-full h-[572px] object-cover"
            />
          </div>

          {/* Right Side - Cafe Title */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center text-right pr-10"
          >
            <h2 className="md:md:text-4xl text-2xl  font-bold text-[white]">ROOF TOP CAFE</h2>
          </motion.div>
        </div>

        {/* Mini Theater Section */}
        <div className="grid grid-cols-2 items-center mt-10">
          {/* Left Side - Mini Theater Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center pl-10"
          >
            <h2 className="md:text-4xl text-2xl font-bold text-[white] ">MINI THEATER</h2>
          </motion.div>

          {/* Right Side - Mini Theater Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={MiniTheater}
              alt="Mini Theater"
              className="w-full h-[572px] object-cover"
            />
          </div>
        </div>

        {/* INSIDE KID PLAYING AREA Section */}
        <div className="grid grid-cols-2 items-center mt-10">
          {/* Left Side - v Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={KID}
              alt="Roof Top Cafe"
              className="w-full h-[572px] object-cover"
            />
          </div>

          {/* Right Side - INSIDE KID PLAYING AREA Title */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center text-right pr-10"
          >
            <h2 className="md:text-4xl text-2xl font-bold text-[white]">INSIDE KID PLAYING AREA</h2>
          </motion.div>
        </div>

        {/* GARBAGE SHOOT SYSTEM Section */}
        <div className="grid grid-cols-2 items-center mt-10">
          {/* Left Side - Mini Theater Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center pl-10"
          >
            <h2 className="md:text-4xl text-2xl font-bold text-[white] ">GARBAGE SHOOT SYSTEM</h2>
          </motion.div>

          {/* Right Side - GARBAGE SHOOT SYSTEM Image */}
          <div className="relative overflow-hidden">
            <motion.img
              src={GARBAGE}
              alt="Mini Theater"
              className="w-full h-[572px] "
            />
          </div>
        </div>

        {/* RomanticGetaway  */}

        <div className="bg-[#142B2B] text-white p-10">
          {/* Title Section */}
          <div className="flex flex-col items-start">
            <h2 className="md:text-4xl text-3xl font-bold text-[white]">PERFECT</h2>
            <h2 className="md:text-4xl text-3xl font-bold text-[white]">ROMANTIC GETAWAY</h2>
          </div>

          {/* Image and Content Section */}
          <div className="relative mt-10">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              src={RomanticGetaway}
              alt="Romantic Getaway"
              className="w-full h-[70vh]  object-cover rounded-lg shadow-lg"
            />

            {/* Bottom Content  */}
          </div>
          <p className="text-lg md:text-base lg:text-lg">
            Immerse into the clear crystal water of your own private <br />
            swimming pool or read an interesting book laying on the <br />
            rest chair at the pool deck. To strengthen your relationship <br />
            the next romantic getaway is within your reach.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
