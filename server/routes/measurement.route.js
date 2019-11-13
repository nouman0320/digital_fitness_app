const express = require('express');

const MeasurementCtrl = require('../controllers/measurement.controller');

const router = express.Router();

router.post('/add', MeasurementCtrl.newMeasurement);
router.get('/:_userId', MeasurementCtrl.getMeasurements);
router.delete('/:_id', MeasurementCtrl.removeMeasurement);



module.exports = router;