import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo_12345-removebg-preview.png"

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-4 border-t-2 border-black relative" style={{ fontFamily: "Montserrat" , textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Section - Logo & Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo}alt="Skydale Logo" className="h-16" />
          {/* <p className="text-xl font-semibold tracking-wide mt-2">LIVE ON CLOUD 9</p> */}

          <div className="mt-4 text-sm">
            <p className="text-xl"><strong>CALL :</strong> +233240301874 <br /> +27734484461</p>
            <p className="text-xl"><strong>TELEFA :</strong> +233302245348ery tr</p>
            <p className="text-xl"><strong>WhatsApp :</strong>+233240301874 </p>
            <p className="text-xl"><strong>EMAIL :</strong> <a href="mailto:theurbanoasis@gmail.com" className="underline">theurbanoasis@gmail.com</a></p>
        
            <p className="mt-2 text-xl"><strong>ADDRESS :</strong></p>
            <p className="text-lg">Plot No.146 c, Street Sechni, Block 1, Parcel 146,</p>
            <p className="text-lg">Shewn Edgeed Pink, North Airport Residential,</p>
            <p className="text-lg">Region Greater Accra, Ghanna</p>

            {/* <a href="/privacy-policy" className="underline mt-2 inline-block text-lg">Privacy policy</a> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={29} className="hover:text-gray-500 transition duration-300" />
            </a>

            <a href="https://www.youtube.com/embed/dwtyeZi1328" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={29} className="hover:text-gray-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Section - Facebook Page Embed */}
        <div className="mt-10  md:mt-0">
          <iframe
            title="Facebook Page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYourPageURL&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="340"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-lg text-gray-600 text-center">
        <p>
          Keywords: 1bhk flat in TheUrbanOasis, 2bhk flat in TheUrbanOasis, 3bhk flat in TheUrbanOasis, Pent HOuse in TheUrbanOasis, luxury apartments, etc.
        </p>
        <p className="mt-4">
          © 2022 by TheUrbanOais. Proudly created with <a href="https://github.com/MuneebMughal12" target="_blank" rel="noopener noreferrer" className="underline">Muneeb Aziz</a>.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
