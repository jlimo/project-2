const Wallpaper = require('../models/wallpaper')

const wallController = {
    index(req, res, next) {
        Wallpaper.getAll()
        .then((wallpaper) => {
            res.render('wallpaper/index', {
                wallpaper,
            });
        })
    }
}