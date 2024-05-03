// utils/spotifyAuth.js

const axios = require("axios");

// Set up the authorization URL
function getAuthorizationUrl() {
  const clientId = process.env.CLIENT_ID;
  const redirectUri = "http://localhost:3000/";
  const scopes = ["user-read-private", "user-read-email"]; // Scopes required by your application

  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes.join(" "))}`;
}

// Exchange authorization code for access token
async function exchangeCodeForToken(authorizationCode) {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = "http://localhost:3000/";

  const response = await axios.post("https://accounts.spotify.com/api/token", {
    grant_type: "authorization_code",
    code: authorizationCode,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });

  return response.data.access_token;
}

module.exports = { getAuthorizationUrl, exchangeCodeForToken };
