const Wallpaper = require('../models/wallpaper')

 const wallController = {
     index(req, res, next) {
         Wallpaper.getAll()
         .then(wallpaper => {
             res.render({
                 wallpaper
             });
         }).catch(next);
     },

     create(req, res, next) {
         new wallpaper(req.body)
         .save()
         .then(wallpaper => {
             res.render({ wallpaper })
         }).catch(next);
     },
     show(req, res, next) {
         Wallpaper.getById(req.params.id)
         .then((wallpaper) => {
             res.locals.wallpaper = wallpaper;
             next();
         })
         .catch(next);
     },
     update(req, res, next) {
         let incomingStatus = false;
         if (req.body.status === 'done') {
             incomingStatus = true;
         }
         Wallpaper.getById(req.params.id)
         .then((foundwallpaper) => {
             return foundwallpaper.update({
                 name: req.body.name,
                 status: incomingStatus,
                 description: req.body.description,
                 image: req.body.image,
             });
         })
         .then((updatedwallpaper) => {
            res.redirect(`/wallpaper/${updatedwallpaper.id}`);
         })
         .catch(next);
     },
 }

 






module.exports = wallController;