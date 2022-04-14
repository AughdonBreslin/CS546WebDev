const path = require('path');
const validation = require('../validation');

const constructorMethod = (app) => {
  // GET http://localhost:3000/
  app.get('/', (req, res) => {
    res.render('primes/primes.handlebars', {title: "Prime Number Checker"});
  });
  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = constructorMethod;