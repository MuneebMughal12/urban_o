import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo_12345-removebg-preview.png"
const Navbar = () => {
  const location = useLocation(); // Get current route
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Amenities", path: "/amenities" },
    { name: "Units", path: "/units" },
    { name: "Gallery", path: "/gallery" },
    { name: "Downloads", path: "/downloads" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#172D2D] px-6 py-4 flex items-center justify-between md:justify-around w-full" style={{ fontFamily: '"Montserrat' }}>
      {/* Logo */}
      <div className="text-white font-semibold ">
       <img src={Logo} alt="Urban Oasis Logo" className=" h-24 w-24 object-contain" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="text-white lg:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Nav Links */}
      <ul
        className={`lg:flex bg-white rounded-lg lg:static absolute top-16 left-0 w-full lg:w-auto flex-col lg:flex-row transition-all duration-300 z-50 
          ${isOpen ? "flex" : "hidden"}
        `}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`relative px-6 py-3 text-black text-sm font-medium cursor-pointer transition-all duration-300 
              ${location.pathname === item.path ? "bg-[#142B2B] text-white" : ""}
            `}
            onClick={() => {
              setIsOpen(false);
              navigate(item.path);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
