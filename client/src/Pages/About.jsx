import React, { lazy, Suspense } from 'react';
import loadingImage from '../assets/robot.gif'; 

const About = lazy(() => import('../Components/Aboutus/About'));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B]">
          <img
            src={loadingImage}
            alt="Loading..."
            className="w-96 h-96 mb-4"
          />
        </div>
      }
    >
      <div>
        <About />
      </div>
    </Suspense>
  );
};

export default Home;
