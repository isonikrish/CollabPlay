import React from 'react'
import Hero from '../components/Sections/Hero'
import Features from '../components/Sections/Features'
import Footer from '../components/Sections/Footer'

function Home() {
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