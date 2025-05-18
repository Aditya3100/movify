const axios = require('axios');

async function getSpotifyPlaylistTracks(playlistId, accessToken) {
  const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  return response.data.items.map(item => ({
    name: item.track.name,
    artist: item.track.artists[0].name
  }));
}

module.exports = { getSpotifyPlaylistTracks };