-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 17, 2023 at 02:36 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kitStore`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `texto` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `FkUserId` int(10) UNSIGNED NOT NULL,
  `FkProductosId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `texto`, `createdAt`, `updatedAt`, `deletedAt`, `FkUserId`, `FkProductosId`) VALUES
(1, 'hola', '2023-06-14 13:47:54', '2023-06-14 13:47:54', NULL, 2, 1),
(2, 'a', '2023-06-14 13:58:39', '2023-06-14 13:58:39', NULL, 3, 2),
(3, 'hola', '2023-06-16 02:10:31', '2023-06-16 02:10:31', NULL, 5, 3),
(4, 'la peor casaca', '2023-06-16 02:22:49', '2023-06-16 02:22:49', NULL, 2, 4),
(5, 'la peor casaca', '2023-06-16 02:22:55', '2023-06-16 02:22:55', NULL, 2, 4),
(6, 'hola me interesa la camiseta', '2023-06-16 03:24:00', '2023-06-16 03:24:00', NULL, 6, 2);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `FkUserId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `imagen`, `descripcion`, `createdAt`, `updatedAt`, `deletedAt`, `FkUserId`) VALUES
(1, 'chelsea', '/images/products/default-image.png', 'camiseta', '2023-06-14 13:47:51', '2023-06-14 13:47:51', NULL, 2),
(2, 'barxa', '/images/products/default-image.png', 'cxamisea', '2023-06-14 13:48:55', '2023-06-14 13:48:55', NULL, 2),
(3, 'racing', '/images/products/default-image.png', 'rcxing', '2023-06-16 02:09:32', '2023-06-16 02:09:32', NULL, 5),
(4, 'river', '/images/products/default-image.png', 'Club Atletico River Plate', '2023-06-16 02:22:38', '2023-06-16 02:22:38', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `dni` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `usuario`, `contrasenia`, `foto`, `fecha_de_nacimiento`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'juampi@humand.co', 'jpj', '$2a$10$aCkJVzOnSJ5peLq9fvQiI.yx0AbklDib/5wF.w6m/TbbSz/TwDCoy', 'default-image.png', '2023-06-08', 1234, '2023-06-14 13:46:15', '2023-06-14 13:46:15', NULL),
(2, 'santiagommiranda02@gmail.com', 'santiago', '$2a$10$yxhdw6Lv1v2i/M6SYY/ATOddPIKRq97XtQ2xGuevpzQHoDjefh7bG', 'default-image.png', '2023-06-08', 12345678, '2023-06-14 13:47:22', '2023-06-14 13:47:22', NULL),
(3, 'nico@humand.co', 'jppm', '$2a$10$vMgXqtRuup4BGrde/4rG6OAjuvnlGqisKIkJGe0y7eL3uqH712x6y', 'default-image.png', '2023-06-13', 12345678, '2023-06-14 13:58:29', '2023-06-14 13:58:29', NULL),
(4, 'sofia@gmail.com', 'sofi', '$2a$10$eVMwG2qblEf3eSA.xCcW/OwBS6323NcJ8uOigpnni0REZp1d7QOPi', 'default-image.png', '2222-02-22', 22222222, '2023-06-16 02:06:23', '2023-06-16 02:06:23', NULL),
(5, 'bausra@gmail.com', 'sofia', '$2a$10$14b2zuo3mt4L0TAZPu/PzukXYFvtSa.sRo.dBm0jLiBG9GgUGJsDu', 'default-image.png', '2003-11-30', 45478875, '2023-06-16 02:08:44', '2023-06-16 02:08:44', NULL),
(6, 'soso@gmail.com', 'sofita', '$2a$10$DGH4qLr6VN8yAA2b7mpCteC7gh08P4siYaZN5att.1J89InMb8NZC', 'default-image.png', '2003-02-11', 12345678, '2023-06-16 02:56:12', '2023-06-16 02:56:12', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUserId` (`FkUserId`),
  ADD KEY `FkProductosId` (`FkProductosId`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUserId` (`FkUserId`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`FkUserId`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`FkProductosId`) REFERENCES `productos` (`id`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`FkUserId`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
