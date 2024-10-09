import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SpotifyLogin from './pages/SpotifyLogin'
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/spotify/auth' element={<SpotifyLogin />}/>
      </Routes>
    </>
  )
}

export default App