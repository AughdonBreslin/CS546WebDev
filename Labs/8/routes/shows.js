const express = require('express');
const router = express.Router();
const data = require('../data');
const { getShowSearch } = require('../data/searchshows');
const showData = data.show;
const validation = require('../validation');

// GET http://localhost:3000/show/:id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    let show = 0;
    try {
        req.params.id = validation.checkIsProper(id, 'number', 'Id URL Param');
        validation.checkInt(id,'ID URL Param');
        const weirdShow = await showData.getShow(id);
        show = weirdShow;
    } catch(e) {
        return res.render('shows/notfound.handlebars', {
            title: "Show Not Found",
            id: req.params.id || id});
    }
    try {
        let notEmpty = true;
        if(show.genres.length == 0){
            notEmpty = false;
        }
        if(!show.image){
            show.image={medium:"https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg"}
        }
        res.render('shows/results.handlebars', {
            title: show.name || "N/A",
            img: show.image.medium,
            language: show.language || "N/A",
            hasGenre: notEmpty,
            genre: show.genres,
            rating: show.rating.average || "N/A",
            network: show.network.name || "N/A",
            summary: show.summary || "N/A"
            });
    } catch(e) {
        return res.status(400).json({error: e});
    }
});



module.exports = router;
