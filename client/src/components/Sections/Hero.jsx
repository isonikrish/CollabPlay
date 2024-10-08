import React from 'react';

function Hero() {
    return (
        <section className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-[#232329] to-[#A8A5FF] text-white text-center">
            <div className="max-w-[70%] px-4">

                <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-wide mb-6">
                    Unleash <span className="text-[#c1bfff]">Live Collaboration</span> in Music
                </h1>


                <p className="text-lg sm:text-xl font-medium opacity-85 mb-8">
                    Host live sessions, invite listeners, and create music together on <span className="font-bold text-white">CollabPlay</span>.
                </p>


                <div className="flex justify-center space-x-6">
                    <button className="bg-button text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-button-hover focus:outline-none">
                        Start Your Session
                    </button>
                    <button className="bg-transparent border-2 border-button text-white font-semibold px-8 py-4 rounded-full transition-transform duration-300 transform hover:bg-button-hover hover:border-white hover:text-white focus:outline-none">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
