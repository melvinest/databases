DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int AUTO_INCREMENT,
  roomname varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int AUTO_INCREMENT,
  username int,
  text varchar(255),
  roomname int,
  PRIMARY KEY (id),
  FOREIGN KEY (roomname) REFERENCES rooms(id),
  FOREIGN KEY (username) REFERENCES users(id)
);



SHOW TABLES;
DESCRIBE rooms;
DESCRIBE messages;


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

