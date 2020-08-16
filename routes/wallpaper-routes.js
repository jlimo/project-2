const express = require('express');
const wallController = require('../controllers/wallpaper-controller');
const authHelpers = require('../auth/auth-helpers');
const wallRouter = express.Router();


wallRouter.get('/', wallController.index);
wallRouter.post('/', authHelpers.loginRequired, wallController.create);

wallRouter.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('wallpaper/wallpaper-new');
});

// wallRouter.get('/:id', wallController.show);
// wallRouter.get(
//     '/:id/edit',
//     authHelpers.loginRequired,
//     wallController.edit
// );
// wallRouter.put('/:id', authHelpers.loginRequired, wallController.update);
// wallRouter.delete(
//     '/:id',
//     authHelpers.loginRequired,
//     wallController.delete
// );





module.exports = wallRouter;