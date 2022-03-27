const showRoutes = require('./shows');
const searchShowRoutes = require('./searchshows');
const path = require('path');
const validation = require('../validation');

const constructorMethod = (app) => {
  app.use('/shows', showRoutes);
  app.use('/searchshows', searchShowRoutes);
  // http://localhost:3000/results/:id

  // GET http://localhost:3000/
  app.get('/', (req, res) => {
    res.render('searchShows/showFinder.handlebars', {title: "Show Finder"});
  });
  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = constructorMethod;