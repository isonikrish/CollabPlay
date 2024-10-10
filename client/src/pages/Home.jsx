import React, { useEffect } from 'react'
import Hero from '../components/Sections/Hero'
import Features from '../components/Sections/Features'
import Footer from '../components/Sections/Footer'
import axios from 'axios'
function Home() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      setAccessToken(code);
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);
  const setAccessToken = async (code) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/spotify/setAccessToken?code=${code}`, {
        withCredentials: true,
      });
      // Handle response, store the access token, etc.
    } catch (error) {
      console.error("Error getting access token", error);
    }
  };

  return (
    <div>
      <Hero />
      <div className='border border-white '></div>
      <Features />
      <div className='border border-white '></div>
      <Footer />
    </div>
  )
}

export default Home