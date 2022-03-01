const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;
const workData = data.work;

router.route('/people')
  // req, res = request, response
  .get(async (req,res) => {
    try {
      const peopleList = await peopleData.getPeople();
      res.json(peopleList);
    } catch(e) {
      // Something went wrong with the server!
      res.status(500).send(e);
    }
  });
router
  .route('/people/:id')
  .get(async (req, res) => {
    try {
      const person = await peopleData.getPersonById(req.params.id);
      res.json(person);
    } catch (e) {
      res.status(404).json(e);
    }
  });

  router.route('/work')
  // req, res = request, response
  .get(async (req,res) => {
    try {
      const workList = await workData.getWork();
      res.json(workList);
    } catch(e) {
      // Something went wrong with the server!
      res.status(500).send(e);
    }
  });

router
  .route('/work/:id')
  .get(async (req, res) => {
    try {
      const work = await workData.getWorkById(req.params.id);
      res.json(work);
    } catch (e) {
      res.status(404).json(e);
    }
  });

module.exports = router;
