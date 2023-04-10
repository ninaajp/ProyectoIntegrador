create database usuarios;
use usuarios;
create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
usuario varchar(150) not null,
password varchar(250) not null,
foto varchar(200),
fecha date,
dni int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);
CREATE TABLE productos(
id int unsigned primary key auto_increment,
foto varchar(250) unique not null,
texto varchar(250) not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);
