const express = require('express');

const WorkoutCtrl = require('../controllers/workout.controller');

const router = express.Router();

router.post('/add', WorkoutCtrl.newWorkout);



module.exports = router;