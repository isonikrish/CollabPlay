import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SpotifyLogin from './pages/SpotifyLogin'
import Room from './pages/Room'
import Profile from './pages/Profile'
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/spotify/auth' element={<SpotifyLogin />}/>
        <Route path='/join/:id' element={<Room />}/>
        <Route path='/your-profile' element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App