import React from 'react';
import { FaMusic, FaVoteYea, FaList, FaComments } from 'react-icons/fa';

function Features() {
    return (
        <section className="w-full bg-gradient-to-r from-[#232329] to-[#A8A5FF] py-20 text-white" id="features">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide">
                    More than just a music player
                </h2>
                <p className="text-lg sm:text-xl mt-4 opacity-85">
                    Explore powerful features designed to enhance your live music experience.
                </p>
            </div>

            {/* Features Grid */}
            <div className='flex justify-evenly'>
                {/* Feature 1: Real-Time Live Music */}
                <div className="bg-gradient-to-r from-[#A8A5FF] to-[#232329] text-white p-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden w-[65%]">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black z-10"></div>
                    <div className="relative z-20 flex justify-center items-center mb-4">
                        <FaMusic className="text-5xl mb-4" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                        Real-Time Live Music
                    </h3>
                    <p className="text-base sm:text-lg opacity-85 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                        Sync up with friends and host live music sessions where everyone listens to the same tracks in real-time.
                    </p>
                </div>

                {/* Feature 2: Interactive Voting System */}
                <div className="bg-gradient-to-r from-[#A8A5FF] to-[#232329] text-white p-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden w-[30%]">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black z-10"></div>
                    <div className="relative z-20 flex justify-center items-center mb-4">
                        <FaVoteYea className="text-5xl mb-4" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                        Interactive Voting System
                    </h3>
                    <p className="text-base sm:text-lg opacity-85 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                        Let your listeners have a voice! Vote on the next track, and control the flow of your live session.
                    </p>
                </div>
            </div>
            <div className='flex justify-evenly mt-10'>
            {/* Feature 3: Smart Playlist Creation */}
            <div className="bg-gradient-to-r from-[#A8A5FF] to-[#232329] text-white p-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden w-[30%]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black z-10"></div>
                <div className="relative z-20 flex justify-center items-center mb-4">
                    <FaList className="text-5xl mb-4" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                    Smart Playlist Creation
                </h3>
                <p className="text-base sm:text-lg opacity-85 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                    Automatically generate playlists based on listeners’ preferences, ensuring every session is dynamic and personalized.
                </p>
            </div>

            {/* Feature 4: Chat with Listeners */}
            <div className="bg-gradient-to-r from-[#A8A5FF] to-[#232329] text-white p-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden w-[65%]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black z-10"></div>
                <div className="relative z-20 flex justify-center items-center mb-4">
                    <FaComments className="text-5xl mb-4" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                    Chat with Listeners
                </h3>
                <p className="text-base sm:text-lg opacity-85 relative z-20 transition-all duration-300 transform hover:text-[#A8A5FF]">
                    Communicate directly with your listeners through a live chat, fostering a more engaging and interactive experience.
                </p>
            </div>
            </div>
        </section>
    );
}

export default Features;
