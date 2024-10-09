import React from 'react';
import { FaSpotify } from 'react-icons/fa';

function SpotifyLogin() {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

  function loginWithSpotify() {
    const redirectUri = "http://localhost:5173";  // Adjust to have a dedicated callback URI
    const scope = "user-read-private user-read-email"; 
    const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

    window.location.assign(spotifyURL); 
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#232329] to-[#A8A5FF]">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Login to Spotify</h1>
        <button
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          onClick={loginWithSpotify}
        >
          <FaSpotify className="mr-2 text-2xl" />
          Login with Spotify
        </button>
      </div>
    </div>
  );
}

export default SpotifyLogin;
