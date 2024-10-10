import express from 'express';
import {handleSpotifyAccessToken, getSpotifyAccessToken, handleSearchSongs} from '../controllers/spotify.js'
const router = express.Router();

router.get('/setAccessToken', handleSpotifyAccessToken);
router.get('/getAccessToken', getSpotifyAccessToken);
router.get('/search-songs', handleSearchSongs);
export default router;