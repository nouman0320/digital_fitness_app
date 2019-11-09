const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  _userId: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  warmedup: {
    type: Boolean,
    required: true
  },
  stretched: {
    type: Boolean,
    required: true
  },
  achieved: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;