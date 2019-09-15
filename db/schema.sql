-- Remove burgers_db if it already exists
DROP DATABASE IF EXISTS burgers_db;

-- Create burgers_db
CREATE DATABASE burgers_db;

-- Use burgers_db
USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers (
   -- id will only take integers, will increment automatically and is the primary key
   id AUTO_INCREMENT PRIMARY KEY INT,
   -- String (name of the burger), must have a value
   burger_name VARCHAR (100) NOT NULL,
   -- Boolean with the 'not eaten' status as false
   devoured BOOLEAN default false
);
