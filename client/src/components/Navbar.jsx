import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import DefaultPic from '/default.svg';
import { FaSpotify } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";

function Navbar() {
  // Function to handle scrolling to the 'features' section
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-black py-3 w-[85%] mx-auto flex justify-center rounded-full my-3 fixed left-0 right-0 z-20">
      <div className="container flex items-center justify-between px-6 w-full">

        <div className="flex items-center justify-center">
          <h2 className="text-xl font-semibold tracking-wide text-white cursor-pointer">CollabPlay</h2>
        </div>

        <ul className="flex space-x-8 text-lg items-center justify-center">
          <li className="hover:text-button transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          {/* Clicking on Features will trigger the scroll */}
          <li 
            className="hover:text-button transition-colors duration-200 cursor-pointer"
            onClick={scrollToFeatures}
          >
            Features
          </li>
          <Link to="/join-live">
            <li className="bg-minorBackground text-white rounded-md px-3 py-2 transition-colors duration-200 flex items-center space-x-2 justify-center w-[200px] cursor-pointer">
              <CiStreamOn className="text-xl mx-3" />
              Join a Live
            </li>
          </Link>
        </ul>

        <div className="flex items-center space-x-4">

          <button className="bg-button text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 flex items-center space-x-2">
            <FaSpotify className="text-xl" />
            <span>Login</span>
          </button>

          <div className="flex items-center space-x-2 cursor-pointer">
            <Suspense fallback={<div className="w-10 h-10 bg-gray-500 rounded-full" />}>
              <img
                src={DefaultPic}
                alt="defaultProfilePic"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
