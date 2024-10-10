import React, { useContext } from 'react';
import DefaultPic from '/default.svg'; // Replace with the actual user image if available
import MainContext from '../contexts/MainContext';

function Profile() {
    const { userProfile, isLoading, isError } = useContext(MainContext);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading profile.</div>;

  return (
    <div className="bg-gradient-to-r from-[#232329] to-[#A8A5FF] h-[100vh] flex flex-col items-center justify-center text-white">
      
      {/* Profile Header Section */}
      <div className="w-full h-[40vh] flex flex-col items-center justify-center relative">
        
        {/* Profile Picture */}
        <img
          src={userProfile?.images?.[1].url ||DefaultPic} 
          alt="Profile Pic"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#A8A5FF] object-cover shadow-lg mb-4"
        />

        {/* User Info */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{userProfile?.display_name}</h1>
        <p className="text-xl md:text-2xl text-gray-300">{userProfile?.email}</p>

        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-black opacity-40 z-[-1]" />
      </div>

      {/* User's Playlists, Followers, etc. */}
      <div className="w-full max-w-4xl p-6 mt-6 bg-[#121212] rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add user's playlists or other sections here */}
          <div className="bg-[#232329] p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold">Country</h3>
            <p className="text-gray-400">{userProfile?.country}</p>
          </div>

          <div className="bg-[#232329] p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold">Followers</h3>
            <p className="text-gray-400">{userProfile?.followers.total}</p>
          </div>

          <div className="bg-[#232329] p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold">Subscription</h3>
            <p className="text-gray-400">{userProfile?.product}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
