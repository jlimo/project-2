const express = require('express');
const wallController = require('../controllers/wallpaper-controller');
const wallRouter = express.Router();


wallRouter.get('/', wallController.index);
wallRouter.post('/', wallController.create);






module.exports = wallRouter;