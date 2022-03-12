const express = require('express');
const router = express.Router();
const data = require('../data');
const bandData = data.bands;
const validation = require('../validation');

// GET /bands
router.get('/', async (req, res) => {
    try {
      const bandList = await bandData.getAll();
      return res.status(200).json(bandList);
    } catch (e) {
      return res.status(500).json({error: e});
    }
});

// POST /bands
router.post('/', async (req, res) => {
    const bandPostData = req.body;
    try {
        validation.checkIsProper(bandPostData.name, 'string', 'name');
        validation.checkArray(bandPostData.genre, 'string', 'genre');
        validation.checkIsProper(bandPostData.website, 'string', 'website');
        validation.checkWebsite(bandPostData.website);
        validation.checkIsProper(bandPostData.recordLabel, 'string', 'recordLabel');
        validation.checkArray(bandPostData.bandMembers,'string','bandName');
        validation.checkIsProper(bandPostData.yearFormed,'number','yearFormed');
        validation.checkYear(bandPostData.yearFormed);
    } catch (e) {
        return res.status(400).json({error: e});
    }
    try {
        const {name,genre, website, recordLabel, bandMembers, yearFormed, albums, overallRating} = bandPostData;
        const newBand = await bandData.create(name, genre, website, recordLabel, bandMembers, yearFormed);
        return res.status(200).json(newBand);
    } catch (e) {
      return res.status(400).json({error: e});
    }
})

// GET /bands/{id}
router.get('/:id', async (req, res) => {
    try {
      req.params.id = validation.checkId(req.params.id, 'Id URL Param');
    } catch (e) {
      return res.status(400).json({error: e});
    }
    try {
      const band = await bandData.get(req.params.id);
      return res.status(200).json(band);
    } catch (e) {
      return res.status(404).json({error: e});
    }
});

// PUT /bands/{id}
router.put('/:id', async (req, res) => {
  const bandPostData = req.body;
  try {
      req.params.id = validation.checkId(req.params.id, 'Id URL Param');
      validation.checkIsProper(bandPostData.name, 'string', 'name');
      validation.checkArray(bandPostData.genre, 'string', 'genre');
      validation.checkIsProper(bandPostData.website, 'string', 'website');
      validation.checkWebsite(bandPostData.website);
      validation.checkIsProper(bandPostData.recordLabel, 'string', 'recordLabel');
      validation.checkArray(bandPostData.bandMembers,'string','bandName');
      validation.checkIsProper(bandPostData.yearFormed,'number','yearFormed');
      validation.checkYear(bandPostData.yearFormed);
  } catch (e) {
      return res.status(400).json({error: e});
  }
  try {
    const {name,genre, website, recordLabel, bandMembers, yearFormed, albums, overallRating} = bandPostData;
    const band = await bandData.update(req.params.id, name, genre, website, 
      recordLabel, bandMembers, yearFormed);
    return res.status(200).json(band);
  } catch(e) {
    return res.status(404).json({error: e});
  }
});

// DELETE /bands/{id}
router.delete('/:id', async (req, res) => {
  try {
    req.params.id = validation.checkId(req.params.id, 'ID URL Param');
  } catch(e) {
    return res.status(400).json({error: e});
  }
  try {
    await bandData.get(req.params.id);
  } catch(e) {
    return res.status(404).json({error: e});
  }
  try {
    const deletedBand = bandData.remove(req.params.id);
    return res.status(200).json({bandId: req.params.id, deleted: true});
  } catch(e) {
    return res.status(404).json({error:e});
  }
});


module.exports = router;