const express = require('express');
const router = express.Router();
const { getSpotifyPlaylistTracks } = require('../services/spotify');
const { searchAndAddToYTMusic } = require('../services/ytmusic');

router.post('/', async (req, res) => {
  const { spotifyToken, playlistId } = req.body;

  try {
    const songs = await getSpotifyPlaylistTracks(playlistId, spotifyToken);
    await searchAndAddToYTMusic("Imported Playlist", songs);
    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to transfer playlist." });
  }
});

module.exports = router;