const express = require('express');
const wallController = require('../controllers/wallpaper-controller');
const wallRouter = express.Router();


wallRouter.get('/', wallController.index);
wallRouter.post('/', wallController.create);

//wallRouter.get('/:id([0-9]+)', wallController.show, wallController.show, 




module.exports = wallRouter;