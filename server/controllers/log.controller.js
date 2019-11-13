const Log = require('../models/log.model');
ObjectId = require('mongodb').ObjectID;

// method to remove log
exports.removeLog = function(req, res){
  Log.findOneAndDelete({"_id": ObjectId(req.params._id)})
  .then(function(log){
    return res.status(200).json({
      status: 200,
      data: log,
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

// method to get logs
exports.getLogs = function(req, res){
  Log.find({"_userId": req.params._userId})
  .then(function (log) {
    return res.status(200).json({
      status: 200,
      data: log,
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



// method for new log
exports.newLog = function(req, res){

  const log = new Log({
    _userId: req.body._userId,
    log: req.body.log
  });


  log.save()
  .then(function (addedLog) {
    return res.status(200).json({
      status: 200,
      data: addedLog,
      message: 'Success'
    });
  }).catch(function (err) {
    return res.status(400).json({
      status: 400,
      message: err.message
    });
  });
}