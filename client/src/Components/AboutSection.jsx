import { ArrowRight } from "lucide-react";
import Aboutbg from "../assets/Aboutbg.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover  flex items-center px-4 sm:px-8"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-lg h-3/5 text-white p-6 sm:p-8 bg-black bg-opacity-70 rounded-lg mx-auto sm:ml-10 space-y-14 sm:space-y-16">
        <h2 className="text-xl sm:text-3xl md:text-3xl font-semibold tracking-wide text-center sm:text-left leading-tight">
          WHY THE URBAN OASIS?
        </h2>

        <p className="text-lg sm:text-base md:text-xl text-center sm:text-left leading-relaxed">
          THE URBAN OASIS & Luxury Suites is a high-rise, state-of-the-Art building providing<br />
          <span className="font-semibold">PREMIUM AND FUTUR ISTIC LIFESTYLE!</span>
        </p>

        <p className="text-lg sm:text-base md:text-xl text-center sm:text-left leading-relaxed">
          We commit to deliver quality, attain high customer satisfaction andprovide exemplary services.
          <span className="font-bold"> 
            TUo is all about high standard lifestyle
            - with smart design
            ..</span>
        </p>

        {/* Read More Button */}
        <Link
          to="/about"
          className="flex items-center justify-center sm:justify-start border-white border-2 bg-black text-white px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-black transition w-full sm:w-auto"
          style={{ width: "154px" }}
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>


    </div>
  );
};

export default AboutSection;
