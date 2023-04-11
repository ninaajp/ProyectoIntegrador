CREATE SCHEMA aplicacion;

USE aplicacion;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) NOT NULL UNIQUE,
usuario VARCHAR(100) NOT NULL,
password VARCHAR(250) NOT NULL,
foto VARCHAR (100) NOT NULL,
nacimiento DATE NOT NULL,
DNI INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE productos(
id int unsigned primary key auto_increment,
foto varchar(100) unique not null,
texto varchar(250) not null,

createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null

FkUserId INT UNSIGNED,
FOREIGN KEY (PkUserId) REFERENCES usuarios(id)

);

CREATE TABLE productos(
id int unsigned primary key auto_increment,
texto varchar(250) not null,

createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null

FkUserId INT UNSIGNED,
FOREIGN KEY (PkUserId) REFERENCES usuarios(id)

FkProductosId INT UNSIGNED,
FOREIGN KEY (FkProductosId) REFERENCES productos(id)

);

INSERT INTO usuarios (email, usuario, foto, password, nacimiento, dni)
VALUES ('Nina', 'nina@gmail.com', '/images/users/default-image.png', '1234', '2000-01-01', 43321297);

INSERT INTO productos (foto, texto, FkUserId)
VALUES ('/images/products/camisetaArg.png', 'texto descripcion', 1);

INSERT INTO comentarios (texto, FkUserId)
VALUES ('texto del comentario', 1, 1);
