import React, { useState, useEffect, useContext } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import search icon from React Icons
import MainContext from '../contexts/MainContext';
import axios from 'axios';

function SongsSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [songs, setSongs] = useState([]);
    const { accessToken } = useContext(MainContext);

    // Debounce search term to avoid too many API calls
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500); // 500ms debounce delay

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // Function to search for songs
    const searchSong = async (query) => {
        try {
            const response = await axios.get('http://localhost:8000/api/spotify/search-songs', {
                params: {
                    query: query,
                    accessToken: accessToken, // Send the access token for Spotify API
                },
            });
            setSongs(response.data); // Set the state with search results
        } catch (error) {
            console.error('Error searching for songs:', error);
        }
    };

    // Effect to search when debounced term changes
    useEffect(() => {
        if (debouncedTerm && accessToken) {
            searchSong(debouncedTerm);
        }
    }, [debouncedTerm, accessToken]);

    // Log the songs for debugging purposes
    useEffect(() => {
        if (songs.length > 0) {
            console.log(songs);
        }
    }, [songs]);

    return (
        <div>
            <div className='flex items-center bg-minorBackground rounded-lg w-[100%] shadow-lg overflow-hidden'>
                <span className='pl-4'>
                    <FiSearch className='text-gray-500 text-xl' />
                </span>
                <input
                    type='text'
                    placeholder='Search for songs...'
                    className='flex-grow p-3 bg-transparent focus:outline-none text-white'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SongsSearch;
