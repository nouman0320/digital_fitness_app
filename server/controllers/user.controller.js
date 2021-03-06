const User = require('../models/user.model');
const Workout = require('../models/workout.model');
ObjectId = require('mongodb').ObjectID;

// Method to login user
exports.userLogin = function(req, res){
    //console.log(req.body);
    User.findOne({"email": req.body.email, "password": req.body.password})
    .then(function (user) {

        if(user == null) throw new Error("Email or Password incorrect");

      return res.status(200).json({
        status: 200,
        data: {"_id": user['_id'],
        "email": user['email']},
        message: "Success"
      });
    })
    .catch(function (err) {
      //console.log(err.message);
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });
}


// Method to get user details by email
exports.userDetails = function(req, res){
    User.findOne({"email": req.params.email})
    .then(function (user) {

        if(user == null) throw new Error("User doesn't exist");

        const userR = {
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "joined_date": user.joined_date,
            "weight": user.weight,
            "height": user.height
        }

      return res.status(200).json({
        status: 200,
        data: userR,
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


// Method to update weight and height
exports.updateWeightHeight = function (req, res) {

  const update = {
    "weight": req.body.weight,
    "height": req.body.height
  }

  //console.log(update);

  if(req.body.weight <= 0 || req.body.height <=0 || req.body.weight > 100 || req.body.height > 10){
    return res.status(400).json({
      status: 400,
      message: "Invalid weight/height"
    });
  }

  User.findOneAndUpdate({"_id":ObjectId(req.body._id)}, update, false)
  .then(function(sucess){
    return res.status(200).json({
      status: 200,
      data: {},
      message: 'Success'
    });
  }).catch(function(err){
    return res.status(400).json({
      status: 400,
      message: err.message
    });
  });
}

// Method to delete account
exports.delete = function (req, res) {
  User.findOneAndDelete({"_id": ObjectId(req.params._id)})
  .then(function(user){
    
    Workout.deleteMany({"_userId": req.params._id});

    return res.status(200).json({
      status: 200,
      data: user,
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


// Method to update user profile
exports.update = function (req, res) {
  const user = {
    email: req.body.data.email,
    first_name: req.body.data.first_name,
    last_name: req.body.data.last_name,
    password: req.body.data.password,
    weight: req.body.data.weight,
    height: req.body.data.height
  }


  

  User.find({email : user.email}, function (err, docs) {
    console.log(docs);   
    /*
    if(docs.length > 0){
      return res.status(400).json({
        status: 400,
        message: "Email is already in use"
      });
    }
    */

    User.findOneAndUpdate({"_id":ObjectId(req.body.data._id)}, user, false)
    .then(function(sucess){
      return res.status(200).json({
        status: 200,
        data: {},
        message: 'Success'
      });
    }).catch(function(err){
      return res.status(400).json({
        status: 400,
        message: err.message
      });
    });

  });
}

// Method to create new user
exports.create = function (req, res) {
    const user = new User({
      email: req.body.data.email,
      first_name: req.body.data.first_name,
      last_name: req.body.data.last_name,
      password: req.body.data.password,
      weight: req.body.data.weight,
      height: req.body.data.height
    });


    User.find({email : user.email}, function (err, docs) {
      console.log(docs);   
      if(docs.length > 0){
        return res.status(400).json({
          status: 400,
          message: "User already exists"
        });
      }

      user.save()
      .then(function (createdUser) {
        return res.status(200).json({
          status: 200,
          data: createdUser,
          message: 'Success'
        });
      })

    }).catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }