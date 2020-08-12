CREATE TABLE IF NOT EXISTS wallpapers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    image TEXT NOT NULL
);