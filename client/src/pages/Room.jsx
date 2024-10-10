import React, { useState, useContext, useEffect } from 'react';
import MainContext from '../contexts/MainContext';
import SongsSearch from '../components/SongsSearch';

function Room() {
    const { accessToken } = useContext(MainContext);

    const [activeUsers, setActiveUsers] = useState([]); // List of active users
    const [songs, setSongs] = useState([]); // List of songs
    const [votes, setVotes] = useState({}); // Store votes for each song
    const [currentSong, setCurrentSong] = useState(null); // Currently playing song
    const [messages, setMessages] = useState([]); // Chat messages
    const [newMessage, setNewMessage] = useState(''); // New message input

    // Mock function to fetch active users in the room
    useEffect(() => {
        // Replace with actual API call
        setActiveUsers(['User1', 'User2', 'User3']);
    }, []);

    // Mock function to fetch songs
    useEffect(() => {
        // Replace with actual API call
        setSongs([
            { id: 1, title: 'Song A', votes: 0 },
            { id: 2, title: 'Song B', votes: 0 },
            { id: 3, title: 'Song C', votes: 0 },
            
        ]);
    }, []);

    // Mock function to set currently playing song
    useEffect(() => {
        setCurrentSong({ id: 1, title: 'Song A', artist: 'Artist A' }); // Mock current song
    }, []);

    // Function to handle voting for a song
    const handleVote = (songId) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [songId]: (prevVotes[songId] || 0) + 1
        }));
    };

    // Function to handle sending new messages
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages((prevMessages) => [...prevMessages, { user: 'Me', text: newMessage }]);
            setNewMessage(''); // Clear the input field
        }
    };

    return (
        <div className='bg-gradient-to-r from-[#232329] to-[#A8A5FF] min-h-screen flex justify-center items-center'>
            <div className='mt-24 flex w-[100%] shadow-2xl overflow-hidden'>
                {/* First Section: Currently Playing + Active Users */}
                <div className='w-[15%] bg-[#1D1F27] text-white h-[100vh] p-6'>
                    {/* Currently Playing Music */}
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold mb-2'>Now Playing</h2>
                        {currentSong ? (
                            <div className='bg-[#2E2F36] p-4 rounded-lg shadow-md'>
                                <p className='text-lg font-semibold'>{currentSong.title}</p>
                                <p className='text-sm text-gray-400'>{currentSong.artist}</p>
                                {/* Mock play/pause buttons */}
                                <div className='mt-2'>
                                    <button className='bg-button text-white py-1 px-2 rounded-lg mr-2'>
                                        Play
                                    </button>
                                    <button className='bg-button text-white py-1 px-2 rounded-lg'>
                                        Pause
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className='text-gray-400'>No song currently playing</p>
                        )}
                    </div>

                    {/* Active Users Section */}
                    <div className='mt-8'>
                        <h2 className='text-xl font-semibold mb-2 border-b border-[#444] pb-2'>Listeners</h2>
                        <ul className='mt-4 space-y-3'>
                            {activeUsers.map((user, index) => (
                                <li key={index} className='text-lg bg-[#2E2F36] py-3 px-4 rounded-lg shadow-sm hover:bg-[#3a3b41] transition'>
                                    {user}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Middle Section: Search Bar */}
                <div className='w-[45%] bg-white h-[100vh] p-6'>
                    <div className='w-[100%]'>
                        <SongsSearch />
                    </div>
                </div>

                {/* Last Section: Songs and Voting + Chat */}
                <div className='w-[40%] bg-[#1D1F27] text-white h-[100vh] p-6 flex flex-col justify-center'>
                    {/* Songs Voting Section */}
                    <div className='mb-6'>
                        <h2 className='text-2xl font-semibold mb-2 border-b border-[#444] pb-2'>Vote for Songs</h2>
                        <p className='text-sm text-gray-400 mb-4'>Vote to make a song play after the current one.</p>
                        <ul className='mt-4 space-y-3 overflow-y-scroll h-[30vh]'>
                            {songs.map((song) => (
                                <li key={song.id} className='flex justify-between items-center bg-[#2E2F36] py-3 px-4 rounded-lg shadow-sm hover:bg-[#3a3b41] transition'>
                                    <span>{song.title}</span>
                                    <div className='flex items-center'>
                                        <span className='mr-3 text-xl'>{votes[song.id] || song.votes}</span>
                                        <button
                                            className='bg-button text-white text-sm font-semibold py-1 px-3 rounded-lg shadow-md transition'
                                            onClick={() => handleVote(song.id)}
                                        >
                                            Vote
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chat Section */}
                    <div className='flex flex-col justify-between h-[40vh] bg-[#2E2F36] p-4 rounded-lg shadow-lg'>
                        <div className='overflow-y-auto h-full mb-2'>
                            <h3 className='text-lg font-semibold mb-2'>Chat with listeners</h3>
                            <ul>
                                {messages.map((message, index) => (
                                    <li key={index} className='mb-2'>
                                        <span className='font-bold'>{message.user}: </span>{message.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <input
                                type='text'
                                className='w-full p-2 rounded-lg bg-[#1D1F27] text-white border border-[#444] focus:outline-none'
                                placeholder='Type a message...'
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
                            />
                            <button
                                className='bg-button text-white py-2 px-4 ml-2 rounded-lg shadow-md'
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;
