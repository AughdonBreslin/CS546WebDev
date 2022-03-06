const express = require('express');
const router = express.Router();
const data = require('../data');
const bandData = data.bands;

router.route('/bands')
    // req, res = request, response
    .get(async (req,res) => {
    try {
        const bandList = await bandData.getAll();
        res.json(bandList);
    } catch(e) {
        // Something went wrong with the server!
        res.status(500).send(e);
    }
    });

router
    .route('/bands/:id')
    .get(async (req, res) => {
    try {
        const band = await bandData.get(req.params.id);
        res.json(band);
    } catch (e) {
        res.status(404).json(e);
    }
    });

module.exports = router;