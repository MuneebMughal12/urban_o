// import React from 'react'
// import Gallery from '../Components/Gallery/Gallery'
import { lazy, Suspense } from 'react'
import loadingImage from '../assets/robot.gif'
const Gallery = lazy(() => import('../Components/Gallery/Gallery'))


const Gallerypage = () => {
  return (
    <Suspense 
    fallback={
      <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B] ">
        <img
          src={loadingImage}
          alt="Loading..."
          className="w-96 h-96 mb-4 "
        />
      </div>
    }
    
    >
    <div>
        <Gallery/>
    </div>
    </Suspense>
  )
}

export default Gallerypage