
import { AiOutlineToTop } from "react-icons/ai";
import React from 'react';
import LightPurpleText from "./LightPurpleText";
import LightblueText from "./LightblueText";
// import heroImage1 from '../assets/hero-image1.png';
// import heroImage2 from '../assets/hero-image2.png';
// import heroImage3 from '../assets/hero-image3.png';
// import heroImage4 from '../assets/hero-image4.png';
// import heroImage5 from '../assets/hero-image5.png';
// import heroImage6 from '../assets/hero-image6.png';

const CommunitySection = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl italic text-gray-900 mb-4">
          Your <LightPurpleText text={"Hobby"}></LightPurpleText>, Your <LightblueText text={"Community"}></LightblueText>...
        </h1>
        <button className="bg-purple-800 text-white px-6 py-1 rounded-lg text-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Get started
        </button>
      </div>
      
        <img className="w-full" src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1716812387/UploadOnly/Screenshot_2024-05-27_at_5.47.42_PM-removebg-preview_naiyss.png" alt="Person singing" /> 
      {/* <div className="mt-12 flex justify-center flex-wrap space-x-4 space-y-4">
      </div> */}
    </div>
  );
};

export default CommunitySection;
