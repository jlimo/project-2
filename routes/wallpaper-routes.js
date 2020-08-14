const express = require('express');
const wallController = require('../controllers/wallpaper-controller');
const wallRouter = express.Router();


wallRouter.get('/', wallController.index);
wallRouter.post('/', wallController.create);
// wallRouter.get('/')

// wallRouter.get('/:id)', wallRouter.show, (req, res) => {
//     res.render('wallpaper/show', {
//         wallpaper: res.locals.wallpaper,
//     })
// });

module.exports = wallRouter;