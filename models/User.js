const db = require('../db/config');

class User {
    constructor ({ id, username, password_digest}) {
        this.id = id || null;
        this.username = username;
        this.password_digest = password_digest;
    }

    static findByUserName(username) {
        return db
        .oneOrNone('SELECT * FROM users WHERE username = $1', username)
        .then((user) => {
            if (user) return new this(user);
            else throw new Error('User not found');
        });
    }

    save() {
        return db
        .one(
            `INSERT INTO users
            (username, password_digest)
            VALUES ($/username/, $/password_digest/)
            RETURNING *`, this)
            .then((savedUser) => Object.assign(this, savedUser));
    }
}

module.exports = User;