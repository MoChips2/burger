DROP DATABASE if exists burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR (255) NOT NULL,
devoured BOOLEAN
);