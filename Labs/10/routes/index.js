const privateRoutes = require('./private');
const signupRoutes = require('./signup');
const loginRoutes = require('./login');

const constructorMethod = (app) => {
  // TEMPORARY
  app.get('/', (req, res) => {
    if(req.session.username) {
      res.redirect('/private');
    } else {
      res.render('user/login.handlebars', {title: "Login", error: ""});
    }
  });

  app.use('/signup', signupRoutes);
  app.use('/login', loginRoutes);
  app.use('/private', privateRoutes);

  // User is logged in and is not having it
  app.get('/logout', (req, res) => {
    if(req.session.username) {
      req.session.destroy(function (err) {
        res.render('user/logout.handlebars', {title: "You've been logged out.", error: ""});
      })
    } else {
      res.redirect('/');
    }
  });

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
