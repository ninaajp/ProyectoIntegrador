CREATE SCHEMA kitStore;

USE kitStore;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    usuario VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    fecha_de_nacimiento DATE NOT NULL,
    dni INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

CREATE TABLE productos(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL UNIQUE,
    descripcion VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,

    FkUserId INT UNSIGNED  NOT NULL,
    FOREIGN KEY (FkUserId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,

    FkUserId INT UNSIGNED NOT NULL,
    FOREIGN KEY (FkUserId) REFERENCES usuarios(id),

    FkProductosId INT UNSIGNED NOT NULL,
    FOREIGN KEY (FkProductosId) REFERENCES productos(id)
);

INSERT INTO usuarios (id,email,usuario,contrasenia,foto,fecha_de_nacimiento,dni)
VALUES (DEFAULT, 'nina@gmail.com', 'Nina', '1234', '/images/users/default-image.png', '2001-01-02', 43321297),
(DEFAULT, 'santi@gmail.com', 'Santi', '1235', '/images/users/default-image.png', '2002-08-27', 44447666),
(DEFAULT, 'carolin@gmail.com', 'Carolina', '1236', '/images/users/default-image.png', '2004-04-18',42121297),
(DEFAULT, 'sofia@gmail.com', 'Sofia', '1237', '/images/users/default-image.png', '2003-11-30', 50000001),
(DEFAULT, 'luis@gmail.com', 'Luis', '1238', '/images/users/default-image.png', '1999-03-14', 30000001);

INSERT INTO productos (id, nombre,imagen,descripcion,FkUserId)
VALUES (DEFAULT, 'Camiseta Argentina','/images/products/camisetaArg.png', 'Camiseta de Argentina para adulto talle L', 1),
(DEFAULT, 'Camiseta de Racing', '/images/products/camisetaRacing.jpeg', 'Camiseta de Racing para adulto talle L', 1),
(DEFAULT, 'Camiseta de Atletico', '/images/products/camisetaAtletico.jpeg',  'Camiseta de Arleti para adulto talle L', 2),
(DEFAULT, 'Camiseta de Barcelona', '/images/products/camisetaBarca.jpeg', 'Camiseta de Barca para adulto talle L', 3), 
(DEFAULT, 'Camiseta de Real', '/images/products/camisetaReal.jpeg', 'Camiseta de Real para adulto talle L', 1), 
(DEFAULT, 'Camiseta de SLO', '/images/products/camisetaSlo.jpeg', 'Camiseta de San Lorenzo para adulto talle L', 2), 
(DEFAULT, 'Camiseta de Ferro', '/images/products/camisetaFerro.jpeg', 'Camiseta de Ferro para adulto talle L', 4), 
(DEFAULT, 'Camiseta de Chelsea', '/images/products/camisetaChelsea.jpeg', 'Camiseta de Chelsea para adulto talle L', 5), 
(DEFAULT, 'Camiseta de Burnley', '/images/products/camisetaBurnley.jpeg', 'Camiseta de Burnley para adulto talle L', 3), 
(DEFAULT, 'Camiseta de Inter', '/images/products/camisetaInter.jpeg', 'Camiseta de Inter para adulto talle L', 2);

INSERT INTO comentarios (id, texto,FkUserId,FkProductosId)
VALUES (DEFAULT, 'Muy buena calidad', 2, 1),
(DEFAULT, 'Excelente camiseta', 5, 2),
(DEFAULT, 'Buena casaca', 3, 4),
(DEFAULT, 'que linda', 4, 1);