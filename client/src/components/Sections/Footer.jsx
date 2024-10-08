import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
    return (
        <section className="w-full bg-gradient-to-r from-[#232329] to-[#A8A5FF] py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Developer Information */}
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Built with Passion by</h2>
                    <p className="text-lg opacity-90">
                        <strong className="text-[#A8A5FF]">Krish Soni</strong> — Full Stack Developer
                    </p>
                    <p className="text-base opacity-80 mt-2">
                        Always looking to push the boundaries of what’s possible with technology.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-8">
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

                {/* Contact and Links 
        <div className="text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>
            <a href="/privacy-policy" className="hover:text-[#A8A5FF] transition duration-300 ease-in-out">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms-of-service" className="hover:text-[#A8A5FF] transition duration-300 ease-in-out">
              Terms of Service
            </a>
          </p>
        </div>*/}
            </div>
        </section>
    );
}

export default Footer;
