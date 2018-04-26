CREATE DATABASE technical;

USE technical;

CREATE TABLE users (
  id int NOT NULL auto_increment,
  username varchar(50),
  password varchar(255),
  picture varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE teams (
    id int NOT NULL auto_increment,
    team_name varchar(50),
    PRIMARY KEY(id)
);

CREATE TABLE channels (
    id int NOT NULL auto_increment,
    channel_name varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE UsersTeams (
    id int NOT NULL auto_increment,
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    teamsId int NOT NULL,
    FOREIGN KEY(teamsId) REFERENCES teams(id),
    PRIMARY KEY(id)
);

CREATE TABLE UsersChannels (
    id int NOT NULL auto_increment,
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    channelsId int NOT NULL,
    FOREIGN KEY(channelsId) REFERENCES channels(id),
    PRIMARY KEY(id)
);

CREATE TABLE messages (
    id int NOT NULL auto_increment,
    messages varchar(255),
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    PRIMARY KEY(id)
);

CREATE TABLE comments (
    id int NOT NULL auto_increment,
    comment varchar(255),
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    PRIMARY KEY(id)
);

CREATE TABLE stars (
    id int NOT NULL auto_increment,
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    messagesId int NOT NULL,
    FOREIGN KEY(messagesId) REFERENCES messages(id),
    commentsId int NOT NULL,
    FOREIGN KEY(commentsId) REFERENCES comments(id),
    channelsId int NOT NULL,
    FOREIGN KEY(channelsId) REFERENCES channels(id),
    PRIMARY KEY(id)
);

CREATE TABLE reactions (
    id int NOT NULL auto_increment,
    reaction varchar(50),
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    messagesId int NOT NULL,
    FOREIGN KEY(messagesId) REFERENCES messages(id),
    commentsId int NOT NULL,
    FOREIGN KEY(commentsId) REFERENCES comments(id),
    PRIMARY KEY(id)
);

CREATE TABLE attachments (
    id int NOT NULL auto_increment,
    type varchar(50),
    userId int NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id),
    messagesId int NOT NULL,
    FOREIGN KEY(messagesId) REFERENCES messages(id),
    commentsId int NOT NULL,
    FOREIGN KEY(commentsId) REFERENCES comments(id),
    PRIMARY KEY(id)
);