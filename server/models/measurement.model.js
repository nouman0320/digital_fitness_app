const mongoose = require('mongoose');

const MeasurementSchema = new mongoose.Schema({
  _userId: {
    type: String,
    required: true
  },
  waist: {
    type: Number,
    required: true
  },
  hips: {
    type: Number,
    required: true
  },
  chest: {
    type: Number,
    required: true
  },
  abs: {
    type: Number,
    required: true
  },
  arms: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Workout = mongoose.model('Measurement', MeasurementSchema);

module.exports = Workout;