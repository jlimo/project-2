const express = require('express');
const wallRouter = express.Router();

const wallController = require('../controllers/wallpaper-controller');


wallRouter.get('/', wallController.index);
wallRouter.post('/', wallController.create);

wallRouter.get('/wallpaper',)



module.exports = wallRouter;