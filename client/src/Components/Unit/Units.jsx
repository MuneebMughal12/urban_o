import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgunit from "./unitbg.avif";
// import imagineBg from "./imagine.jpg";
// pent
import Pent from "./panthouse.jpeg"
import Pent2 from "./pent/PENT2.png"
import Pent3 from "./pent/PENT3.png"
import Pent4 from "./pent/PENT4.png"
import Pent5 from "./pent/PENT5.png"
import Pent6 from "./pent/PENT6.png"
import Pent7 from "./pent/PENT7.png"
// 1kbh
import KBH from "./1bed.jpg"
// sndtyp1KBH
import sndtyp1KBH from "./2bedtype1.jpg"
import sndtyp1KBH2 from "./two1/5THFLOOR1.png"
import sndtyp1KBH3 from "./two1/5THFLOOR2.png"
import sndtyp1KBH4 from "./two1/5THFLOOR3.png"
import sndtyp1KBH5 from "./two1/5THFLOOR4.png"
import sndtyp1KBH6 from "./two1/5THFLOOR5.png"
import sndtyp1KBH7 from "./two1/5THFLOOR6.png"
import sndtyp1KBH8 from "./two1/5THFLOOR7.png"
// sndtyp2KBH
import sndtyp2KBH from "./2bedtype2.jpg"
import sndtyp2 from "./two/BEDLEFT3.png"
import sndtyp3 from "./two/BEDLEFT1.png"
import sndtyp4 from "./two/BEDLEFT2.png"
import sndtyp5 from "./two/BEDLEFT4.png"
import sndtyp6 from "./two/BEDLEFT5.png"
// 3kbh
import thrdKBH from "./3bed.jpg"
import image2 from "./three/AAP-2.png"
import image3 from "./three/AAP-3.png"
import image4 from "./three/AAP-4.png"
import image5 from "./three/AAP-5.png"
import image6 from "./three/AAP-6.png"
import image7 from "./three/AAP-7.png"
// KBH1
import KBH1 from "./one/BEDSIDE1.png"
import KBH2 from "./one/BEDSIDE2.png"
import KBH3 from "./one/BEDSIDE3.png"
import KBH4 from "./one/BEDSIDE4.png"
import KBH5 from "./one/BEDSIDE5.png"
// All fllor plane
import Basment from "./ALLFLOORPLAN/PLAN1.jpg"
import Ground from "./ALLFLOORPLAN/PLAN2.jpg"
import one from "./ALLFLOORPLAN/PLAN3.jpg"
import snd from "./ALLFLOORPLAN/PLAN4.jpg"
import third from "./ALLFLOORPLAN/PLAN5.jpg"
import forth from "./ALLFLOORPLAN/PLAN6.jpg"
import fith from "./ALLFLOORPLAN/PLAN7.jpg"
import sixth from "./ALLFLOORPLAN/PLAN8.jpg"
import seven from "./ALLFLOORPLAN/PLAN9.jpg"

// slider
// import SLIDER5 from "./SLIDER/silder5.png"
import SLIDER1 from "./SLIDER/slider1.jpg"
import SLIDER2 from "./SLIDER/slider2.jpg"
import SLIDER3 from "./SLIDER/slider3.jpg"
import SLIDER4 from "./SLIDER/slider4.jpg"


