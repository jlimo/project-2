const express = require('express');
const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');
const authRouter = express.Router();

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('/auth/login');
});
authRouter.post(
    '/login',
    passport.authenticate('local', {
        sucessRedirect: '/user',
        failureRedirect: '/auth/login',
        falureFlash: true,
    })
);

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('back');
});

module.exports = authRouter;