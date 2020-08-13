const db = require('../db/config');

class Wallpaper {
    constructor(wallpaper) {
        this.id = wallpaper.id || null;
        this.name = wallpaper.name;
        this.description = wallpaper.description;
        this.image = wallpaper.image || null;
    }

    static getAll() {
        return db
        .manyOrNone('SELECT * FROM wallpaper ORDER BY id DESC')
        .then((wallpapers) => {
            return wallpapers.map(wallpaper => new this(wallpaper));
        });
    }

    static getById(id) {
        return db
        .oneOrNone('SELECT * FROM wallpaper WHERE id = $1', id)
        .then((wallpaper) => {
            if (wallpaper) return new this(wallpaper);
            else throw new Error('No wallpaper found');
        });
    }
    save() {
        return db.one(`INSERT INTO wallpaper
        (name, description, image)
         VALUES ($/name/, $/desciption/, $/image/)
         RETURNING *`, this).then(wallpaper => Object.asign(this, todo));
    }
}

module.exports = Wallpaper;