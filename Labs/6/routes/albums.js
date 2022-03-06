const express = require('express');
const router = express.Router();
const data = require('../data');
const albumData = data.albums;

router.route('/albums')
    // req, res = request, response
    .get(async (req,res) => {
    try {
        const albumList = await albumData.getAll();
        res.json(albumList);
    } catch(e) {
        // Something went wrong with the server!
        res.status(500).send(e);
    }
    });

router
    .route('/albums/:id')
    .get(async (req, res) => {
    try {
        const album = await albumData.get(req.params.id);
        res.json(album);
    } catch (e) {
        res.status(404).json(e);
    }
    });

module.exports = router;