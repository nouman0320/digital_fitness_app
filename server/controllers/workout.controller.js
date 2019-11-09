const Workout = require('../models/workout.model');
ObjectId = require('mongodb').ObjectID;

// method to remove workout
exports.removeWorkout = function(req, res){
  Workout.findOneAndDelete({"_id": ObjectId(req.params._id)})
  .then(function(workout){
    return res.status(200).json({
      status: 200,
      data: workout,
      message: "Success"
    });
  })
  .catch(function (err) {
    return res.status(400).json({
      status: 400,
      message: err.message
    });
  });
}

// method to get workouts
exports.getWorkouts = function(req, res){
  Workout.find({"_userId": req.params._userId})
  .then(function (workout) {
    return res.status(200).json({
      status: 200,
      data: workout,
      message: "Success"
    });
  })
  .catch(function (err) {
    return res.status(400).json({
      status: 400,
      message: err.message
    });
  });

}



// method for new workout
exports.newWorkout = function(req, res){

  const workout = new Workout({
    _userId: req.body._userId,
    category: req.body.category,
    type: req.body.type,
    warmedup: req.body.warmedup,
    stretched: req.body.stretched,
    achieved: req.body.achieved
  });

  //console.log(workout);

  workout.save()
  .then(function (addedWorkout) {
    return res.status(200).json({
      status: 200,
      data: addedWorkout,
      message: 'Success'
    });
  }).catch(function (err) {
    return res.status(400).json({
      status: 400,
      message: err.message
    });
  });
}