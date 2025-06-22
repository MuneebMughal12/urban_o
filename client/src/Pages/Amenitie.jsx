import { lazy, Suspense } from 'react'
import loadingImage from '../assets/robot.gif'


// import Amenities from '../Components/Amenities.jsx/Amenities'
const Amenities = lazy(() => import('../Components/Amenities.jsx/Amenities'))

const Amenitie = () => {
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
     <Amenities/>
    
    </div>
    </Suspense>
  )
}

export default Amenitie