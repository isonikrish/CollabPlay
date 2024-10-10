import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

export const handleSpotifyAccessToken = async (req, res) => {
  const code = req.query.code;
  const clientID = process.env.SPOTIFY_CLIENT_ID; // Replace with your actual client ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  // Replace with your actual client secret
  const redirectUri = "http://localhost:5173"; // Frontend redirect URI

  if (!code) {
    return res.status(400).json({ error: "Missing authorization code" });
  }

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        params: {
          code,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        },
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(clientID + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    // Set the access token as a secure, httpOnly cookie
    res.cookie("spotify_access_token", access_token, {
      maxAge: expires_in * 1000, // Cookie expiration time based on the token's expiration
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: false, // Use true if your site uses HTTPS
      sameSite: "strict", // Restricts cross-site cookies
    });

    // Optionally return a success response or some other useful info
    res.json({ message: "Access token stored in cookie" });
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    res.status(500).send("Internal Server Error");
  }
};
export const getSpotifyAccessToken = (req, res) => {
  try {
    const accessToken = req.cookies.spotify_access_token;

    // Check if the access token exists in the cookie
    if (!accessToken) {
      return res
        .status(401)
        .json({ error: "Access token not found in cookies" });
    }

    // If token exists, send it to the client
    res.json({ accessToken });
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    res.status(500).send("Internal Server Error");
  }
};
export const handleSearchSongs = async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });
  const { query, accessToken } = req.query;
  if (!query || !accessToken) {
    return res.status(400).json({ error: "Missing query or access token" });
  }
  spotifyApi.setAccessToken(accessToken);
  try {
    const data = await spotifyApi.searchTracks(query, { limit: 10 });

    res.json(data.body.tracks.items);
  } catch (error) {
    console.error("Error searching for songs:", error);
    res.status(500).send("Internal Server Error");
  }
};
