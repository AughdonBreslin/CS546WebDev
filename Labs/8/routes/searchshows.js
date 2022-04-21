const express = require('express');
const router = express.Router();
const data = require('../data');
const showSearchData = data.searchShow;
const validation = require('../validation');

//POST http://localhost:3000/searchshows
router.post('/', async (req, res) => {
  let formData = req.body;
  let showSearchTerm = '';
  // Checking form data for keyword
  let errors = [];
  let errorMessage = '';
  if (!formData.showSearchTerm) {
    errors.push('No search term provided.');
  } else {
    showSearchTerm = formData.showSearchTerm
    try {
      validation.checkIsProper(showSearchTerm,'string','showSearchTerm');
    } catch (e) {
      errorMessage = e;
    }
  }
  // if errors, refresh page but with errors
  if (errors.length > 0 || errorMessage) {
    // handlebars layout
    res.status(400).render('searchshows/showFinder.handlebars', {
      title: "Show Finder",
      errors: errors,
      hasErrors: true,
      showSearchTerm: showSearchTerm,
      errorMessage: errorMessage
    });
    return;
  }
  // else get results
  try {
    const showSearches = await showSearchData.getShowSearch(showSearchTerm)
    validation.checkIsProper(showSearchTerm, 'string', 'Id URL Param');
    let notEmpty = true;
    if(showSearches.length === 0){
      notEmpty = false;
    }
    res.render('searchshows/results.handlebars', {
      title: "Shows Found",
      showSearchTerm: showSearchTerm,
      hasShows: notEmpty,
      shows: showSearches});
  } catch(e) {
    return res.status(400).json(e);
  }
});

module.exports = router;
