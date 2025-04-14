import React from "react";

const CallBackForm = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[43vh] justify-center py-10 px-4 gap-y-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left w-full md:w-2/4 mb-6">
        GET A CALL BACK!
      </h2>

      {/* Form Container */}
      <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-screen-lg">
        {/* Name Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            required
            placeholder="Name"
            className="peer border-b border-black focus:outline-none focus:border-gray-800 w-full text-lg md:text-xl p-2 placeholder-gray-500"
          />
        </div>

        {/* Contact Number Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            required
            placeholder="Contact Number"
            className="peer border-b border-black focus:outline-none focus:border-gray-800 w-full text-lg md:text-xl p-2 placeholder-gray-500"
          />
        </div>
      </form>

      {/* Submit Button */}
      <button className="w-full md:w-auto px-6 py-3 bg-black text-white border-2 border-black rounded-full hover:bg-white hover:text-black transition duration-300">
        Submit
      </button>
    </div>
  );
};

export default CallBackForm;
