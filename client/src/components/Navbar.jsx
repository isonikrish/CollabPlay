import React, { Suspense, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DefaultPic from '/default.svg';
import { FaSpotify } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import MainContext from '../contexts/MainContext';

function Navbar() {
  const navigate = useNavigate();
  const [isDropDown, setIsDropDown] = useState(false);
  const { accessToken, userProfile } = useContext(MainContext);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useGSAP(() => {
    // Navbar slide-in animation
    gsap.fromTo('#navbar',
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }
    );

    // Logo animation (bounce effect)
    gsap.fromTo('#logo',
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1.05,
        duration: 0.6,
        ease: 'bounce.out',
      }
    );

    // Navbar items slide in from the right with stagger
    gsap.fromTo('.nav-item',
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
      }
    );

    // Join a Live button bounce effect on hover
    gsap.fromTo('.join-live-btn',
      {
        y: 0,
      },
      {
        y: 0,
        duration: 0.5,
        ease: 'ease.inOut',

      }
    );

    // Login button hover scale effect
    gsap.to('#login-btn', {
      scale: 1.1,
      duration: 0.3,
      ease: 'ease.inOut',
    });

    // Profile pic pop-in effect with bounce
    gsap.fromTo('#profile-pic',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <nav className="bg-black py-3 w-[85%] mx-auto flex justify-center rounded-full my-3 fixed left-0 right-0 z-20" id='navbar'>
      <div className="container flex items-center justify-between px-6 w-full">

        <div className="flex items-center justify-center" id='logo'>
          <h2 className="text-xl font-semibold tracking-wide text-white cursor-pointer">CollabPlay</h2>
        </div>

        <ul className="flex space-x-8 text-lg items-center justify-center">
          <li className="nav-item hover:text-button transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li
            className="nav-item hover:text-button transition-colors duration-200 cursor-pointer"
            onClick={scrollToFeatures}
          >
            Features
          </li>
          <Link to="/join/28746">
            <li className="nav-item bg-minorBackground text-white rounded-md px-3 py-2 transition-colors duration-200 flex items-center space-x-2 justify-center w-[200px] cursor-pointer join-live-btn">
              <CiStreamOn className="text-xl mx-3" />
              Join a Live
            </li>
          </Link>
        </ul>

        <div className="flex items-center space-x-4" id='login-btn'>
          <button className=" bg-button text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 flex items-center space-x-2" onClick={() => navigate('/spotify/auth')}>
            <FaSpotify className="text-xl" />
            <span>Login</span>
          </button>

          <div className="flex items-center cursor-pointer">
            <Suspense fallback={<div className="w-10 h-10 bg-gray-500 rounded-full" />}>
              <img
                src={userProfile?.images?.[1]?.url || DefaultPic}
                alt="defaultProfilePic"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                id='profile-pic'
              />
            </Suspense>

            {isDropDown ? <RiArrowDropUpLine className='text-4xl select-none' onClick={() => setIsDropDown(prev => !prev)} /> : <RiArrowDropDownLine className='text-4xl select-none' onClick={() => setIsDropDown(prev => !prev)} />}
          </div>
          {isDropDown && (
            <div className="absolute right-0 top-[60px] bg-minorBackground w-[150px] h-[200px] shadow-lg rounded-lg text-white">
              <ul className="flex flex-col space-y-2 p-3">
                <Link to={'/your-profile'}><li className="py-2 px-2 border-b border-gray-300 hover:bg-hover cursor-pointer">Your account</li></Link>
                <li className="py-2 px-2 border-b border-gray-300 hover:bg-hover cursor-pointer">Settings</li>
                <li className="py-2 px-2 border-b border-gray-300 hover:bg-hover cursor-pointer">Sign out</li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
