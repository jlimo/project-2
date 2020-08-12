const express = require('express');
const wallController = require('../controllers/wallpaper-controller');
const wallRouter = express.Router();

wallRouter.get('/', wallController.index);
wallRouter.post('/', wallController.create);
wallRouter.get('/new', (req, res) => {
    res.render('wallpaper/new');
});

wallRouter.get('/:id', wallController.show, (req, res) => {
    res.render('wallpaper/show', {
        wallpaper: res.locals.wallpaper,
    })
});
wallRouter.get('/:id([0-9]+)/edit', wallController.show, (req, res) => {
    res.render('wallpaper/edit', {
        wallpaper: res.locals.wallpaper,
    })
});



module.exports = wallRouter;