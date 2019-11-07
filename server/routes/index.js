const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');


router.get('/', function (req, res) {
  res.send('API works!');
});

router.use('/users', userRoutes);

module.exports = router;