import React from 'react'
import HeroSection from '../Components/HeroSection'
import CallBackForm from '../Components/CallBackForm'
import TowerSection from '../Components/TowerSection'
import AboutSection from '../Components/AboutSection'
import Enquiry from '../Components/Enquiry'
import UnitsSection from '../Components/UnitsSection'
import AmenitiesSection from '../Components/AmenitiesSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <CallBackForm/>
        <TowerSection/>
        <AboutSection/>
        <Enquiry/>
        <AmenitiesSection/>
        <UnitsSection/>
    
    </div>
  )
}

export default Home