const FloorPlanItem = ({ plan, setSelectedImage }) => (
  <div className="text-center space-y-8 flex flex-col items-center">
    <h3 className="text-4xl font-bold">{plan.name}</h3>
    <button
      className="mt-4 px-4 py-2 bg-white text-black rounded-full border-2 border-transparent 
      hover:bg-[#122424] hover:text-white hover:border-white"
      onClick={() => setSelectedImage(plan.image)}
    >
      ENTER
    </button>
  </div>
);

const MasterPlan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const openSlider = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const closeSlider = () => {
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const images = [
    // SLIDER5,
    SLIDER1,
    SLIDER2,
    SLIDER3,
    SLIDER4,
  ];

  const plan = [
    { name: "Basement", image: Basment },
    { name: "Ground", image: Ground },
    { name: "1st Floor", image: one },
    { name: "2nd Floor", image: snd },
    { name: "3rd Floor", image: third },
    { name: "4th Floor", image: forth },
    { name: "5th Floor", image: fith },
    { name: "6th Floor", image: sixth },
    { name: "7th Floor", image: seven },
  ];

  const UNITS = [
    {
      name: "1 KBH",
      level: "PREMIUM",
      size: "86.00 SQM.",
      images: [KBH, KBH1, KBH2, KBH3, KBH4, KBH5],
    },
  ];

  const BKH = [
    {
      name: "2 KBH",
      level: "PREMIUM Type 1",
      size: "138.487 SQM.",
      images: [sndtyp1KBH, sndtyp1KBH2, sndtyp1KBH3, sndtyp1KBH4, sndtyp1KBH5, sndtyp1KBH6, sndtyp1KBH7, sndtyp1KBH8],
    },
    {
      name: "2 KBH",
      level: "PREMIUM Type 2",
      size: "123.00 SQM.",
      images: [sndtyp2KBH, sndtyp2, sndtyp3, sndtyp4, sndtyp5, sndtyp6],
    },
  ];
  const threeBKH = [
    { name: "3 KBH", level: "PREMIUM", size: "198.52 SQM.", images: [thrdKBH, image2, image3, image4, image5, image6, image7] },
  ];

  const SKYPLEX = [
    { name: "Pent House", level: "PREMIUM", size: "221.35 SQM.", images: [Pent, Pent2, Pent3, Pent4, Pent5, Pent6, Pent7] },
  ];

  return (
    <div style={{ fontFamily: '"Montserrat' }} >

      {/* Background Section */}
      <div className="relative w-full h-[64vh] overflow-hidden">
        <img src={bgunit} alt="Units Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            UNITS
          </motion.h1>
        </div>
      </div>



      {/* Extrior Design */}
      <h1
        className="text-5xl md:text-7xl flex items-center justify-center font-bold text-[#142B2B] mb-6 drop-shadow-lg"
        style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}
      >
        Extrior Design
      </h1>
      <section className="bg-white py-10 px-4 flex justify-center items-center">

        <div className="max-w-[90%] w-full flex justify-center items-center">
          <div className="relative w-full lg:w-[70%]">
            <img
              src={images[currentIndex]}
              alt="Slider Image"
              className="w-full h-auto object-cover rounded-lg transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <div className="bg-[#142B2B] text-white text-center py-20">
        <h1
          className="text-5xl md:text-7xl font-bold text-[white] mb-6 drop-shadow-lg"
          style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}
        >
          FLOOR PLANS
        </h1>
        <div className="w-full flex justify-around">
          <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {plan.slice(0, 3).map((plan, index) => (
            <FloorPlanItem key={index} plan={plan} setSelectedImage={setSelectedImage} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {plan.slice(3, 7).map((plan, index) => (
            <FloorPlanItem key={index} plan={plan} setSelectedImage={setSelectedImage} />
          ))}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {plan.slice(7).map((plan, index) => (
            <FloorPlanItem key={index} plan={plan} setSelectedImage={setSelectedImage} />
          ))}
        </div>


        {/* Modal for Selected Image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-[#142B2B] bg-opacity-100 flex justify-center items-center z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-white hover:text-red-600 px-3 py-1 rounded"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
              <img
                src={selectedImage}
                alt="Floor Plan"
                className="rounded-lg w-[200vh] h-[100vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
      {/* 1 KBH */}
      <h1 className="text-5xl md:text-7xl text-center font-bold text-[#142B2B] mb-6 drop-shadow-lg" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }} >
        UNITS - SIZES
      </h1>
      <div className="bg-[#142B2B] h-full text-white text-center py-28">
        <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          1KBH
        </h2>
        <div className='w-full flex justify-around'>
          <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
        </div>

        <div className="flex justify-around gap-10" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          {UNITS.map((unit, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-around space-y-16">
              <div>
                <h3 className="text-4xl font-bold">{unit.name}</h3>
                <p className="text-3xl font-semibold">{unit.level}</p>
              </div>
              <p className="text-3xl font-semibold">{unit.size}</p>
              <button
                className="mt-4 px-4 py-2 bg-white text-black rounded-full border-2 border-transparent hover:bg-[#122424] hover:text-white hover:border-white"
                onClick={() => openSlider(unit.images)}
              >
                ENTER
              </button>
            </div>
          ))}
        </div>

        {/* Image Slider Modal */}
        {selectedImages.length > 0 && (
          <div className="fixed inset-0 bg-[#142B2B] bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-full max-w-7xl">
              <button
                className="absolute top-4 right-4 text-white z-10 bg-red-500 hover:bg-white hover:text-red-600 px-4 py-2 rounded-full"
                onClick={closeSlider}
              >
                Close
              </button>
              <div className="flex justify-center items-center h-[100vh] relative">
                <button
                  className="absolute left-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500"
                  onClick={prevSlide}
                >
                  ◀
                </button>
                <img
                  src={selectedImages[currentIndex]}
                  alt="Floor Plan"
                  className="rounded-lg max-h-[100vh] w-auto"
                />
                <button
                  className="absolute right-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500"
                  onClick={nextSlide}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white h-full text-[#142B2B] text-center py-28">
        <h2 className="text-5xl md:text-6xl font-bold text-[#142B2B] drop-shadow-lg" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          2KBH
        </h2>
        <div className="w-full flex justify-around">
          <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
        </div>

        <div className="flex justify-around gap-10" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          {BKH.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-around space-y-16">
              <div>
                <h3 className="text-4xl font-bold">{item.name}</h3>
                <p className="text-3xl font-semibold">{item.level}</p>
              </div>
              <p className="text-3xl font-semibold">{item.size}</p>
              <button
                className="mt-4 px-4 py-2 bg-white border-2 border-[#142B2B] rounded-full text-black hover:bg-[#122424] hover:text-white"
                onClick={() => openSlider(item.images)}
              >
                ENTER
              </button>
            </div>
          ))}
        </div>

        {/* Image Slider Modal */}
        {selectedImages.length > 0 && (
          <div className="fixed inset-0 bg-[#142B2B] bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-full max-w-7xl">
              <button
                className="absolute top-4 right-4 text-white z-10 bg-red-500 hover:bg-white hover:text-red-600 px-4 py-2 rounded-full"
                onClick={closeSlider}
              >
                Close
              </button>
              <div className="flex justify-center items-center h-[100vh] relative">
                <button
                  className="absolute left-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500"
                  onClick={prevSlide}
                >
                  ◀
                </button>
                <img
                  src={selectedImages[currentIndex]}
                  alt="Floor Plan"
                  className="rounded-lg max-h-[80vh] w-auto"
                />
                <button
                  className="absolute right-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500"
                  onClick={nextSlide}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {/* 3 KBH Section */}
        <div className="bg-[#142B2B] h-full text-white text-center py-28" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          <h2 className="text-5xl md:text-6xl font-bold">3KBH</h2>
          <div className='w-full flex justify-around'>
            <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
          </div>
          <div className="flex justify-around">
            {threeBKH.map((BKH, index) => (
              <div key={index} className="text-center flex flex-col items-center space-y-16">
                <div>
                  <h3 className="text-4xl font-bold">{BKH.name}</h3>
                  <p className="text-3xl font-semibold">{BKH.level}</p>
                </div>
                <p className="text-3xl font-semibold">{BKH.size}</p>
                <button
                  className="mt-4 px-4 py-2 bg-white border-2 border-[#142B2B] rounded-full text-black hover:bg-[#122424] hover:text-white"
                  onClick={() => openSlider(BKH.images)}
                >
                  ENTER
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pent House Section */}
        <div className="bg-white h-full text-[#142B2B] text-center py-28" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          <h2 className="text-5xl md:text-6xl font-bold">Pent House</h2>
          <div className='w-full flex justify-around'>
            <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
          </div>
          <div className="flex justify-around">
            {SKYPLEX.map((PH, index) => (
              <div key={index} className="text-center flex flex-col items-center space-y-16">
                <div>
                  <h3 className="text-4xl font-bold">{PH.name}</h3>
                  <p className="text-3xl font-semibold">{PH.level}</p>
                </div>
                <p className="text-3xl font-semibold">{PH.size}</p>
                <button
                  className="mt-4 px-4 py-2 bg-[#142B2B] text-white rounded-full border-2 border-transparent hover:bg-white hover:text-black hover:border-[#142B2B]"
                  onClick={() => openSlider(PH.images)}
                >
                  ENTER
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Slider */}
        {selectedImages.length > 0 && (
          <div className="fixed inset-0 bg-[#142B2B] bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-full max-w-7xl">
              <button
                className="absolute top-4 right-4 text-white z-10 bg-red-500 hover:bg-white hover:text-red-600 px-4 py-2 rounded-full"
                onClick={closeSlider}
              >
                Close
              </button>
              <div className="flex justify-center items-center h-[100vh] relative">
                <button
                  className="absolute left-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500"
                  onClick={prevSlide}
                >
                  ◀
                </button>
                <img
                  src={selectedImages[currentIndex]}
                  alt="Floor Plan"
                  className="rounded-lg max-h-[80vh] w-auto"
                />
                <button
                  className="absolute right-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500"
                  onClick={nextSlide}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterPlan;