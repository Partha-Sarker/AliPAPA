-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2021 at 11:39 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alipapa`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(10) UNSIGNED DEFAULT 0,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `link`, `price`, `image`) VALUES
(1, NULL, 'https://www.ebay.com/itm/Intel-Core-i7-9700K-Desktop-Processor-8-Cores-up-to-4-9-GHz-Turbo-Unlocked/123463159646', 0, NULL),
(2, NULL, 'https://www.ebay.com/itm/GIGABYTE-Z390-AORUS-PRO-Intel-LGA1151-Z390-ATX-2xM-2-Thermal-Guard-Realtek/303865378310', 0, NULL),
(3, NULL, 'https://www.ebay.com/itm/ELECOM-Optical-Mouse-PS-2-3-Button-White-M-K6P2RWH-RS-Japan-Import/293246171156', 0, NULL),
(4, NULL, 'https://www.ebay.com/itm/CORSAIR-K70-RGB-MK-2-SE-Mechanical-RAPIDFIRE-Gaming-Keyboard-USB-Passthro/303582822475', 0, NULL),
(5, NULL, 'https://www.ebay.com/itm/HKW-typewriter-style-mechanical-keyboard-blue-axis-104-key-USB-Wired-Japane/293304457953', 0, NULL),
(6, NULL, 'https://www.ebay.com/itm/Anker-2-in-1-USB-3-0-SD-Card-Reader-for-SDXC-SDHC-SD-MMC-RS-MMC-Micro/293983826857', 0, NULL),
(7, NULL, 'https://www.ebay.com/itm/HKW-typewriter-style-mechanical-keyboard-blue-axis-104-key-USB-Wired-Japane/293304457953', 0, NULL),
(8, NULL, 'https://www.ebay.com/itm/Laptop-Battery-for-ACER-um08a71/194000931656', 0, NULL),
(9, NULL, 'https://www.ebay.com/itm/Kipling-Messenger-Travel-Crossbody-Laptop-Bag-black-Nylon/274737636986', 0, NULL),
(10, NULL, 'https://www.ebay.com/itm/BUILT-Graphite-Grid-Neoprene-Messenger-Bag-for-iPad-Black-Blue-Flap-Crossbody/313310840832', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
