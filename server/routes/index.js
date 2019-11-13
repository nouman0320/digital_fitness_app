const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');
const workoutRoutes = require('./workout.route');
const measurementRoutes = require('./measurement.route');
const logRoutes = require('./log.route');


router.get('/', function (req, res) {
  res.send('API works!');
});

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);
router.use('/measurements', measurementRoutes);
router.use('/logs', logRoutes);

module.exports = router;