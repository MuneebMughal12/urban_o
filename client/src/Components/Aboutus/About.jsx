import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import ABOUT from "./Aboutusbg.jpg";
import Aminities from "./Aminities.png";
import skydle from "./skydle.png";
import Ceo from "./ceo.jpeg";
import Logo from "./logo_12345-removebg-preview.png"




const About = () => {

  return (
    <div style={{ fontFamily: '"Montserrat', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
      {/* Background image Section */}
      <div className="relative w-full h-[64vh] overflow-hidden ">
        <img src={ABOUT} alt="Units Background" className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            ABOUT US
          </motion.h1>
        </div>
      </div>

      {/* About Us Content deatail */}
      <div className="min-h-screen bg-[#142B2B] justify-around text-white px-10 py-16 flex flex-col lg:flex-row items-start " >
        {/* Left Side - About Us Section */}
        <div className="lg:w-1/2" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          {/* Logo and Title */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-semibold text-white">JASMIL Properties</h1>
            <p className="text-white text-sm uppercase tracking-widest">
              Secure | Affordable | Comfort
            </p>
          </div>

          {/* About Us Content */}
          <h2 className="mt-6 text-2xl font-light">ABOUT US</h2>
          <p className="mt-2 text-lg text-white">A Tradition of Excellence, Integrity, and Service.</p>
          <p className="mt-4 text-lg text-white leading-relaxed">
            Jasmil Properties Limited is a Ghanaian-owned real <br /> estate and property management
            company with strategic <br /> international partners. As one of the rapidly growing <br />

            <p className="mt-4 text-lg text-white leading-relaxed"> real
              estate companies headquartered in Accra, Ghana, <br /> we specialize in the development of
              both economical <br /> and premium residential and commercial properties.
            </p>
          </p>
          <p className="mt-4 text-lg text-white">
            Our focus is on emerging and prime areas in Accra and
            its environs.
          </p>

          {/* Head Office Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Head Office:</h3>
            <p className="text-white text-lg">North Industrial Area, Accra.</p>
          </div>

          {/* Urban Oasis Branding */}
          <div className="mt-10 flex items-center space-x-4">
            {/* Logo */}
            <img src={Logo} alt="Urban Oasis Logo" className="w-40 h-40  object-contain" />
          </div>
        </div>

        {/* Right Side - Successful Projects */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-2xl font-light text-yellow-500">SUCCESSFUL PROJECTS</h2>
          <ul className="mt-6 space-y-4">
            {[
              "The Golden Hive",
              "The Jasmil Heights",
              "The Jasmil Luxury",
              "Opulent Hills",
              "Luxe Vista",
              "Oserenity Manor",
              "Luxe Haven",
              "The Jasmil Heights",
            ].map((project, index) => (
              <li key={index} className="text-lg font-semibold text-white">
                {project}
                <p className="text-yellow-500 text-sm">Heart of Accra, Ghana</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Vision &mission Section */}
      <div className="flex flex-col items-center justify-center py-16 px-8 bg-white" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {/* Vision Section */}
          <div className="relative">
            <img
              src={Aminities}
              alt="Vision"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center relative text-[#142B2B]">
            <h2 className="text-5xl items-center flex justify-center  font-bold mb-4">Vision</h2>
            <p className=" text-2xl text-[#142B2B]">
              THE URBAN OASIS & Luxury Suites is a high -rise, state-of-the-
              Art building providing premium and futur istic lifestyle. We
              commit to deliver quality, attain high customer satisfaction and
              provide exemplary services.TUO is all about high standard lifestyle- with smart design.
            </p>
            <div className="absolute border-black top-0 right-0 border-t-4 border-r-4 w-16 h-16"></div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col justify-center relative text-[#142B2B]">
            <h2 className="text-5xl items-center flex justify-center font-bold mb-4">Mission</h2>
            <p className="text-2xl  text-[#142B2B]">
              Our vision is to be the preferred partner in Ghana's real estate industry, providing
              exceptional properties and services to our clients. <br />
              Our mission is to exceed customer expectations by delivering quality houses
              centered on customer needs, innovation, timely delivery, and the highest degree of
              professionalism and ethics in the real estate industry in Ghana.
            </p>
            <div className="absolute bottom-0 border-black -left-6 border-b-4 border-l-4 w-16 h-16"></div>
          </div>
          <div className="relative">
            <img
              src={skydle}
              alt="Mission"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t  border-gray-500 my-12"></div>
      <div className="relative  text-[#142B2B] flex flex-col lg:flex-row items-center  justify-around p-10 lg:p-20" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 " style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          <h2 className="text-5xl font-light uppercase tracking-wider text-[#142B2B]">CEO Message</h2>
          <p className="mt-6 text-xl text-[#142B2B]  leading-relaxed">
            After serving over 10 years in the real estate construction business, I feel privileged writing
            this message as the chief executive officer of The Jamsil Properties. This is a very special time,
            aiming to become the real estate leaders in Accra,Ghana. we are celebrating the launch of our
            company . With an impeccable experience of 2 decades in
            construction and building sector, we have delivered quality projects across the country. I believe
            that construction is the need of civilized communities . I am fortunate enough that my
            passion has become my profession, as I take pride in transforming dreams into reality, through
            planning, building and completing projects with utmost dedication
          </p>
          <p className="mt-4 text-xl text-[#142B2B]">
            We have planned to expand our presence globally, by providing exceptional client services and
            liveability following our core values; excellence, leading by example, integrity and transparency
            , focusing comprehensively on the client and employee-centered attitude.
          </p>
          <p className="mt-4 text-xl text-[#142B2B]">
            We will remain focused on accelerating the execution of our growth strategy while continuing
            to build on the strength of our brand, by facilitating our clients through sharing knowledge and
            creating innovation, resulting in bringing positive change to the communities in which we work
            and live. I am incredibly excited about this journey and truly believe the best of real estate
            business is yet to come.
          </p>
          <div className="mt-6">
            <h3 className="text-4xl text-[#142B2B]  font-semibold">P.K APPIAH</h3>
            <p className=" text-xl text-[#142B2B]">Chief Executive Officer</p>
            <p className=" text-xl text-[#142B2B]">The Jamsil Properties</p>
          </div>
        </div>

        {/* Right Side - Image with Overlay Design */}
        <div className="relative mt-10 lg:mt-0 lg:ml-10">
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gray-900 rounded-full overflow-hidden">
            <img
              src={Ceo}
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
//  {/* Description */}
//  <motion.div
//  className="bg-[#142B2B] flex flex-col items-center text-white text-lg p-8 mt-12"
//  initial={{ opacity: 0, y: 50 }}
//  animate={{ opacity: 1, y: 0 }}
//  transition={{ duration: 1 }}
// >
//  <p className="text-center max-w-5xl"
//  >
//    Jasmil Properties Limited is a Ghanaian -owned real
//    estate and property management company with strategic
//    international partners. As one of the rapidly growing{" "}

//    <strong>real estate companies headquartered in Accra, Ghana,</strong>
//    we specialize in the development of both economical
//    and premium residential and commercial properties
//  </p>

//  <p className="mt-4 text-center max-w-5xl">
//    Our focus is on emerging and prime areas in Accra and
//    its environs
//  </p>
//  <p className="mt-4 text-center font-bold max-w-5xl">
//    Head Office:
//  </p>

//  <p className="mt-4 text-center max-w-5xl">
//    North Industrial Area, Accra{" "}

//  </p>
// </motion.div>