const express = require('express');

const UserCtrl = require('../controllers/user.controller');

const router = express.Router();

router.post('/create', UserCtrl.create);
router.post('/login', UserCtrl.userLogin);
router.get('/:email', UserCtrl.userDetails);


module.exports = router;