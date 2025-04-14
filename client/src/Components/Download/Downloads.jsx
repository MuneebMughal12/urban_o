// import { useState } from "react";
// import { FaFilePdf } from "react-icons/fa";
// import brochure from "./Aviation Certificate_EM (1).pdf";

// const pdfFiles = [
//   { name: "AVIATION", url: "/pdfs/aviation.pdf" },
//   { name: "FIRE", url: "/pdfs/fire.pdf" },
//   { name: "PANCHAYAT", url: "/pdfs/panchayat.pdf" },
//   { name: "FIRE", url: "/pdfs/fire2.pdf" },
//   { name: "HDFC APF", url: "/pdfs/hdfc_apf.pdf" },
//   { name: "Environmental Clearance", url: "/pdfs/environmental_clearance.pdf" },
// ];

// export default function Approvals() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//   });

//   const handleDownload = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = url.split("/").pop();
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const requestData = {
//       formData, // Ensure this is correctly structured
//       type: "download",
//     };
  
//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestData),
//       });
  
//       if (response.ok) {
//         handleDownload(brochure);
//         setIsPopupOpen(false);
//       } else {
//         console.error("Failed to send email.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  
  

//   return (
//     <div>
//       {/* Approvals Section */}
//       <div className="text-center mt-14" style={{ fontFamily: "Montserrat" }}>
//         <h2
//           className="text-5xl font-bold text-[#142B2B] mb-6"
//           style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}
//         >
//           APPROVALS
//         </h2>
//         <div className="grid grid-cols-3 gap-60 max-w-3xl mx-auto">
//           {pdfFiles.map((file, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center cursor-pointer"
//               onClick={() => handleDownload(file.url)}
//             >
//               <FaFilePdf className="text-red-500 text-9xl mb-2" />
//               <span className="font-semibold">{file.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative w-full h-[323px] bg-[#142B2B] bg-center">
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//           <h1
//             className="text-8xl"
//             style={{ fontFamily: "Montserrat", textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}
//           >
//             Brochure
//           </h1>
//           <button
//             className="ml-4 px-4 py-2 mt-12 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-200 transition-all"
//             onClick={() => setIsPopupOpen(true)}
//           >
//             Download Brochure
//           </button>
//         </div>
//       </div>

//       {/* Form Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
//             <button
//               className="absolute top-2 right-2 text-black text-2xl"
//               onClick={() => setIsPopupOpen(false)}
//             >
//               &times;
//             </button>
//             <h2 className="text-xl font-bold text-center">TO DOWNLOAD BROCHURE</h2>
//             <p className="text-sm text-center mb-4">Please submit the form.</p>
//             {/* Download Form */}
//             <div className=" text-white p-6 w-full rounded-lg">
//               <h2 className="text-2xl font-bold text-center mb-4">Download Form</h2>
//               <form onSubmit={(e) => handleSubmit(e, "download")} className="space-y-3">
//                 <div className="flex gap-2">
//                   <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2 w-1/2 rounded" required />
//                   <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2 w-1/2 rounded" required />
//                 </div>
//                 <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full rounded" required />
//                 <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full rounded" required />
//                 <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Submit & Download</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import HomeImg from "../../assets/home-img.png";

export default function App() {
  return (
    <div className="h-screen w-full bg-black flex justify-center text-white">

      <section className="home grid h-screen pt-32 pb-16">
        <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
          <div className="home__data justify-self-center text-center lg:text-left">
            <p className="pb-2 font-semibold">Error 404</p>
            <h1 className="pb-4 text-5xl font-bold lg:text-6xl">Hey Buddy</h1>
            <p className="pb-8 font-semibold">
              We can't seem to find the page <br />
              you are looking for.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 py-4 px-8 font-bold text-white"
            >
              Go Home
            </Link>
          </div>

          <div className="home__img justify-self-center">
            <img
              src={HomeImg}
              className="w-64 animate-floting lg:w-[400px]"
              alt="home"
            />
            <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64"></div>
          </div>
        </div>

        {/* <div className="home__footer flex items-center justify-center gap-2 self-end text-sm font-semibold">
          <p>0891 2345 6789</p>
          <p>|</p>
          <p>info@xcompany.com</p>
        </div> */}
      </section>
    </div>
  );
}
