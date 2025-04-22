import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bgGallery from "./bgGallery.avif"
import { motion } from "framer-motion";
import ImageGallery1 from "./slider1.jpg";
import ImageGallery2 from "./slider2.jpg";
import ImageGallery3 from "./slider3.jpg";
import ImageGallery4 from "./slider4.jpg";
import ImageGallery5 from "./silder5.png";

const images = [ImageGallery1, ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5];

export default function FullPageGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            {/* Background Section */}
            <div className="relative w-full h-[64vh] overflow-hidden">
                <img src={bgGallery} alt="Units Background" className="absolute top-0 left-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center" style={{  fontFamily: '"Montserrat', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}> 
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-bold"
                    >
                        Gallery
                    </motion.h1>
                </div>
            </div>
            <div className="relative  w-full h-screen overflow-hidden">
                {/* Main Image */}
                <img
                    src={images[currentIndex]}
                    alt="Gallery"
                    className="w-full h-full  transition-all duration-700 ease-in-out"
                />

                {/* Navigation Arrows */}
                <button
                    className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
                    onClick={prevSlide}
                >
                    <FaArrowLeft size={24} className="text-gray-800" />
                </button>
                <button
                    className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
                    onClick={nextSlide}
                >
                    <FaArrowRight size={24} className="text-gray-800" />
                </button>

                {/* Thumbnails */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Thumbnail"
                            className={`w-16 h-12 object-cover cursor-pointer rounded-md transition-all duration-300 border-2 ${index === currentIndex ? "border-white" : "border-transparent"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
