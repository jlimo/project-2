const express = require('express');
const userRouter = express.Router();


const usersController = require('../controllers/user-controller');
const authHelpers = require('../auth/auth-helpers');

userRouter.get('/', authHelpers.loginRequired, usersController.index);
userRouter.post('/', usersController.create);
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});

userRouter.post('/', usersController.create);

module.exports = userRouter;