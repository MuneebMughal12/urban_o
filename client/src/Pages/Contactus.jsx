
import { lazy, Suspense } from 'react'
import loadingImage from '../assets/robot.gif'
const Contact = lazy(() => import('../Components/Contact/Contact'))


const Contactus = () => {
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
        <Contact/>
    </div>
    </Suspense>
  )
}

export default Contactus