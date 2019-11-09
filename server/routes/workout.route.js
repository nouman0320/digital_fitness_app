const express = require('express');

const WorkoutCtrl = require('../controllers/workout.controller');

const router = express.Router();

router.post('/add', WorkoutCtrl.newWorkout);
router.get('/:_userId', WorkoutCtrl.getWorkouts);
router.delete('/:_id', WorkoutCtrl.removeWorkout);



module.exports = router;