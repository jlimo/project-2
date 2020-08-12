CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (255) NOT NULL,
    password_digest VARCHAR (255) NOT NULL

);