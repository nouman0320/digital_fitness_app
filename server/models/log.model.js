const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  _userId: {
    type: String,
    required: true
  },
  log: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;