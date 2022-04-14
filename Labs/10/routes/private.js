const express = require('express');
const router = express.Router();
const validation = require('../validation');

// GET /private
router.get('/', async (req, res) => {
  let error = req.query.valid || "";
  let username = req.session.username || "user";
  res.render('user/private.handlebars', {title: "Private", username: username, error: error});
});

module.exports = router;
