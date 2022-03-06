const albumRoutes = require('./albums');
const bandRoutes = require('./bands');

// not much to do here
const constructorMethod = (app) => {
  app.use('/albums', albumRoutes);
  app.use('/bands', bandRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;