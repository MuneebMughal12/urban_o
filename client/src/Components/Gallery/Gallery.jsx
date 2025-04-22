import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bgGallery from "./bgGallery.avif";
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

    const getSlideStyle = (index) => {
        const offset = index - currentIndex;
        const absOffset = Math.abs(offset);

        return {
            transform: `translateX(${offset * 100}%) scale(${1 - absOffset * 0.1})`,
            zIndex: images.length - absOffset,
            opacity: offset === 0 ? 1 : 0.5,
        };
    };

    return (
        <div>
            {/* Background Gallery Section */}
            <div className="relative w-full h-[64vh] overflow-hidden">
                <img
                    src={bgGallery}
                    alt="Gallery Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center" style={{ fontFamily: "Montserrat", textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
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

            {/* Image Slider Section */}
            <div className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden bg-gray-100 rounded-xl shadow-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="absolute transition-all duration-700 ease-in-out rounded-xl overflow-hidden shadow-lg"
                            style={{
                                ...getSlideStyle(index),
                                width: "60%",
                                height: "80%",
                                transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
                            }}
                        >
                            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-xl" />
                        </div>
                    ))}

                    {/* Navigation Buttons */}
                    {/* Navigation Buttons on Right Side */}
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
                        onClick={prevSlide}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 z-10"
                        onClick={nextSlide}
                    >
                        <FaArrowRight />
                    </button>

                </div>
            </div>
        </div>
    );
}
