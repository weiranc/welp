DROP DATABASE IF EXISTS welp;

CREATE DATABASE welp;

USE welp;

CREATE table choices (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restaurant VARCHAR(255)
);

INSERT INTO choices (restaurant) VALUES ("McDonalds");
INSERT INTO choices (restaurant) VALUES ("Arby's");
INSERT INTO choices (restaurant) VALUES ("Taco Hell");
INSERT INTO choices (restaurant) VALUES ("Pita Pit");


-- to run this file: navigate to the directory that contains shchema.sql
-- and run from terminal: run: mysql -u root < schema.sql