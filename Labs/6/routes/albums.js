const express = require('express');
const router = express.Router();
const data = require('../data');
const { updateOverall } = require('../data/albums');
const albumData = data.albums;
const bandData = data.bands;
const validation = require('../validation');

// GET /albums/{bandId}
//TODO
router.get('/:id', async (req, res) => {
  try {
    req.params.id = validation.checkId(req.params.id, 'Id URL Param');
  } catch (e) {
    return res.status(400).json({error: e});
  }
  try {
    const albumList = await albumData.getAll(req.params.id);
    if(albumList.length == 0){
      return res.status(404).json({error: "Band has no albums."});
    }
    return res.status(200).json(albumList);
  } catch (e) {
    return res.status(404).json({error: e});
  }
});


//POST /albums/{bandId}
router.post('/:id', async (req, res) => {
  const albumPostData = req.body;
  try {
    req.params.id = validation.checkId(req.params.id, 'Id URL Param');
    validation.checkIsProper(albumPostData.title, 'string', 'title');
    validation.checkIsProper(albumPostData.releaseDate,'string','releaseDate');
    albumPostData.releaseDate = albumPostData.releaseDate.trim();
    validation.checkRelease(albumPostData.releaseDate);
    validation.checkTracks(albumPostData.tracks,'string','tracks');
    validation.checkIsProper(albumPostData.rating,'number','rating');
    validation.checkRating(albumPostData.rating);
  } catch(e) {
    return res.status(400).json({error: e});
  }
  try {
    const {title, releaseDate, tracks, rating} = albumPostData;
    const newAlbum = await albumData.create(req.params.id, title, releaseDate, tracks, rating);
    const newRating = await albumData.updateOverall(req.params.id);
    return res.status(200).json(newAlbum);
  } catch (e) {
    return res.status(404).json({error: e});
  }
});

// GET /albums/album/{albumId}
router.get('/album/:id', async (req, res) => {
  try {
    req.params.id = validation.checkId(req.params.id, 'Id URL Param');
  } catch (e) {
    return res.status(400).json({error: e});
  }
  try {
    const album = await albumData.get(req.params.id);
    return res.status(200).json(album);
  } catch (e) {
    return res.status(404).json({error: e});
  }
});

// DELETE /albums/{albumId}
router.delete('/:id', async (req, res) => {
  try {
    req.params.id = validation.checkId(req.params.id, 'Id URL Param');
  } catch (e) {
    return res.status(400).json({error: e});
  }
  try {
    let band2 = await albumData.remove(req.params.id);
    const newRating = await albumData.updateOverall(band2._id);
    return res.status(200).json({albumId: req.params.id, deleted: true});
  } catch (e) {
    return res.status(404).json({error: e});
  }
});

module.exports = router;