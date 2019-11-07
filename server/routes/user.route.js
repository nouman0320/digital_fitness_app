const express = require('express');

const UserCtrl = require('../controllers/user.controller');

const router = express.Router();

router.post('/', UserCtrl.create);
router.get('/:email', UserCtrl.userDetails);

module.exports = router;