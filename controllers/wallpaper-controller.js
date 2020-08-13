const Wallpaper = require('../models/wallpaper')

 const wallController = {
     index(req,res, next) {
         Wallpaper.getAll()
         .then(wallpaper => {
             res.render({
                 wallpaper
             });
         }).catch(next);
     },

    //  create(req, res, next) {
    //      new wallpaper(req.body).save()
    //      .then(wallpaper => {
    //          res.render({ wallpaper })
    //      }).catch(next);
    //  }

 }

 






module.exports = wallController;