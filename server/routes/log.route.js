const express = require('express');

const LogCtrl = require('../controllers/log.controller');

const router = express.Router();

router.post('/add', LogCtrl.newLog);
router.get('/:_userId', LogCtrl.getLogs);
router.delete('/:_id', LogCtrl.removeLog);



module.exports = router;