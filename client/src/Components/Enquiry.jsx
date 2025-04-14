import { useState } from "react";
import imagineBg from "../assets/imagine.jpg";
import axios from "axios";

const Forms = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e, type) => {
        e.preventDefault();
      
        try {
          const response = await axios.post("http://localhost:5000/send-email", {
            formData,  // Wrap formData inside an object
            type, 
          });
      
          if (response.status === 200) {
            alert("Email Sent Successfully!");
          }
        } catch (error) {
          console.error("Error sending email:", error);
          alert("Failed to send email.");
        }
      };
      
    return (
        <div className="bg-black font-montserrat">
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

            {/* Content Section */}
            <div className="w-full bg-[#142B2B] py-10 px-4 sm:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* YouTube Video */}
                    <div className="w-full">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center lg:text-left">THE URBAN OASIS</h2>
                        <div className="relative aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg shadow-lg"
                                src="https://www.youtube.com/embed/dwtyeZi1328"
                                title="Skydale Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className=" text-white p-6 w-full rounded-lg mb-6">
                        <h2 className="text-2xl font-bold text-center mb-6">ENQUIRY</h2>
                        <form onSubmit={(e) => handleSubmit(e, "enquiry")} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="firstName" placeholder="Name" onChange={handleChange} className="p-3 w-full bg-white text-black rounded-md" required />
                                <input type="text" name="LastName" placeholder="Last" onChange={handleChange} className="p-3 w-full bg-white text-black rounded-md" required />
                            </div>
                            <input type="email" name="email" placeholder="Email *" onChange={handleChange} className="p-3 w-full bg-white text-black rounded-md" required />
                            <input type="text" name="phone" placeholder="phone *" onChange={handleChange} className="p-3 w-full bg-white text-black rounded-md" required />
                            <textarea name="message" placeholder="Message" rows="3" onChange={handleChange} className="p-3 w-full bg-white text-black rounded-md"></textarea>
                            <button className="w-full bg-red-600 hover:bg-white hover:text-red-600 text-white py-3 rounded-md font-semibold">SEND ENQUIRY</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;
