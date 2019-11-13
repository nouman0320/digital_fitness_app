const Measurement = require('../models/measurement.model');
ObjectId = require('mongodb').ObjectID;

// method to remove measurement
exports.removeMeasurement = function(req, res){
  Measurement.findOneAndDelete({"_id": ObjectId(req.params._id)})
  .then(function(measurement){
    return res.status(200).json({
      status: 200,
      data: measurement,
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

// method to get measurements
exports.getMeasurements = function(req, res){
  Measurement.find({"_userId": req.params._userId})
  .then(function (measurement) {
    return res.status(200).json({
      status: 200,
      data: measurement,
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



// method for new measurement
exports.newMeasurement = function(req, res){

  const measurement = new Measurement({
    _userId: req.body._userId,
    waist: req.body.waist,
    hips: req.body.hips,
    chest: req.body.chest,
    abs: req.body.abs,
    arms: req.body.arms
  });


  measurement.save()
  .then(function (addedMeasurement) {
    return res.status(200).json({
      status: 200,
      data: addedMeasurement,
      message: 'Success'
    });
  }).catch(function (err) {
    return res.status(400).json({
      status: 400,
      message: err.message
    });
  });
}