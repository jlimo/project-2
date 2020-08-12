CREATE TABLE IF NOT EXISTS favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    wallpaper_id INTEGER,
);
ALTER TABLE favorites ADD FOREIGN KEY user_id REFERENCES users(id);
ALTER TABLE favorites ADD FOREIGN KEY wallpaper_id REFERENCES wallpaper(id);
