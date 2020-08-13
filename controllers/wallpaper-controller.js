const Wallpaper = require('../models/wallpaper')

 const wallController = {};

 wallController.index = (req, res, next) => {
        Wallpaper.getAll()
        .then((wallpaper) => {
            res.render('wallpaper/index', {
                message: 'ok',
                data: { wallpaper },
            });
        })
        .catch(next);
    }

    wallController.show = (req, res, next) => {
        Wallpaper.getById(req.params.id)
        .then((wallpaper) => {
            res.locals.wallpaper = wallpaper;
            next();
        })
        .catch(next);
    };

    wallController.create = (req,res) => {
        new Wallpaper({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image
        })
        .save()
        .then(() => {
            res.redirect('/wallpaper')
        })
        .catch(next);
    };
    wallController.update = (req, res) => {
        Wallpaper.getById(req.params.id)
        .then((wallpaper) => {
            return wallpaper.update(req.body);
        })
        .then((updatedWallpaper) => {
            res.redirect(`/wallpaper/${updatedWallpaper.id}`);
        })
        .catch(next);
    }

