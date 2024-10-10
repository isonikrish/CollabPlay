import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/spotify/getAccessToken', {
          withCredentials: true,
        });
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };
    fetchAccessToken();
  }, []);

  const getSpotifyUserProfile = async () => {
    if (!accessToken) return null; // Guard clause if no access token is available yet
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Spotify profile:', error);
      throw new Error("Failed to fetch Spotify profile");
    }
  };

  const { data: userProfile, isLoading, isError } = useQuery({
    queryKey: ["spotifyUserProfile", accessToken],
    queryFn: getSpotifyUserProfile,
    enabled: !!accessToken, // Only run the query if accessToken is available
    staleTime: 1000 * 60 * 5, // Cache the data for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cache the data for 10 minutes
    retry: 1, // Retry once on failure
  });

  return (
    <MainContext.Provider
      value={{
        accessToken,
        userProfile,
        isLoading,
        isError,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
