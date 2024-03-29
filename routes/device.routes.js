const express = require('express');
const deviceControllers = require('../controllers/device.controllers');
const authen = require('../middleware/authen');

const router = express.Router();

router.get('/scan/:scannerId/:key', deviceControllers.getRedirect);
router.post('/activate', authen, deviceControllers.activate);
router.get('/get-all', authen, deviceControllers.getDeviceAll);

module.exports = router;
