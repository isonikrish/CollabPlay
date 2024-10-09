import axios from 'axios';

export const handleSpotifyAccessToken = async (req, res) => {
  const code = req.query.code;
  const clientID = process.env.SPOTIFY_CLIENT_ID;  // Replace with your actual client ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;  // Replace with your actual client secret
  const redirectUri = "http://localhost:5173"; // Frontend redirect URI

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  try {
    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      },
      headers: {
        'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    // Set the access token as a secure, httpOnly cookie
    res.cookie('spotify_access_token', access_token, {
      maxAge: expires_in * 1000, // Cookie expiration time based on the token's expiration
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: false, // Use true if your site uses HTTPS
      sameSite: 'strict', // Restricts cross-site cookies
    });

    // Optionally return a success response or some other useful info
    res.json({ message: "Access token stored in cookie" });

  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    res.status(500).send('Internal Server Error');
  }
};
