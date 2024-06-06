const axios = require("axios");

const accessToken =
  "BQBOmW02XEAUaIRoxr-RU_BsdAX8yvY0TUioE_KB2iY991K-uKWhIGLmgstdK7Hyv7ZXVg8T-4z8GB4IKYgWIfE-LZdvSED77saBRl7tAJ6qbROLWYY";
require("dotenv").config();

function getAuthorizationUrl() {
  const clientId = (SPOTIFY_CLIENT_ID = "29bc0e7fffc9437f85e54adee4bd9a59");
  const redirectUri = (REDIRECT_URI = "http://localhost:3000/");
  const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
  ];

  return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scopes.join(" "))}`;
}

async function exchangeCodeForToken(authorizationCode) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    null,
    {
      params: {
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
    expiresIn: response.data.expires_in,
  };
}

async function refreshAccessToken(refreshToken) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    null,
    {
      params: {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return {
    accessToken: response.data.access_token,
    expiresIn: response.data.expires_in,
  };
}

module.exports = {
  getAuthorizationUrl,
  exchangeCodeForToken,
  refreshAccessToken,
  accessToken,
};
