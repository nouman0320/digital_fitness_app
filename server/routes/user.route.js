const express = require('express');

const UserCtrl = require('../controllers/user.controller');

const router = express.Router();

router.post('/update-weight-height', UserCtrl.updateWeightHeight);
router.post('/create', UserCtrl.create);
router.post('/update', UserCtrl.update);
router.post('/login', UserCtrl.userLogin);
router.get('/:email', UserCtrl.userDetails);
router.delete('/:_id', UserCtrl.delete);


module.exports = router;