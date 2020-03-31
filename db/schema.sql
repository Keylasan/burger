CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id int AUTO_INCREMENT,
    burger_name VARCHAR(66),
    devoured BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY(id)
);