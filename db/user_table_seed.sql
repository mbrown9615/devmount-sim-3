
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(180),
    firstName VARCHAR(40),
    lastName VARCHAR(40)
);