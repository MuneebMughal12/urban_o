import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Amenities from "./Pages/Amenitie"
import Unitspage from "./Pages/Unitspage";
import ScrollToTop from "./Components/ScrollToTop";
import Gallerypage from "./Pages/Gallerypage";
import Contactus from "./Pages/Contactus";
import Download from "./Pages/Download";

function App() {
  return (
    <Router>
    <div>
    <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path='/units' element={<Unitspage />}/>
        <Route path='/gallery' element={<Gallerypage />}/>
        <Route path='/contact' element={<Contactus />}/>
        <Route path='/downloads' element={<Download />}/>
      </Routes>
      <Footer />
    </div>
  </Router>
  
  );
}

export default App;
