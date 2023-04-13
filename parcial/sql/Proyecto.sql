CREATE DATABASE aplicacion;

USE aplicacion;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    fecha_de_nacimiento DATE NOT NULL,
    dni INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL UNIQUE,
    descripcion VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FkUserId INT UNSIGNED,
    FOREIGN KEY (FkUserId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FkUserId INT UNSIGNED,
    FOREIGN KEY (FkUserId) REFERENCES usuarios(id),

    FkProductosId INT UNSIGNED,
    FOREIGN KEY (FkProductosId) REFERENCES productos(id)
);

INSERT INTO usuarios (email,nombre,contrasenia,foto,fecha_de_nacimiento,dni)
VALUES ('nina@gmail.com', 'Nina', '1234', '/images/users/default-image.png', '01-01-2000', 43321297),
('santi@gmail.com', 'Santi', '1235', '/images/users/default-image.png', '27-08-2002', 44447666),
('carolin@gmail.com', 'Carolina', '1236', '/images/users/default-image.png', '10-01-2000',42121297),
('sofia@gmail.com', 'Sofia', '1237', '/images/users/default-image.png', '30-11-2003', 50000001),
('luis@gmail.com', 'Luis', '1238', '/images/users/default-image.png', '30-11-1985', 30000001);

/* INSERT INTO usuarios (email, usuario, foto, password, nacimiento, dni)
VALUES ('Nina', 'nina@gmail.com', '/images/users/default-image.png', '1234', '2000-01-01', 43321297); */

INSERT INTO productos (nombre,imagen,descripcion,FkUserId)
VALUES ('Camiseta Argentina','/images/products/camisetaArg.png','descripcion', 1),
('Camiseta de Racing', '/images/products/camisetaRacing.jpeg', 'descripcion', 2);
('Camiseta de Atletico', '/images/products/camisetaAtletico.jpeg', 'descripcion', 2);
('Camiseta de Elche', '/images/products/camisetaElche.jpeg', 'descripcion', 2);

INSERT INTO comentarios (texto,FkUserId,FkProductosId)
VALUES ('Muy buena calidad', 1, 1),
('Excelente camiseta', 1, 1),
('Buena casaca', 2, 2);

