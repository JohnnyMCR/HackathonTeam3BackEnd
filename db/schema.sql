DROP DATABASE IF EXISTS petitioners_dev;

CREATE DATABASE petitioners;

\c petitioners_dev;

CREATE TABLE petitioners (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    borough TEXT NOT NULL,
    address TEXT NOT NULL,
    bin_mpg INT NOT NULL,
    bin_p INT NOT NULL
);
