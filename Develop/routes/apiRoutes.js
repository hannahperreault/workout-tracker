const router = require('express').Router();
const Workout = require('../models/Workout');
const { db } = require('../models/Workout');

//example. make sure routes match how its set up here

router.post('/api/workout', (req, res) => {
  db.Workout.create({}).then(function (res) {
    console.log(res);
  });
});
