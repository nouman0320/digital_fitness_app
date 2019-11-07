const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  first_name: {
      type: String,
      required: true
  },
  last_name: {
    type: String,
    required: true
  },
  password: {
      type: String,
      required: true
  },
  height: {
      type: Number,
      required: true
  },
  weight: {
    type: Number,
    required: true
  },
  join_date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;