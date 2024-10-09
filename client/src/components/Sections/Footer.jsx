import React, { useEffect } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Footer() {
    useEffect(() => {
        // Animating the developer information (fade in with bounce)
        gsap.fromTo(".developer-info", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            ease: "bounce.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".developer-info",
                start: "top 80%",  // When the top of the element reaches 80% of the viewport
                end: "top 50%",    // End the animation when the top of the element reaches 30%
                scrub: 0.5,
            }
        });

        // Animating the social media links (fade in and scale up)
        gsap.fromTo(".social-media a", {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            duration: 1,
            stagger: 0.2,  // Stagger effect to delay the animations for each icon
            scrollTrigger: {
                trigger: ".social-media",
                start: "top 80%",
                end: "top 50%",
                scrub: 0.5,
            }
        });
    }, []);

    return (
        <section className="w-full bg-gradient-to-r from-[#232329] to-[#A8A5FF] py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Developer Information */}
                <div className="mb-8 developer-info">
                    <h2 className="text-3xl font-semibold mb-2">Built with Passion by</h2>
                    <p className="text-lg opacity-90">
                        <strong className="text-[#A8A5FF]">Krish Soni</strong> — Full Stack Developer
                    </p>
                    <p className="text-base opacity-80 mt-2">
                        Always looking to push the boundaries of what’s possible with technology.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-8 social-media">
                    <a href="https://github.com/isonikrish" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A8A5FF] transition duration-300 ease-in-out">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://x.com/isonikrish" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A8A5FF] transition duration-300 ease-in-out">
                        <FaXTwitter className="text-2xl" />
                    </a>
                    <a href="mailto:isonikrish@gmail.com" className="text-white hover:text-[#A8A5FF] transition duration-300 ease-in-out">
                        <FaEnvelope className="text-2xl" />
                    </a>
                </div>

                
            </div>
        </section>
    );
}

export default Footer;
