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
        .manyOrNone('SELECT * FROM wallpaper ORDER BY id ASC')
        .then((wallpaper) => {
            return wallpaper.map((wallpaper) => new this(wallpaper));
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
        return db
        .one(
            `INSERT INTO wallpaper
            (name, description, image)
            VALUES ($/name/, $/description/, $/image/)
            RETURNING *`
            , this)
            .then((wallpaper) => Object.assign(this, wallpaper));
    }

    update(changes) {
        Object.assign(this, changes);
        return db.one(
            `UPDATE wallpaper SET
            name = $/name/,
            description = $/description/,
            image = $/image/
            WHERE id = $/id/
            RETURNING *`,
            this)
            .then((wallpaper) => Object.assign(this, wallpaper));
    }
    
    delete() {
        return db.none('DELETE FROM WHERE id = $1', this.id);
    }
}

module.exports = Wallpaper;