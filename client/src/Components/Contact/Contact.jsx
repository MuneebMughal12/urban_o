import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
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
      await axios.post("http://localhost:5000/send-email", { formData, type });
      alert("Email Sent Successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <div className="bg-[#0C1E1E] text-white px-2 ">
        {/* Hero Section */}
        <div className="text-center py-16" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          <h3 className="text-2xl uppercase">Let's Connect</h3>
          <h1 className="text-5xl font-bold">INTERESTED IN SKY-LIVING</h1>
          <p className="mt-4 text-2xl">
            We are here for your assistance. Please find our contact details
            mentioned below.
          </p>
          <p className="font-semibold italic">See You Soon!</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Address and Info */}
        <div className="bg-white text-black p-8 rounded-lg shadow-2xl h-full">
          <h2 className="text-[1.7rem] font-semibold mb-4">Contact Information</h2>
          <p className="mb-2 text-2xl font-bold">Address:</p>
          <p className="text-lg">The Urban Oasis, I14/3 Islamabad</p>

          <p className="mt-4 text-2xl font-bold">Phone/WhatsApp:</p>
          <p className="text-lg">+92 0311-9019327</p>

          <p className="mt-4 text-2xl font-bold">Email:</p>
          <p className="text-lg">theurbanoasis@gmail.com</p>

          <p className="mt-4 text-3xl font-bold">Social Media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-4xl text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="#" className="text-4xl text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-4xl text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black p-8 rounded-lg shadow-2xl h-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={(e) => handleSubmit(e, "contact")}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              required
            />
            <textarea
              name="message"
              placeholder="Write a message"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              rows="4"
            ></textarea>
            <button className="px-6 py-2 mt-4 text-white bg-black rounded-full hover:bg-white hover:text-black border border-black">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96 mt-8">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106321.00098736606!2d72.96971106267803!3d33.61746408510055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df968cc976c5dd%3A0x758752f60a63e2e0!2sI-14%2F3%20I-14%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1741259746800!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Forms;
