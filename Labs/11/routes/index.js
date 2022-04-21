
const constructorMethod = (app) => {
  app.get('/', function (req, res) {
    res.render('shows/shows.handlebars', {title: "Show Finder"});
  });

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;