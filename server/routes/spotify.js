import express from 'express';
import {handleSpotifyAccessToken} from '../controllers/spotify.js'
const router = express.Router();

router.get('/getAccessToken', handleSpotifyAccessToken);

export default router;