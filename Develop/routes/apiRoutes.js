const router = require('express').Router();
const Workout = require('../models/Workout');

// Need to write all routes to connect input into the database and render on screen

router.post('/api/workout', (req, res) => {
  db.Workout.create({}).then(function (res) {
    console.log(res);
  });
});

module.exports = router;
