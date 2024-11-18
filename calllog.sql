-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 18, 2024 at 05:26 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calllog`
--

-- --------------------------------------------------------

--
-- Table structure for table `amcs`
--

CREATE TABLE `amcs` (
  `id` bigint UNSIGNED NOT NULL,
  `amc_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_person` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_id` bigint UNSIGNED DEFAULT NULL,
  `assigned_to` bigint UNSIGNED DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `details` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `interval` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_of_service` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `mobile_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachments` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `services` json DEFAULT NULL,
  `service_details` json DEFAULT NULL,
  `amc_details` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `amcs`
--

INSERT INTO `amcs` (`id`, `amc_no`, `contact_person`, `customer_id`, `assigned_to`, `status`, `details`, `interval`, `no_of_service`, `date`, `mobile_no`, `email`, `billing_address`, `attachments`, `services`, `service_details`, `amc_details`, `created_at`, `updated_at`) VALUES
(1, 'A455675343', 'fabyhijy@mailinator.com', 1, 45, 'open', 'Facilis voluptas dol', '2', '4', '2003-02-14', '+1 (785) 544-2853', 'kawyjumax@mailinator.com', 'Occaecat officia omn', 'attachments/ccc0b244-fd39-40ba-a06b-b9db8c6d55ca.pdf', NULL, NULL, '[{\"note\": \"tyqagoqenu@mailinator.com\", \"product\": \"ffdfd\"}]', '2024-10-29 10:22:25', '2024-10-31 23:58:08'),
(2, 'A1234567', 'New Person', 2, 45, 'open', 'qq', '2', '4', '2024-11-04', '12345678', 'bidikeci@mailinator.com', 'qq', 'attachments/68599fc3-aec5-40ed-8841-c71f4864491f.jpg', NULL, '[{\"id\": 1, \"date\": \"2024-11-05\", \"service\": \"1 Service\"}, {\"id\": 2, \"date\": \"2025-01-16\", \"service\": \"2 Service\"}, {\"id\": 3, \"date\": \"2025-03-05\", \"service\": \"3 Service\"}, {\"id\": 4, \"date\": \"2025-05-28\", \"service\": \"4 Service\"}]', '[{\"note\": \"no notes\", \"product\": \"VIT Bhopal\"}]', '2024-10-31 23:09:26', '2024-11-01 00:26:20'),
(3, 'jysaf@mailinator.com', 'venow@mailinator.com', 15, 24, 'open', 'Consequuntur do occa', '1', '8', '1971-06-17', '+1 (137) 429-8718', 'ferujyhez@mailinator.com', 'Dolores non ut et ex', 'attachments/45aafff7-6ca8-4f6e-af0b-0bb6d4d53b09.jpg', NULL, '[{\"id\": \"1\", \"date\": \"1971-06-17\", \"service\": \"1 Service\"}, {\"id\": \"2\", \"date\": \"1971-07-17\", \"service\": \"2 Service\"}, {\"id\": \"3\", \"date\": \"1971-08-17\", \"service\": \"3 Service\"}, {\"id\": \"4\", \"date\": \"1971-09-17\", \"service\": \"4 Service\"}, {\"id\": \"5\", \"date\": \"1971-10-17\", \"service\": \"5 Service\"}, {\"id\": \"6\", \"date\": \"1971-11-17\", \"service\": \"6 Service\"}, {\"id\": \"7\", \"date\": \"1971-12-17\", \"service\": \"7 Service\"}, {\"id\": \"8\", \"date\": \"1972-01-17\", \"service\": \"8 Service\"}]', '[{\"note\": \"bineb@mailinator.com\", \"product\": \"Test\"}]', '2024-11-05 05:53:55', '2024-11-05 05:56:36');

-- --------------------------------------------------------

--
-- Table structure for table `amc_details`
--

CREATE TABLE `amc_details` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `product` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `amc_details`
--

INSERT INTO `amc_details` (`id`, `service_id`, `product`, `note`, `created_at`, `updated_at`) VALUES
(5, 6, '13', 'Dolores necessitatib', '2024-11-01 06:56:58', '2024-11-02 01:57:07'),
(6, 7, '13', 'In sed sint ab est', '2024-11-01 08:00:13', '2024-11-02 02:00:39'),
(10, 11, 'Brittany Langley', 'Nesciunt magnam rer', '2024-11-05 05:40:56', '2024-11-05 05:40:56');

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `in_time` time DEFAULT NULL,
  `out_time` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brances`
--

CREATE TABLE `brances` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `created_at`, `updated_at`) VALUES
(8, 'wwe', '2024-10-07 03:47:15', '2024-10-07 04:36:33');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `call_allocation`
--

CREATE TABLE `call_allocation` (
  `id` int NOT NULL,
  `serial_no` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `call_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `customer_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone_two` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `service_partner` int NOT NULL,
  `pin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `distributer` int NOT NULL,
  `source_material` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `purchase` datetime NOT NULL,
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `call_allocation`
--

INSERT INTO `call_allocation` (`id`, `serial_no`, `call_no`, `customer_name`, `address`, `phone`, `phone_two`, `service_partner`, `pin`, `distributer`, `source_material`, `model`, `purchase`, `reason`, `created_at`, `updated_at`) VALUES
(10, 'C2310240001', '23102024/10', 'Nitesh Kumar Verma', 'Sihodih(Kodambari)', '8210365137', '8210365137', 5, '1333', 1, 'MMM', 'm1', '2024-10-23 00:00:00', 'mm', '2024-10-23 07:15:56', '2024-10-23 12:45:56');

-- --------------------------------------------------------

--
-- Table structure for table `call_log`
--

CREATE TABLE `call_log` (
  `id` int NOT NULL,
  `call_no` bigint NOT NULL,
  `customer_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` int NOT NULL,
  `service_partner` int NOT NULL,
  `pin` int NOT NULL,
  `distributer` int NOT NULL,
  `source_material` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `purchase` date NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category_master`
--

CREATE TABLE `category_master` (
  `cat_id` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `status` int DEFAULT '1',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_by` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_master`
--

INSERT INTO `category_master` (`cat_id`, `type`, `title`, `status`, `created_date`, `create_by`) VALUES
(2, 'complainttype', 'Under WArranty', 1, '2024-04-19 14:20:26', 0),
(3, 'complainttype', 'Warranty Expires', 1, '2024-04-19 14:21:05', 0),
(15, 'purchase_status', 'pending', 1, '2024-06-19 10:15:19', 0),
(16, 'tasktype', 'develop', 1, '2024-06-19 10:46:01', 0),
(28, 'category', 'test', 1, '2024-10-26 09:18:07', 0),
(30, 'unit', 'noid', 1, '2024-10-26 13:55:55', 0),
(32, 'category', 'new cat', 1, '2024-10-26 14:34:41', 0),
(33, 'unit', 'bwew', 1, '2024-10-26 14:34:53', 0),
(34, 'brand', 'Hbd', 1, '2024-11-04 12:17:11', 0);

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `id` bigint UNSIGNED NOT NULL,
  `complaint_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `customer_id` bigint UNSIGNED NOT NULL,
  `complaint_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `assigned_id` bigint UNSIGNED NOT NULL,
  `assigned_date` date NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `mobile_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`id`, `complaint_no`, `date`, `customer_id`, `complaint_type`, `description`, `product_id`, `assigned_id`, `assigned_date`, `status`, `mobile_no`, `email`, `address`, `created_at`, `updated_at`) VALUES
(1, 'C45789819', '2024-11-07', 2, '0', 'Possimus sed quo in', 11, 45, '2024-10-29', '1', '+1 (855) 848-2838', 'lazo@mailinator.com', 'Consequatur do quo c', '2024-10-29 05:00:50', '2024-11-02 00:41:48'),
(3, 'C123455', '2023-09-08', 17, '1', 'Dolorem quis rerum d', 11, 47, '1983-09-16', '2', '+1 (531) 634-4379', 'rehyc@mailinator.com', 'Velit quis ipsum hic', '2024-10-29 11:38:51', '2024-11-02 00:42:04'),
(4, 'C1454475', '2024-11-28', 2, '0', 'Dolor odio quis aut', 9, 47, '1986-10-10', '0', '+1 (715) 309-4801', 'qeny@mailinator.com', 'Quis corporis quis n', '2024-11-02 01:17:14', '2024-11-02 01:37:26'),
(5, 'C7898445', '1981-03-24', 16, '1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 10, 23, '2016-06-02', '1', '+1 (393) 955-2014', 'muhydoq@mailinator.com', 'Similique adipisci u', '2024-11-14 04:07:11', '2024-11-14 04:07:11');

-- --------------------------------------------------------

--
-- Table structure for table `daily_statuses`
--

CREATE TABLE `daily_statuses` (
  `id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delars`
--

CREATE TABLE `delars` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gstn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delars`
--

INSERT INTO `delars` (`id`, `name`, `user_id`, `address`, `pin`, `con1`, `con2`, `gstn`, `pan`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Donovan Collinsaa', 54, 'Ipsa dolorem qui bl', 'Ut incidunt quae am', 'Voluptatem qui vero', 'Quis mollitia quis s', 'Dolorem necessitatib', 'Dolores nisi qui con', 'lyhoaanusa@mailinator.com', '2024-10-08 06:22:42', '2024-10-08 07:10:39'),
(2, 'Donovan Collins', 55, 'Ipsa dolorem qui bl', 'Ut incidunt quae am', 'Voluptatem qui vero', 'Quis mollitia quis s', 'Dolorem necessitatib', 'Dolores nisi qui con', 'lyhosaanusa@mailinator.com', '2024-10-08 06:23:07', '2024-10-08 06:23:07'),
(3, 'Kay Gregory', 56, 'Nostrum magnam in ex', 'Autem praesentium qu', 'Voluptas elit eaque', 'Itaque veniam archi', 'Est reiciendis tenet', 'Aut sapiente saepe c', 'kijazoq@mailinator.com', '2024-10-08 06:23:28', '2024-10-08 06:23:28'),
(4, 'Donovan Conway', 57, 'Id ut dolore volupta', 'Numquam quod tempore', 'Ut quidem voluptas f', 'Sunt rerum ipsam pr', 'Rerum non ut debitis', 'Dolor qui earum maio', 'hegexe@mailinator.com', '2024-10-08 06:28:20', '2024-10-08 06:28:20'),
(5, 'Patience Mays', 58, 'Repudiandae est ull', 'Exercitation exercit', 'Enim maiores et volu', 'Eiusmod blanditiis e', 'Quia qui saepe ut ve', 'Eum natus in quis in', 'saji@mailinator.com', '2024-10-08 06:29:15', '2024-10-08 06:29:15'),
(6, 'Patience Mays', 59, 'Repudiandae est ull', 'Exercitation exercit', 'Enim maiores et volu', 'Eiusmod blanditiis e', 'Quia qui saepe ut ve', 'Eum natus in quis in', 'sasji@mailinator.com', '2024-10-08 06:29:25', '2024-10-08 06:29:25'),
(7, 'Karyn Mcgee', 60, 'Cum lorem maiores of', 'Expedita vel corrupt', 'Officia nisi in magn', 'Quis unde tempor acc', 'Recusandae Eum nobi', 'Doloremque occaecat', 'hasix@mailinator.com', '2024-10-08 06:45:58', '2024-10-08 06:45:58'),
(8, 'Ruth Jenkins', 61, 'Sunt aut ad quibusda', 'Animi voluptatibus', 'Quis voluptate eos f', 'Commodo accusamus qu', 'Id sed perspiciatis', 'Eum ut aut dolor dig', 'kacufuqo@mailinator.com', '2024-10-08 06:46:27', '2024-10-08 06:46:27');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'ws', '2024-10-07 04:43:53', '2024-10-07 04:44:05');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'ra', '2024-10-07 05:09:10', '2024-10-07 05:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `d_istributers`
--

CREATE TABLE `d_istributers` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gstn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `d_istributers`
--

INSERT INTO `d_istributers` (`id`, `name`, `address`, `pin`, `con1`, `con2`, `gstn`, `pan`, `email`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Maite Huff', 'Aliquip Nam impedit', 'Consequatur Repudia', 'Officiis odit aspern', 'Vel aliquid cumque i', 'Consequuntur nostrud', 'Perferendis eligendi', 'jsixi@mailinator.com', '2024-10-08 03:33:14', '2024-10-08 03:33:14', 51);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint UNSIGNED NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `joinning_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `account_holder_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_identifier_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tax_payer_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salary_type` int DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `is_active` int NOT NULL DEFAULT '1',
  `created_by` int NOT NULL,
  `branch_id` int NOT NULL DEFAULT '0',
  `department_id` int NOT NULL DEFAULT '0',
  `designation_id` int NOT NULL DEFAULT '0',
  `company_doj` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `documents` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `phone`, `address`, `joinning_date`, `user_id`, `created_at`, `updated_at`, `account_holder_name`, `account_number`, `bank_name`, `bank_identifier_code`, `branch_location`, `tax_payer_id`, `salary_type`, `salary`, `is_active`, `created_by`, `branch_id`, `department_id`, `designation_id`, `company_doj`, `documents`, `dob`, `gender`, `employee_id`) VALUES
(1, '8985698789', 'Ut vero adipisci min', '2001-05-03', '45', '2024-10-07 01:31:48', '2024-10-07 01:31:48', 'Chadwick Burton', '143', 'Inga Marquez', 'Unde et non lorem la', 'Excepteur veniam si', 'Optio aut laudantiu', NULL, NULL, 1, 1, 2, 3, 3, '1978-11-10', NULL, '2012-09-19', 'male', '#EMP0000001'),
(2, '8569878985', 'Excepteur lorem sint', '1979-11-15', '47', '2024-10-07 01:48:03', '2024-10-07 01:48:03', 'Jasmine Wilder', '21', 'Ocean Price', 'Fugiat blanditiis re', 'Itaque veniam modi', 'Est sit libero ut c', NULL, NULL, 1, 1, 2, 2, 2, '1976-04-27', NULL, '2000-01-12', 'female', '#EMP0000002');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` bigint UNSIGNED NOT NULL,
  `empolyee_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payee_id` bigint UNSIGNED NOT NULL,
  `payment_date` date NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Cash',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `payee_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `empolyee_type`, `payee_id`, `payment_date`, `category_id`, `account`, `created_at`, `updated_at`, `payee_type`) VALUES
(1, NULL, 1, '2016-02-24', 1, 'Cash', '2024-10-30 05:30:14', '2024-10-30 05:30:14', NULL),
(2, NULL, 1, '2016-02-24', 1, 'Cash', '2024-10-30 05:33:03', '2024-10-30 05:33:03', NULL),
(3, NULL, 1, '2005-09-22', 1, 'Cash', '2024-10-30 05:33:54', '2024-10-30 05:33:54', NULL),
(4, NULL, 1, '2005-09-22', 1, 'Cash', '2024-10-30 05:35:52', '2024-10-30 05:35:52', NULL),
(5, NULL, 1, '2005-09-22', 1, 'Cash', '2024-10-30 05:37:10', '2024-10-30 05:37:10', NULL),
(6, NULL, 1, '2005-09-22', 1, 'Cash', '2024-10-30 05:37:55', '2024-10-30 05:37:55', NULL),
(7, NULL, 1, '2005-09-22', 1, 'Cash', '2024-10-30 05:38:07', '2024-10-30 05:38:07', NULL),
(8, NULL, 45, '2005-09-22', 1, 'Cash', '2024-10-30 05:38:34', '2024-10-30 05:38:34', NULL),
(9, NULL, 1, '2005-09-22', 1, 'Cash', '2024-10-30 05:41:12', '2024-10-30 05:41:12', 'Employee'),
(10, NULL, 45, '2024-10-08', 1, 'Cash', '2024-10-30 06:13:30', '2024-10-30 06:13:30', 'Employee'),
(11, NULL, 45, '2024-10-08', 1, 'Cash', '2024-10-30 06:14:22', '2024-10-30 06:14:22', 'Employee'),
(12, NULL, 45, '2024-10-08', 1, 'Cash', '2024-10-30 06:15:41', '2024-10-30 06:15:41', 'Employee'),
(13, NULL, 45, '2024-10-08', 1, 'Cash', '2024-10-30 06:17:34', '2024-10-30 06:17:34', 'Employee');

-- --------------------------------------------------------

--
-- Table structure for table `expense_items`
--

CREATE TABLE `expense_items` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `item_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `discount` decimal(5,2) DEFAULT NULL,
  `tax` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expense_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `expense_items`
--

INSERT INTO `expense_items` (`id`, `service_id`, `item_name`, `quantity`, `price`, `discount`, `tax`, `created_at`, `updated_at`, `expense_id`) VALUES
(1, 9, NULL, 3, 3.00, 3.00, 3.00, '2024-10-30 05:38:35', '2024-10-30 05:38:35', 8),
(2, 1, NULL, 3, 3.00, 3.00, 3.00, '2024-10-30 05:41:13', '2024-10-30 05:41:13', 9),
(3, 11, NULL, 2, 100.00, 1.00, 9.00, '2024-10-30 06:17:34', '2024-10-30 06:17:34', 13);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `holidays`
--

CREATE TABLE `holidays` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `holidays`
--

INSERT INTO `holidays` (`id`, `name`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(10, '15 August', '2024-08-15', '2024-08-15', '2024-09-02 05:25:08', '2024-09-02 05:25:08'),
(12, 'GANDHI BIRTHDAY', '2024-10-02', '2024-10-02', '2024-09-19 09:08:31', '2024-09-19 09:08:31'),
(13, 'MAHA SAPTAMI', '2024-10-10', '2024-10-10', '2024-09-19 09:09:11', '2024-09-19 09:09:11');

-- --------------------------------------------------------

--
-- Table structure for table `holiday_assigns`
--

CREATE TABLE `holiday_assigns` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `holiday_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `id` bigint UNSIGNED NOT NULL,
  `customer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `main_label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(8,2) DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `income_entries` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `intervals`
--

CREATE TABLE `intervals` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `intervals`
--

INSERT INTO `intervals` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', 1, '2024-11-01 04:37:20', '2024-11-01 04:37:20'),
(2, '2', 1, '2024-11-01 04:38:44', '2024-11-01 04:38:44'),
(3, '3', 1, '2024-11-01 04:38:49', '2024-11-01 04:38:49'),
(4, '4', 0, '2024-11-01 04:42:35', '2024-11-01 04:42:35'),
(5, '5', 1, '2024-11-02 06:26:44', '2024-11-02 06:26:44');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `queue`, `payload`, `attempts`, `reserved_at`, `available_at`, `created_at`) VALUES
(1, 'default', '{\"uuid\":\"821c4d33-fac0-49aa-8270-1e920e370a96\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:12;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:45;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"8a756b4d-ee24-4490-a09a-67c61e1e6a16\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724416761, 1724416761),
(2, 'default', '{\"uuid\":\"8adf58df-bac0-4c00-affb-cb74e376465c\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:12;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:46;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"7045c7cb-51c1-4285-a5ea-0faaa22e610f\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724416925, 1724416925),
(3, 'default', '{\"uuid\":\"4468c063-a026-4515-8a0f-9858ca1eea2e\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:12;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:47;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"657005ee-02bb-4d30-b544-8666ba37f21d\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724417028, 1724417028),
(4, 'default', '{\"uuid\":\"6a04eb1c-5a25-4137-9756-ab9b7479baca\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:18;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:47;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"bdbcd36c-bf17-496f-949c-bf0d31861d1f\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724417028, 1724417028),
(5, 'default', '{\"uuid\":\"25db3b4e-3ed6-47de-bca4-f512442bfc55\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:17;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:48;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"b5803d2b-d3ca-4f86-9a15-ba0084a61b1c\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724417237, 1724417237),
(6, 'default', '{\"uuid\":\"cb99b0de-0fdf-4c6c-b5df-7f1475320379\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:18;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:49;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"1ced4c88-b3ba-429e-8b73-e122cf26d174\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724417294, 1724417294),
(7, 'default', '{\"uuid\":\"47e294c9-c480-4272-804f-2f190843bc0e\",\"displayName\":\"App\\\\Notifications\\\\TaskAssign\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\",\"command\":\"O:48:\\\"Illuminate\\\\Notifications\\\\SendQueuedNotifications\\\":3:{s:11:\\\"notifiables\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":5:{s:5:\\\"class\\\";s:19:\\\"App\\\\Models\\\\Employee\\\";s:2:\\\"id\\\";a:1:{i:0;i:1;}s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";s:15:\\\"collectionClass\\\";N;}s:12:\\\"notification\\\";O:28:\\\"App\\\\Notifications\\\\TaskAssign\\\":3:{s:9:\\\"projectId\\\";i:50;s:7:\\\"message\\\";s:17:\\\"New Task Assigned\\\";s:2:\\\"id\\\";s:36:\\\"76971f71-3466-43ee-a98c-e52cad2ae57a\\\";}s:8:\\\"channels\\\";a:1:{i:0;s:8:\\\"database\\\";}}\"}}', 0, NULL, 1724417339, 1724417339);

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_management`
--

CREATE TABLE `leave_management` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `leave_type_id` bigint UNSIGNED NOT NULL,
  `sdate` date DEFAULT NULL,
  `edate` date DEFAULT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int DEFAULT NULL,
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hours` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `checkbox_checked` int DEFAULT NULL,
  `is_unpaid` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_management`
--

INSERT INTO `leave_management` (`id`, `employee_id`, `leave_type_id`, `sdate`, `edate`, `reason`, `status`, `remark`, `hours`, `created_at`, `updated_at`, `checkbox_checked`, `is_unpaid`) VALUES
(72, 14, 4, '2024-09-01', '2024-09-02', 'w', 1, 'w', NULL, '2024-09-02 05:23:02', '2024-09-02 05:23:07', 0, NULL),
(76, 25, 13, '2024-09-10', '2024-09-11', 'jj', 0, 'k', NULL, '2024-09-09 12:27:51', '2024-09-09 12:28:06', 0, NULL),
(77, 25, 13, '2024-09-11', '2024-09-22', 'k.', 0, ',.', NULL, '2024-09-09 12:28:44', '2024-09-09 12:29:15', 0, NULL),
(91, 27, 15, '2024-09-27', '2024-09-29', 'a', 0, 'a', NULL, '2024-09-27 03:49:45', '2024-09-27 03:50:10', NULL, 0),
(92, 27, 18, '2024-10-05', '2024-10-06', 'a', 0, 'a', NULL, '2024-09-27 03:51:17', '2024-09-27 03:51:35', NULL, 0),
(95, 38, 17, '2024-10-01', '2024-10-11', 'w', 2, 'w', NULL, '2024-10-03 09:26:16', '2024-10-03 09:26:16', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `leave_types`
--

CREATE TABLE `leave_types` (
  `id` bigint UNSIGNED NOT NULL,
  `type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `days` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `employee_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_types`
--

INSERT INTO `leave_types` (`id`, `type_name`, `days`, `created_at`, `updated_at`, `employee_id`) VALUES
(4, 'urjents', 1, '2024-08-01 05:26:15', '2024-08-28 01:54:14', NULL),
(5, 's', 3, '2024-08-01 05:26:41', '2024-08-01 05:26:41', NULL),
(6, 'a', 2, '2024-08-01 05:31:43', '2024-08-01 05:31:43', NULL),
(7, 'PL', 4, '2024-08-01 07:40:00', '2024-08-01 07:40:00', NULL),
(8, 'd', 3, '2024-08-19 01:29:51', '2024-08-19 01:29:51', NULL),
(9, 'f', 5, '2024-08-19 01:30:01', '2024-08-19 01:30:01', NULL),
(10, 'q', 3, '2024-08-23 00:07:14', '2024-08-23 00:07:14', NULL),
(13, 'CL', 5, '2024-09-09 12:25:56', '2024-09-09 12:25:56', 25),
(15, 'CL', 9, '2024-09-20 10:46:02', '2024-09-27 03:49:45', 27),
(16, 'demo', 4, '2024-09-26 11:58:08', '2024-10-03 09:25:36', 38),
(17, 'unpaid', -11, '2024-09-26 13:48:10', '2024-10-03 09:26:16', 38),
(18, 'SL', 3, '2024-09-27 03:50:55', '2024-09-27 03:51:17', 27),
(19, 'nn', 1, '2024-10-19 12:06:36', '2024-10-19 12:06:36', 46);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_27_114206_create_employees_table', 2),
(5, '2024_07_27_123944_create_personal_access_tokens_table', 2),
(6, '2024_07_29_053930_create_projects_table', 3),
(7, '2024_07_29_075039_create_project_assigns_table', 4),
(8, '2024_07_29_093125_create_tasks_table', 5),
(9, '2024_07_29_093439_create_task_assigns_table', 5),
(10, '2024_07_30_104745_create_task_categories_table', 6),
(11, '2024_07_31_052156_create_daily_statuses_table', 7),
(12, '2024_07_31_121753_create_timesheets_table', 7),
(13, '2024_07_31_134625_add_new_timesheets', 8),
(14, '2024_08_01_093852_create_leave_types_table', 9),
(15, '2024_08_01_093650_create_leave_management_table', 10),
(16, '2024_08_05_112122_create_holidays_table', 11),
(17, '2024_08_12_050615_create_permission_tables', 12),
(18, '2024_08_23_064037_create_notifications_table', 13),
(19, '2024_08_28_044919_create_holiday_assigns_table', 14),
(20, '2024_10_07_084924_create_brances_table', 15),
(21, '2024_10_07_085443_create_branches_table', 15),
(22, '2024_10_07_092403_create_departments_table', 16),
(23, '2024_10_07_093645_create_designations_table', 17),
(24, '2024_10_07_101515_create_payslips_table', 18),
(25, '2024_10_07_102525_create_documents_table', 19),
(26, '2024_10_07_112523_create_attendaces_table', 20),
(27, '2024_10_08_080904_create_d_istributers_table', 21),
(28, '2024_10_08_113103_create_delars_table', 22),
(29, '2024_10_08_125534_create_service_centers_table', 23),
(31, '2024_10_29_045242_create_sales_table', 24),
(34, '2024_10_29_083033_create_complaints_table', 25),
(37, '2024_10_29_083617_create_amcs_table', 26),
(38, '2024_10_30_050758_create_taxes_table', 27),
(39, '2024_10_29_084423_create_services_table', 28),
(40, '2024_10_29_095519_create_amc_details_table', 28),
(41, '2024_10_30_093737_create_task_types_table', 28),
(43, '2024_10_30_094040_create_tasks_table', 29),
(44, '2024_10_31_040022_create_intervals_table', 30),
(45, '2024_10_31_053758_create_purchases_table', 30),
(46, '2024_10_31_073943_create_stocks_table', 31),
(48, '2024_10_29_040022_create_intervals_table', 32);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(3, 'App\\Models\\User', 27),
(3, 'App\\Models\\User', 28),
(3, 'App\\Models\\User', 29),
(3, 'App\\Models\\User', 30),
(3, 'App\\Models\\User', 31),
(3, 'App\\Models\\User', 32),
(3, 'App\\Models\\User', 33),
(3, 'App\\Models\\User', 34),
(3, 'App\\Models\\User', 35),
(3, 'App\\Models\\User', 36),
(3, 'App\\Models\\User', 37),
(3, 'App\\Models\\User', 38),
(2, 'App\\Models\\User', 39),
(2, 'App\\Models\\User', 40),
(2, 'App\\Models\\User', 41),
(2, 'App\\Models\\User', 42),
(2, 'App\\Models\\User', 43),
(2, 'App\\Models\\User', 44),
(2, 'App\\Models\\User', 45),
(5, 'App\\Models\\User', 46),
(5, 'App\\Models\\User', 47);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `type`, `notifiable_type`, `notifiable_id`, `data`, `read_at`, `created_at`, `updated_at`) VALUES
('1bbc9763-8b46-4f90-9e57-5d149d50d7b6', 'App\\Notifications\\TaskAssign', 'App\\Models\\User', 47, '{\"project\":\"OFA DETAILING\",\"message\":\"New Task Assigned\",\"url\":\"project-task-assign\"}', NULL, '2024-10-19 12:03:44', '2024-10-19 12:03:44'),
('ad65b762-9651-4f9f-89c6-dc4489160db3', 'App\\Notifications\\TaskAssign', 'App\\Models\\User', 44, '{\"project\":\"OFA DETAILING\",\"message\":\"New Task Assigned\",\"url\":\"project-task-assign\"}', NULL, '2024-10-19 12:03:11', '2024-10-19 12:03:11'),
('b15b04e3-ea49-4533-8e90-e9ad43ca4b8c', 'App\\Notifications\\TaskAssign', 'App\\Models\\User', 44, '{\"project\":\"OFA DETAILING\",\"message\":\"New Task Assigned\",\"url\":\"project-task-assign\"}', NULL, '2024-10-19 12:03:44', '2024-10-19 12:03:44'),
('fc13fff2-4864-46f7-822c-d0d45884e8dd', 'App\\Notifications\\TaskAssign', 'App\\Models\\User', 47, '{\"project\":\"OFA DETAILING\",\"message\":\"New Task Assigned\",\"url\":\"project-task-assign\"}', NULL, '2024-10-19 12:03:11', '2024-10-19 12:03:11');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payslips`
--

CREATE TABLE `payslips` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payslips`
--

INSERT INTO `payslips` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'ss', '2024-10-07 04:52:59', '2024-10-07 04:53:03');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'create_employee', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(2, 'edit_employee', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(3, 'delete_employee', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(4, 'view_employee', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(5, 'create_product', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(6, 'delete_product', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(7, 'view_product', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(8, 'edit_product', 'web', '2024-08-12 00:01:58', '2024-08-12 00:01:58'),
(9, 'create_task', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(10, 'view_task', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(11, 'edit_task', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(12, 'delete_task', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(13, 'create_dealer', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(14, 'view_dealer', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(15, 'edit_dealer', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(16, 'delete_dealer', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(17, 'create_service_center', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(18, 'view_service_center', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(19, 'edit_service_center', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(20, 'delete_service_center', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(21, 'create_spare_parts', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(22, 'view_spare_parts', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(23, 'edit_spare_parts', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(24, 'delete_spare_parts', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(25, 'create_call_allocation', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(26, 'view_call_allocation', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(27, 'edit_call_allocation', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(28, 'delete_call_allocation', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(29, 'create_report', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(30, 'view_report', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(31, 'edit_report', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(32, 'delete_report', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(33, 'create_extended_warranty', 'web', '2024-08-12 00:01:59', '2024-08-12 00:01:59'),
(34, 'view_extended_warranty', 'web', '2024-08-12 00:02:00', '2024-08-12 00:02:00'),
(35, 'edit_extended_warranty', 'web', '2024-08-12 00:02:00', '2024-08-12 00:02:00'),
(36, 'delete_extended_warranty', 'web', '2024-08-12 00:02:00', '2024-08-12 00:02:00'),
(37, 'create_client', 'web', '2024-08-13 04:59:50', '2024-08-13 04:59:50'),
(38, 'view_client', 'web', '2024-08-13 05:00:38', '2024-08-13 05:00:38'),
(39, 'delete_client', 'web', '2024-08-13 05:01:33', '2024-08-13 05:01:33'),
(40, 'create_role', 'web', '2024-08-13 05:01:55', '2024-08-13 05:01:55'),
(41, 'edit_role', 'web', '2024-08-13 05:02:04', '2024-08-13 05:02:04'),
(42, 'delete_role', 'web', '2024-08-13 05:02:10', '2024-08-13 05:02:10'),
(43, 'view_role', 'web', '2024-08-13 05:02:17', '2024-08-13 05:02:17'),
(44, 'edit_client', 'web', '2024-08-13 05:02:48', '2024-08-13 05:02:48'),
(45, 'view_quotation', 'web', '2024-08-17 06:02:58', '2024-08-17 06:02:58'),
(46, 'edit_quotation', 'web', '2024-08-17 06:04:05', '2024-08-17 06:04:05'),
(49, 'create_quotation', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(50, 'delete_quotation', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(51, 'create_service', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(52, 'edit_service', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(53, 'delete_service', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(54, 'view_service', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(55, 'create_sales', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(56, 'edit_sales', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(57, 'delete_sales', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(58, 'view_sales', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(59, 'create_amc', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(60, 'edit_amc', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(61, 'delete_amc', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(62, 'view_amc', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(63, 'create_complaint', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(64, 'edit_complaint', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(65, 'delete_complaint', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15'),
(66, 'view_complaint', 'web', '2024-11-02 02:50:15', '2024-11-02 02:50:15');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `category_id` int NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `source` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `qty` int NOT NULL,
  `purchase_date` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `invoice_no` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `bardcodeno` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category_id`, `model`, `source`, `qty`, `purchase_date`, `invoice_no`, `bardcodeno`, `created_at`, `updated_at`) VALUES
(3, 7, '44', 'ff', 5, '2024-10-22', '444', '1', '2024-10-21 12:14:27', '2024-10-21 12:14:27'),
(5, 11, 'm1', 'Onlinejjf', 5, '2024-10-21', '9', '1', '2024-10-21 12:16:09', '2024-10-23 00:33:26'),
(6, 11, 'm1', 'g6', 5, '2024-10-21', '9gvgv', '1', '2024-10-21 12:16:31', '2024-10-23 00:34:54'),
(7, 9, 'M1', 'Online', 101, '2024-10-22', '8352', '1', '2024-10-21 23:01:00', '2024-10-21 23:01:00'),
(9, 13, 'm1', 'Online', 5, '2024-10-23', 'gggg1', '1', '2024-10-23 00:34:48', '2024-10-23 00:34:48');

-- --------------------------------------------------------

--
-- Table structure for table `products_category`
--

CREATE TABLE `products_category` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_category`
--

INSERT INTO `products_category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(9, 'Suman Kumar', '2024-10-21 04:09:50', '2024-10-22 04:32:41'),
(10, 'dssd', '2024-10-21 04:09:53', '2024-10-21 09:39:53'),
(11, 'ffdfd', '2024-10-21 04:09:57', '2024-10-21 09:39:57'),
(12, 'ffdfdff', '2024-10-21 04:10:04', '2024-10-21 09:40:04'),
(13, 'VIT Bhopal', '2024-10-21 04:07:18', '2024-10-21 09:37:18'),
(14, 'Suman Kumar Verma', '2024-10-21 04:08:02', '2024-10-21 09:38:02'),
(15, 'fdfd', '2024-10-21 04:08:09', '2024-10-21 09:38:09'),
(16, 'Anil', '2024-10-21 04:08:12', '2024-10-21 09:38:12'),
(17, 'Anilk', '2024-10-21 04:09:36', '2024-10-21 09:39:36'),
(18, 'VIT Bhopalj', '2024-10-21 04:09:43', '2024-10-21 09:39:43'),
(19, 'Suman Kumar Vermaf', '2024-10-21 04:09:50', '2024-10-21 09:39:50'),
(20, 'dssd', '2024-10-21 04:09:53', '2024-10-21 09:39:53'),
(21, 'ffdfd', '2024-10-21 04:09:57', '2024-10-21 09:39:57'),
(22, 'ffdfdff', '2024-10-21 04:10:04', '2024-10-21 09:40:04');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estimate_time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estimate_budget` double NOT NULL,
  `start_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `estimate_time`, `estimate_budget`, `start_date`, `end_date`, `employee_id`, `created_at`, `updated_at`) VALUES
(28, '503297', '40', 1, '2024-09-19', '2024-10-04', NULL, '2024-09-19 08:56:12', '2024-09-19 08:56:12'),
(29, '503268', '40', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 09:02:22', '2024-09-19 09:02:22'),
(30, '503227', '40', 1, '2024-09-19', '2024-09-23', NULL, '2024-09-19 09:34:22', '2024-09-19 09:34:22'),
(31, '502985', '40', 1, '2024-09-19', '2024-09-23', NULL, '2024-09-19 09:35:11', '2024-09-19 09:35:11'),
(32, '503155', '40', 1, '2024-09-19', '2024-09-27', NULL, '2024-09-19 09:40:04', '2024-09-19 09:40:04'),
(33, '503170', '40', 1, '2024-09-19', '2024-10-02', NULL, '2024-09-19 09:41:44', '2024-09-19 09:41:44'),
(34, '503181', '40', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 09:42:18', '2024-09-19 09:42:18'),
(35, '503168', '40', 1, '2024-09-19', '2024-10-07', NULL, '2024-09-19 09:43:26', '2024-09-19 09:43:26'),
(36, '503229', '40', 1, '2024-09-19', '2024-10-02', NULL, '2024-09-19 09:44:04', '2024-09-19 09:44:04'),
(37, '502984', '40', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 09:44:48', '2024-09-19 09:44:48'),
(38, '503184', '40', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 09:45:25', '2024-09-19 09:45:25'),
(40, '503268', '40', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 09:48:02', '2024-09-19 09:48:02'),
(41, '503290', '40', 1, '2024-09-19', '2024-10-04', NULL, '2024-09-19 09:48:41', '2024-09-19 09:48:41'),
(42, '503297', '40', 1, '2024-09-19', '2024-10-04', NULL, '2024-09-19 09:49:16', '2024-09-19 09:49:16'),
(43, '502655', '40', 1, '2024-09-19', '2024-09-22', NULL, '2024-09-19 09:50:07', '2024-09-19 09:50:07'),
(44, '501037', '40', 1, '2024-09-19', '2024-09-27', NULL, '2024-09-19 09:51:18', '2024-09-19 09:51:18'),
(45, '501653', '40', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 10:10:58', '2024-09-19 10:10:58'),
(46, '502196', '40', 1, '2024-09-19', '2024-09-25', NULL, '2024-09-19 10:11:39', '2024-09-19 10:11:39'),
(47, 'P24-4837-01-D01', '3', 1, '2024-09-19', '2024-09-19', NULL, '2024-09-19 11:02:38', '2024-09-19 11:04:29'),
(48, 'P24-4837-01-D02', '3', 1, '2024-09-19', '2024-09-19', NULL, '2024-09-19 11:04:12', '2024-09-19 11:04:12'),
(49, 'P24-4892-01', '3', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 11:05:32', '2024-09-19 11:05:32'),
(50, 'P24-4598-01', '3', 1, '2024-09-19', '2024-09-20', NULL, '2024-09-19 11:06:15', '2024-09-19 11:06:15'),
(51, 'P24-4843-01', '4', 1, '2024-09-19', '2024-09-23', NULL, '2024-09-19 11:07:14', '2024-09-19 11:07:14'),
(52, 'P24-3628-01-R01', '2', 1, '2024-09-19', '2024-09-25', NULL, '2024-09-19 11:07:56', '2024-09-19 11:07:56'),
(53, 'Y23-5058-01-R05', '2', 1, '2024-09-19', '2024-09-19', NULL, '2024-09-19 11:08:36', '2024-09-19 11:08:36'),
(54, 'Y24-4435-01', '24', 1, '2024-09-19', '2024-09-23', NULL, '2024-09-19 11:09:17', '2024-09-19 11:09:17'),
(55, 'Y24-4591-01', '6', 1, '2024-09-19', '2024-09-19', NULL, '2024-09-19 11:10:12', '2024-09-19 11:10:12'),
(56, 'Y24-4615-01', '2', 1, '2024-02-19', '2024-09-19', NULL, '2024-09-19 11:10:53', '2024-09-19 11:10:53'),
(57, 'Y24-1553-01-R01', '32', 1, '2024-09-19', '2024-10-09', NULL, '2024-09-19 11:11:40', '2024-09-19 11:11:40'),
(58, 'Y24-3618-01-R01', '4', 1, '2024-09-19', '2024-09-30', NULL, '2024-09-19 11:12:37', '2024-09-19 11:12:37'),
(59, 'Y24-4699-01', '12', 1, '2024-09-19', '2024-09-25', NULL, '2024-09-19 11:12:59', '2024-09-19 11:12:59'),
(60, 'Y24-2234-01-R01', '6', 1, '2024-09-19', '2024-10-01', NULL, '2024-09-19 11:24:20', '2024-09-19 11:24:20'),
(61, '502309', '70', 1, '2024-09-20', '2024-09-27', NULL, '2024-09-20 03:43:28', '2024-09-20 03:43:28'),
(62, '503237', '32', 1, '2024-09-20', '2024-10-08', NULL, '2024-09-20 03:44:01', '2024-09-20 03:44:01'),
(63, 'abc', '60', 1, '2024-10-03', '2024-10-31', NULL, '2024-10-03 10:27:21', '2024-10-03 10:27:21'),
(64, 'Test', '3', 100, '2024-10-19', '2024-10-23', NULL, '2024-10-19 12:01:41', '2024-10-19 12:01:41');

-- --------------------------------------------------------

--
-- Table structure for table `project_assigns`
--

CREATE TABLE `project_assigns` (
  `id` bigint UNSIGNED NOT NULL,
  `project_id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` bigint UNSIGNED NOT NULL,
  `purchase_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `contact_person` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `supplier_id` bigint UNSIGNED NOT NULL,
  `billing_address` text COLLATE utf8mb4_unicode_ci,
  `discount` int NOT NULL DEFAULT '0',
  `mobile_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_details` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `purchase_no`, `date`, `contact_person`, `status`, `supplier_id`, `billing_address`, `discount`, `mobile_no`, `email`, `sales_details`, `created_at`, `updated_at`) VALUES
(1, 'P12345679', '2023-08-22', 'lideh@mailinator.com', '0', 1, 'Ut placeat dolorum', 0, NULL, 'tokivonif@mailinator.com', '[{\"price\": 29, \"amount\": 1189, \"product\": \"ffdfd\", \"quantity\": 41, \"amountWithTax\": 1403.02, \"selectedTaxes\": [{\"name\": \"GST (18%)\", \"percent\": 18}]}]', '2024-10-31 01:45:49', '2024-10-31 02:04:26');

-- --------------------------------------------------------

--
-- Table structure for table `quatation_account_tax`
--

CREATE TABLE `quatation_account_tax` (
  `id` int NOT NULL,
  `quation_id` int NOT NULL,
  `tax_name` varchar(255) NOT NULL,
  `tax` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quatation_account_tax`
--

INSERT INTO `quatation_account_tax` (`id`, `quation_id`, `tax_name`, `tax`) VALUES
(7, 12, 'service', '1'),
(8, 11, 'GST', '18'),
(9, 11, 'Others', '5');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2024-08-12 00:02:00', '2024-08-12 23:32:56'),
(2, 'Distributor', 'web', '2024-08-12 01:17:53', '2024-11-02 05:52:59'),
(3, 'Employee', 'web', '2024-08-12 01:20:51', '2024-08-12 23:19:24'),
(4, 'Dealer', 'web', '2024-08-13 01:29:10', '2024-11-02 05:53:13'),
(5, 'Rosalyn Odonnell', 'web', '2024-08-22 06:42:27', '2024-08-22 06:42:27');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(29, 2),
(30, 2),
(31, 2),
(32, 2),
(33, 2),
(34, 2),
(45, 2),
(46, 2),
(18, 3),
(21, 3),
(22, 3),
(23, 3),
(24, 3),
(37, 3),
(38, 3),
(39, 3),
(44, 3),
(2, 4),
(4, 4),
(5, 4),
(8, 4),
(10, 4),
(11, 4),
(12, 4),
(14, 4),
(15, 4),
(17, 4),
(18, 4),
(19, 4),
(20, 4),
(22, 4),
(25, 4),
(26, 4),
(27, 4),
(28, 4),
(29, 4),
(31, 4),
(32, 4),
(33, 4),
(34, 4),
(36, 4),
(1, 5),
(2, 5),
(5, 5),
(8, 5),
(10, 5),
(15, 5),
(17, 5),
(18, 5),
(20, 5),
(23, 5),
(25, 5),
(28, 5),
(31, 5),
(32, 5),
(33, 5),
(42, 5),
(43, 5),
(45, 5),
(46, 5);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` bigint UNSIGNED NOT NULL,
  `bill_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` bigint UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `billing_address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amc_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int NOT NULL DEFAULT '0',
  `mobile_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales_details` json NOT NULL,
  `account_tax` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `bill_no`, `customer_id`, `date`, `billing_address`, `status`, `amc_type`, `discount`, `mobile_no`, `email`, `sales_details`, `account_tax`, `created_at`, `updated_at`) VALUES
(4, 'B12346787', 9, '2024-10-30', 'Nam nulla nemo molli', 'unpaid', 'no_amc', 0, '08210365137', 'admin@admin.com', '[{\"price\": 19, \"amount\": 342, \"product\": \"ffdfd\", \"quantity\": 18, \"amountWithTax\": 372.78, \"selectedTaxes\": [{\"name\": \"CGST (9%)\", \"percent\": 9}]}, {\"price\": 5, \"amount\": 215, \"product\": \"ffdfd\", \"quantity\": 43, \"amountWithTax\": 215, \"selectedTaxes\": []}, {\"price\": 88, \"amount\": 8624, \"product\": \"Suman Kumar\", \"quantity\": 98, \"amountWithTax\": 9400.16, \"selectedTaxes\": [{\"name\": \"CGST (9%)\", \"percent\": 9}]}]', NULL, '2024-10-30 01:39:53', '2024-11-02 01:46:42'),
(8, 'B123456789', 6, '2020-03-28', 'Incididunt incidunt', 'unpaid', 'no_amc', 0, '9062499838', 'qoxyvuvoc@mailinator.com', '[{\"price\": 34, \"amount\": 1802, \"product\": \"Test\", \"quantity\": 53, \"amountWithTax\": 1802, \"selectedTaxes\": []}]', NULL, '2024-11-01 23:18:55', '2024-11-01 23:18:55'),
(9, 'lysimaf@mailinator.com', 5, '1983-01-26', 'Veniam dolore odio', 'unpaid', 'amc', 0, '9062499838', 'cogal@mailinator.com', '[{\"price\": 78, \"amount\": 1248, \"product\": \"Brittany Langley\", \"quantity\": 16, \"amountWithTax\": 1248, \"selectedTaxes\": []}]', NULL, '2024-11-01 23:21:36', '2024-11-01 23:21:36'),
(10, 'lysimaf@mailinator.com', 5, '1983-01-26', 'Veniam dolore odio', 'unpaid', 'amc', 0, '9062499838', 'cogal@mailinator.com', '[{\"price\": 78, \"amount\": 1248, \"product\": \"Brittany Langley\", \"quantity\": 16, \"amountWithTax\": 1248, \"selectedTaxes\": []}]', NULL, '2024-11-01 23:22:31', '2024-11-01 23:22:31'),
(11, 'lysimaf@mailinator.com', 5, '1983-01-26', 'Veniam dolore odio', 'unpaid', 'amc', 0, '9062499838', 'cogal@mailinator.com', '[{\"price\": 78, \"amount\": 1248, \"product\": \"Brittany Langley\", \"quantity\": 16, \"amountWithTax\": 1248, \"selectedTaxes\": []}]', NULL, '2024-11-01 23:22:57', '2024-11-01 23:22:57'),
(12, 'lysimaf@mailinator.com', 5, '1983-01-26', 'Veniam dolore odio', 'unpaid', 'amc', 0, '9062499838', 'cogal@mailinator.com', '[{\"price\": 78, \"amount\": 1248, \"product\": \"Brittany Langley\", \"quantity\": 16, \"amountWithTax\": 1248, \"selectedTaxes\": []}]', NULL, '2024-11-01 23:23:08', '2024-11-01 23:23:08'),
(13, 'jizeduda@mailinator.com', 19, '2001-06-07', 'Est temporibus fugia', 'full_paid', 'amc', 0, '9062499838', 'gejitakera@mailinator.com', '[{\"price\": 44, \"amount\": 44, \"product\": \"Brittany Langley\", \"quantity\": 1, \"amountWithTax\": 44, \"selectedTaxes\": []}]', NULL, '2024-11-01 23:26:42', '2024-11-01 23:26:42'),
(14, 'B021124007', 2, '2020-01-21', 'Est aut consequatur', 'full_paid', 'no_amc', 0, '9062499838', 'qinuc@mailinator.com', '[{\"price\": 21, \"amount\": 462, \"product\": \"Test\", \"quantity\": 22, \"amountWithTax\": 462, \"selectedTaxes\": []}]', NULL, '2024-11-02 04:47:37', '2024-11-02 04:47:37');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `service_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_date` date NOT NULL,
  `customer_id` bigint UNSIGNED NOT NULL,
  `assigned_to` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_charge` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_code`, `service_date`, `customer_id`, `assigned_to`, `status`, `service_charge`, `service_details`, `created_at`, `updated_at`) VALUES
(6, 'SV241101001', '2024-11-08', 1, '45', 'closed', 'no-charge', 'Nostrum impedit ali', '2024-11-01 06:56:58', '2024-11-02 01:57:07'),
(7, 'SV241101007', '2024-10-28', 1, '45', 'open', 'no-charge', 'Soluta rem eos persp', '2024-11-01 08:00:13', '2024-11-02 02:00:39'),
(11, 'SV241105008', '2009-02-09', 16, '24', 'open', 'charge', 'Unde dolore voluptas', '2024-11-05 05:40:56', '2024-11-05 05:40:56');

-- --------------------------------------------------------

--
-- Table structure for table `service_centers`
--

CREATE TABLE `service_centers` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gstn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_centers`
--

INSERT INTO `service_centers` (`id`, `name`, `user_id`, `address`, `pin`, `con1`, `con2`, `gstn`, `pan`, `email`, `created_at`, `updated_at`) VALUES
(2, 'Pandora Woodarddhhh', 63, 'Sit aut iste dolore', 'Provident in ipsam', 'Id ea sunt delenit', 'Nemo ipsum qui inven', 'Distinctio Dolore ee', 'Aspernatur ut ullam', 'bufuj@mailinator.com', '2024-10-08 08:00:42', '2024-10-21 04:27:53'),
(5, 'Nitesh Kumar Verma', 68, 'Sihodih(Kodambari)', '825412', '7874324928', '8766766767', 'Distinctio Dolore ee', 'hh7', 'niteshsunny73@gmail.com', '2024-10-19 11:05:37', '2024-10-19 11:05:37'),
(6, 'Nitesh Kumar Verma', 71, 'Sihodih(Kodambari)', '825412', '7874324928', '8766766767', 'Distinctio Dolore ee', 'hh7', 'equiconsultings77@gmail.com', '2024-10-21 03:25:32', '2024-10-21 03:25:32');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('8B2mhVdpre0yKqdJhlIY8l5qHxEvgEgr0ox4YHiM', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoidWQyd3UzUmJORzZwdmg5bkpRbnNZSnNnOWUzc3VIaDlYdFVUSWlpWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zdG9ja3MvMS9lZGl0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoxODoiZmxhc2hlcjo6ZW52ZWxvcGVzIjthOjA6e31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1731585313),
('ZrIbJXCUhJOgXaAUAkKE9tbsEUsT75J9ioKfEnvq', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiYlZSNXVYc3hWOEJDV1JzR1hmSW15Qkt5Y2VpU2pQcW9ZWUNRMnNEQSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyMToiaHR0cDovL2xvY2FsaG9zdDo5MDAwIjt9czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzg6Imh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9jb21wbGFpbnQvY3JlYXRlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czoxODoiZmxhc2hlcjo6ZW52ZWxvcGVzIjthOjA6e31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1731585312);

-- --------------------------------------------------------

--
-- Table structure for table `spare_part`
--

CREATE TABLE `spare_part` (
  `id` int NOT NULL,
  `call_allocation` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `customer_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` bigint NOT NULL,
  `service_partner_id` int NOT NULL,
  `spare_part_type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `category_id` int NOT NULL,
  `qty` int NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `spare_part_ser_no` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `invoice_no` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `dispatch_module` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `dispatch_type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `spare_part`
--

INSERT INTO `spare_part` (`id`, `call_allocation`, `customer_name`, `address`, `phone`, `service_partner_id`, `spare_part_type`, `category_id`, `qty`, `model`, `spare_part_ser_no`, `invoice_no`, `dispatch_module`, `dispatch_type`, `date`, `created_at`, `updated_at`) VALUES
(4, '88282', 'Nitesh Kumar Verma', 'Sihodih(Kodambari)', 1, 5, 'Phone Charger', 14, 5, 'm1', '34544665', 'A1122', 'Bus', 'Bus-B123', '2024-10-23', '2024-10-23 00:25:16', '2024-10-23 06:11:51');

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL,
  `unit` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`id`, `name`, `sku`, `price`, `category_id`, `quantity`, `unit`, `created_at`, `updated_at`) VALUES
(1, 'Product 1', 'Kelsie Klein', 456, 3, 45, 1, '2024-10-31 02:44:41', '2024-10-31 02:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint UNSIGNED NOT NULL,
  `customer_id` bigint UNSIGNED NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `task_type_id` bigint UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `assign_date` date NOT NULL,
  `remarks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `close_date` date NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `customer_id`, `subject`, `task_type_id`, `description`, `attachment`, `employee_id`, `assign_date`, `remarks`, `close_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Catherine Crosby', 2, 'Ipsam enim voluptate', 'attachments/1730288633_All Branch Oct-2024 Monthly Payroll Report of All Department.pdf', 47, '1990-05-01', NULL, '1996-02-02', 'progress', '2024-10-30 06:13:53', '2024-10-30 06:41:06'),
(9, 17, 'Briar Cooley', 1, 'Dolor modi hic persp', 'attachments/1730807389_tamilnadu.jpg', 23, '1982-05-09', NULL, '1982-08-20', 'closed', '2024-11-05 06:19:49', '2024-11-05 06:19:49');

-- --------------------------------------------------------

--
-- Table structure for table `task_assigns`
--

CREATE TABLE `task_assigns` (
  `id` bigint UNSIGNED NOT NULL,
  `project_id` int DEFAULT NULL,
  `task_id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `employee_hours` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task_assigns`
--

INSERT INTO `task_assigns` (`id`, `project_id`, `task_id`, `employee_id`, `created_at`, `updated_at`, `employee_hours`) VALUES
(301, NULL, 98, 27, '2024-10-03 23:59:45', '2024-10-03 23:59:45', '5'),
(302, NULL, 98, 38, '2024-10-03 23:59:45', '2024-10-03 23:59:45', '4'),
(303, NULL, 63, 2, '2024-10-04 03:29:19', '2024-10-04 03:29:19', '0'),
(304, NULL, 63, 4, '2024-10-04 03:29:19', '2024-10-04 03:29:19', '0'),
(312, NULL, 100, 2, '2024-10-19 12:03:44', '2024-10-19 12:03:44', '2'),
(313, NULL, 100, 4, '2024-10-19 12:03:44', '2024-10-19 12:03:44', '2'),
(314, NULL, 100, 44, '2024-10-19 12:03:44', '2024-10-19 12:03:44', '0'),
(315, NULL, 100, 47, '2024-10-19 12:03:44', '2024-10-19 12:03:44', '0');

-- --------------------------------------------------------

--
-- Table structure for table `task_categories`
--

CREATE TABLE `task_categories` (
  `id` bigint UNSIGNED NOT NULL,
  `tname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task_categories`
--

INSERT INTO `task_categories` (`id`, `tname`, `created_at`, `updated_at`) VALUES
(2, 'OFA DETAILING', '2024-07-30 07:16:25', '2024-07-30 07:16:25'),
(3, 'OFA CHECKING', '2024-07-30 07:17:08', '2024-07-30 07:17:08'),
(4, 'BFA CHECKING', '2024-07-30 07:17:48', '2024-07-30 07:17:48'),
(5, 'NON-BILLABLE', '2024-07-30 07:17:55', '2024-09-05 06:58:54'),
(6, 'BFA DETAILING', '2024-09-19 04:00:41', '2024-09-19 04:00:41'),
(7, 'ESTIMATION', '2024-09-19 10:37:41', '2024-09-19 10:37:41'),
(8, 'TEST', '2024-10-19 12:01:03', '2024-10-19 12:01:03');

-- --------------------------------------------------------

--
-- Table structure for table `task_statuses`
--

CREATE TABLE `task_statuses` (
  `id` bigint UNSIGNED NOT NULL,
  `status_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task_statuses`
--

INSERT INTO `task_statuses` (`id`, `status_name`, `created_at`, `updated_at`) VALUES
(16, 'Started', '2024-09-09 11:47:07', '2024-09-09 11:48:24'),
(17, 'Sent for Approval', '2024-09-09 11:47:24', '2024-09-09 11:48:30'),
(18, 'Sent Outstanding', '2024-09-09 11:47:35', '2024-09-09 11:47:35'),
(19, 'Sent for Check', '2024-09-09 11:47:44', '2024-09-09 11:47:44'),
(20, 'Sent for FFU', '2024-09-09 11:47:53', '2024-09-09 11:47:53'),
(21, 'Sent for R&R', '2024-09-09 11:48:02', '2024-09-09 11:48:02'),
(22, 'Closed', '2024-09-09 11:48:10', '2024-09-09 11:48:10'),
(23, 'Completed', '2024-09-09 11:50:11', '2024-09-09 11:50:11'),
(24, 'Cancelled', '2024-09-09 11:50:23', '2024-09-09 11:50:23');

-- --------------------------------------------------------

--
-- Table structure for table `task_types`
--

CREATE TABLE `task_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `task_types`
--

INSERT INTO `task_types` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'develop', 1, '2024-10-30 11:03:01', '2024-10-30 11:03:01'),
(2, 'maintain', 1, '2024-10-30 11:03:01', '2024-10-30 11:03:01'),
(3, 'Test', 0, '2024-10-30 08:14:15', '2024-10-30 08:14:15');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percent` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `taxes`
--

INSERT INTO `taxes` (`id`, `name`, `percent`, `created_at`, `updated_at`) VALUES
(1, 'CGST', 9, '2024-10-30 05:38:08', '2024-10-30 05:38:08'),
(2, 'SGST', 9, '2024-10-30 05:38:08', '2024-10-30 07:42:10'),
(4, 'Others', 5, '2024-10-30 07:43:01', '2024-10-30 07:43:01'),
(5, 'service', 1, '2024-10-30 08:06:56', '2024-10-30 08:06:56'),
(6, 'GST', 18, '2024-10-30 23:21:32', '2024-10-30 23:21:32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_account_tax_rates`
--

CREATE TABLE `tbl_account_tax_rates` (
  `id` int NOT NULL,
  `acount_tax_name` varchar(255) NOT NULL,
  `tax` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_account_tax_rates`
--

INSERT INTO `tbl_account_tax_rates` (`id`, `acount_tax_name`, `tax`) VALUES
(1, 'ACE Tax Consultants', '10'),
(2, 'Elite Tax Consultants', '5'),
(3, 'Test', '4'),
(4, 'ACE Tax Consultants', '6'),
(5, 'ACE Tax Consultants', '2');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_client_history`
--

CREATE TABLE `tbl_client_history` (
  `id` int NOT NULL,
  `client_id` int NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_client_history`
--

INSERT INTO `tbl_client_history` (`id`, `client_id`, `contact_name`, `mobile`, `designation`) VALUES
(1, 3, 'Leo Blankenship', '995', 'Sed quia tempor quia'),
(2, 4, 'Cruz Wagner', '811', 'Quia ratione quo neq'),
(3, 5, 'Aline Powell', '335', 'Nam iure fugiat exer'),
(6, 16, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(7, 16, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(8, 17, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(9, 17, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(10, 17, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(11, 18, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(12, 18, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(13, 18, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(14, 19, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(15, 19, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(16, 19, 'Nitesh Kumar Verma', '08210365137', 'Nitesh Kumar Verma'),
(17, 20, 'Maris Decker', 'Est eum nulla obcae', 'Harum officia dolori'),
(18, 21, 'Germane Terry', 'Obcaecati voluptate', 'Voluptates id est qu'),
(21, 14, 'Dean Montgomery', '767', 'Pariatur Perspiciat'),
(22, 14, 'Kaye Glass', '503', 'Nisi elit hic conse');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company_detail`
--

CREATE TABLE `tbl_company_detail` (
  `id` int NOT NULL,
  `client_id` int NOT NULL,
  `main_person` varchar(255) NOT NULL,
  `account_number` varchar(255) NOT NULL,
  `ifs_code` varchar(255) NOT NULL,
  `branch_name` varchar(255) NOT NULL,
  `tin_no` varchar(255) NOT NULL,
  `cst_no` varchar(255) NOT NULL,
  `pan_no` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_company_detail`
--

INSERT INTO `tbl_company_detail` (`id`, `client_id`, `main_person`, `account_number`, `ifs_code`, `branch_name`, `tin_no`, `cst_no`, `pan_no`) VALUES
(1, 3, 'Temporibus enim quis', '550', 'Dolores minim et tem', 'Ima Mcmillan', 'Libero enim animi i', 'Quod nisi consectetu', 'Molestias nobis sint'),
(2, 4, 'Architecto irure adi', '659', 'Nostrud fugiat nesc', 'Brenda Cabrera', 'Molestias et labore ', 'Consequatur Nostrum', 'DQ89Kp'),
(3, 5, 'Culpa cum labore mol', '15', 'Delectus rem velit ', 'Armando Carpenter', 'Nemo vel ipsum ut ve', 'Necessitatibus perfe', 'Velit quos aperiam '),
(4, 7, 'Voluptatem anim qui', '966', 'Quaerat ut eaque ani', 'Courtney Keller', 'Voluptates laborum d', 'Quia qui nulla vel e', 'Ducimus facilis fug'),
(5, 14, 'Sunt dolores consequ', '346', 'Distinctio Alias pr', 'Maya Bray', 'Incidunt officia ve', '25', 'Assumenda reiciendis'),
(6, 19, 'h', 'hh', 'h', 'hh', 'h', 'h', 'h'),
(7, 20, 'Ea pariatur Duis la', '77', 'Ex illum in sint ac', 'Kiara Mcclain', '12345678', 'Aliquip sunt numqua', '123456789'),
(8, 21, 'Modi nisi dolor saep', '734', 'Mollit libero quis l', 'Allistair Webster', 'Iure qui modi facere', 'Ipsum enim et unde', 'Dolore consequatur');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_expenses`
--

CREATE TABLE `tbl_expenses` (
  `id` bigint UNSIGNED NOT NULL,
  `income_entries` json DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `main_label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_expenses`
--

INSERT INTO `tbl_expenses` (`id`, `income_entries`, `status`, `date`, `main_label`, `created_at`, `updated_at`) VALUES
(1, '[{\"label\": \"s\", \"amount\": \"22\"}]', '0', '2024-11-01', 'q', '2024-11-01 05:59:44', '2024-11-01 06:05:11');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `product_id` int NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `is_archive` int NOT NULL DEFAULT '0',
  `brand_id` int NOT NULL,
  `model_no` varchar(100) NOT NULL,
  `product_code` varchar(100) NOT NULL,
  `category_id` int NOT NULL,
  `short_name` varchar(100) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `unit_id` int NOT NULL,
  `image` varchar(150) NOT NULL,
  `open_stock` int NOT NULL,
  `min_stock` int NOT NULL,
  `max_stock` int NOT NULL,
  `specification` text CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `warehouse_id` int NOT NULL,
  `product_qty` int NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`product_id`, `item_name`, `is_archive`, `brand_id`, `model_no`, `product_code`, `category_id`, `short_name`, `price`, `unit_id`, `image`, `open_stock`, `min_stock`, `max_stock`, `specification`, `warehouse_id`, `product_qty`, `created_date`) VALUES
(4, 'Brittany Langley', 0, 34, 'Duis commodo tempore', 'PR385062024', 28, '', 292.00, 30, 'product_img/default.png', 0, 0, 0, '<p>Aut nobis laboriosam.</p>', 0, 0, '2024-06-19 10:14:16'),
(10, 'Test', 1, 29, 'm1', 'PR972102024', 28, '', 65.00, 30, 'product_img/1729952929.png', 0, 0, 0, '<p>hbh</p>', 0, 0, '2024-10-26 14:28:49'),
(11, 'Test', 1, 31, 'm2', 'PR1016102024', 32, '', 1232.00, 33, 'product_img/1729953316.png', 0, 0, 0, '<p>terterte</p>', 0, 0, '2024-10-26 14:35:16'),
(12, 'Charlotte Slater', 0, 23, 'Architecto soluta do', 'PR1125112024', 28, '', 780.00, 30, 'product_img/1730722277.jpg', 0, 0, 0, '<p>Ducimus, vero neque .</p>', 0, 0, '2024-11-04 12:11:17'),
(13, 'Tana Walters', 0, 34, 'Quis dolores consequ', 'PR1288112024', 28, '', 6.00, 33, 'product_img/1730790531.jpg', 0, 0, 0, '<p>Voluptate delectus, .</p>', 0, 0, '2024-11-05 07:08:51'),
(14, 'Abel Kirk', 0, 34, 'Veniam ullamco omni', 'PR1386112024', 32, '', 226.00, 30, 'product_img/1730867966.jpg', 0, 0, 0, '<p>Est, ad occaecat et .</p>', 0, 0, '2024-11-06 04:39:26');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_quotation`
--

CREATE TABLE `tbl_quotation` (
  `quotation_id` int NOT NULL,
  `quotation_no` varchar(50) NOT NULL,
  `quotation_date` date NOT NULL,
  `customer_id` int NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_quotation`
--

INSERT INTO `tbl_quotation` (`quotation_id`, `quotation_no`, `quotation_date`, `customer_id`, `mobile`, `email`, `status`, `subject`, `address`, `message`) VALUES
(1, 'Q31072024', '2024-07-01', 26, '8985698789', 'jejuvuqu@mailinator.com', '0', '', 'Esse laborum quidem', ''),
(8, 'Q152102024', '2024-10-31', 26, '08210365137', 'equiconsultings@gmail.com', '0', '', 'Sihodih(Kodambari)', '<p>helloo sir</p>'),
(9, 'Q821102024', '2024-10-31', 26, '08210365137', 'equiconsultings@gmail.com', '1', '', 'Sihodih(Kodambari)', '<p>Hwlelelel</p>'),
(10, 'Q821102024', '2024-10-31', 26, '08210365137', 'equiconsultings@gmail.com', '1', '', 'Sihodih(Kodambari)', '<p>Hwlelelel</p>'),
(11, 'Q1037112024', '2003-06-03', 14, '08210365137', 'gftsolution.root@gmail.com', '1', '', 'Sihodih(Kodambari)', '<p>hello</p>'),
(12, 'Q1144112024', '1977-06-08', 15, '08210365137', 'admin@admin.com', '0', '', 'Sihodih(Kodambari), Ps-Hirodih,PO- Bhandaro', '<p>qq</p>');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_quotation_history`
--

CREATE TABLE `tbl_quotation_history` (
  `quotation_history_id` int NOT NULL,
  `quotation_id` int NOT NULL,
  `item_name` int NOT NULL,
  `qty` int NOT NULL,
  `price` float NOT NULL,
  `net_amount` float NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_quotation_history`
--

INSERT INTO `tbl_quotation_history` (`quotation_history_id`, `quotation_id`, `item_name`, `qty`, `price`, `net_amount`, `create_date`) VALUES
(7, 12, 11, 433, 1232, 533456, '2024-11-05 08:58:19'),
(8, 11, 11, 99, 1232, 121968, '2024-11-14 08:25:44');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int NOT NULL,
  `is_archive` int NOT NULL DEFAULT '0',
  `client_id` varchar(50) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `last_name` varchar(100) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(15) NOT NULL,
  `marital_status` varchar(30) NOT NULL,
  `address` text NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `pincode` varchar(30) NOT NULL,
  `mobile_no` varchar(50) NOT NULL,
  `alt_mobile` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_send_mail_Date` date NOT NULL,
  `token_code` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `is_archive`, `client_id`, `first_name`, `middle_name`, `last_name`, `company_name`, `dob`, `gender`, `marital_status`, `address`, `username`, `password`, `city`, `state`, `pincode`, `mobile_no`, `alt_mobile`, `phone`, `email`, `photo`, `role`, `create_date`, `last_send_mail_Date`, `token_code`) VALUES
(14, 0, 'C1387102024', 'Nitesh', 'Kumar', 'Verma', 'hh', '2024-10-25', 'male', '', '[{\"address\":\"Sihodih(Kodambari)\"}]', '', '123456', 'Giridih', 'Jharkhand', '825412', '08210365137', '08210365137', '', 'gftsolution.root@gmail.com', 'client_img/1729859245.png', 'client', '2024-10-25 06:57:25', '2024-11-05', NULL),
(15, 0, 'C1471102024', 'Nitesh', 'Kumar', 'Verma', 'hh', '2024-10-25', 'female', '', '[{\"address\":\"Sihodih(Kodambari)\"},{\"address\":\"Ps-Hirodih,PO- Bhandaro\"}]', '', '12345', 'Giridih', 'Jharkhand', '825412', '08210365137', '08210365137', '', 'admin@admin.com', 'client_img/1729859375.png', 'client', '2024-10-25 06:59:35', '2024-10-25', NULL),
(16, 0, 'C1528102024', 'Nitesh', 'Kumar', 'Verma', 'hh', '2024-10-25', 'male', '', '[{\"address\":\"Sihodih(Kodambari)\"}]', '', '123456', 'Giridih', 'Jharkhand', '825412', '08210365137', '08210365137', '', 'niteshsunny73@gmail.com', 'client_img/1729860018.png', 'client', '2024-10-25 07:10:18', '2024-10-25', NULL),
(17, 0, 'C1647102024', 'Nitesh', 'Kumar', 'Verma', 'hh', '2024-10-25', 'male', '', '[{\"address\":\"Sihodih(Kodambari)\"},{\"address\":\"Ps-Hirodih,PO- Bhandaro\"}]', '', '12345', 'Giridih', 'Jharkhand', '825412', '08210365137', '08210365137', '', 'admin@admin.com', 'client_img/1729861442.png', 'client', '2024-10-25 07:34:02', '2024-10-25', NULL),
(23, 0, 'E482112024', 'Sheila', 'Dorothy Phillips', 'Wells', '', '2023-09-13', 'male', '', 'Sapiente dolor omnis', '', 'Aliquam sed id rerum', 'Ad nihil sunt quae v', 'Sequi duis earum vel', '1234567890', '1234567890', '1234567890', '1234567890', 'dymu@mailinator.com', 'Employee_img/1730797450.jpg', 'employee', '2024-11-05 03:34:10', '2024-11-05', NULL),
(24, 0, 'E538112024', 'April', NULL, 'Page', '', '1983-10-20', 'male', '', 'Quia eiusmod quis qu', '', 'Qui Nam minima moles', 'Et et obcaecati elit', 'Proident minim mole', '1234567890', '1234567890', '1234567890', '1234567890', 'jutybaj@mailinator.com', 'Employee_img/1730797783.jpg', 'employee', '2024-11-05 03:39:43', '2024-11-05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `timesheets`
--

CREATE TABLE `timesheets` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `project_id` bigint UNSIGNED NOT NULL,
  `time_number` decimal(10,0) DEFAULT NULL,
  `task_id` bigint UNSIGNED NOT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_approved` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `timesheets`
--

INSERT INTO `timesheets` (`id`, `user_id`, `project_id`, `time_number`, `task_id`, `date`, `description`, `status`, `created_at`, `updated_at`, `is_approved`) VALUES
(5, 38, 63, 4, 98, '2024-09-30', '', 0, '2024-10-04 00:00:58', '2024-10-04 00:36:10', NULL),
(6, 27, 63, 1, 98, '2024-10-01', '', 0, '2024-10-04 02:16:32', '2024-10-04 03:28:31', NULL),
(7, 27, 63, 3, 98, '2024-10-03', '', 0, '2024-10-04 02:28:17', '2024-10-04 03:08:35', NULL),
(8, 27, 63, 0, 98, '2024-09-30', '', 0, '2024-10-04 02:38:35', '2024-10-04 02:52:16', NULL),
(9, 27, 63, 0, 98, '2024-10-04', '', 0, '2024-10-04 02:50:59', '2024-10-04 02:56:43', NULL),
(10, 27, 63, 1, 98, '2024-10-05', '', 0, '2024-10-04 02:51:09', '2024-10-04 03:26:36', NULL),
(11, 27, 63, 0, 98, '2024-10-06', '', 0, '2024-10-04 02:51:09', '2024-10-04 02:53:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `type` int DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `type`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'Admin', 'admin@admin.com', NULL, '$2y$12$zXuz7X17BSetno0LGtnTnepbZtul6UxAUZNHmKaOoagUDyv3BZRSq', 'iPRbIlC79XIMM5WkMIejG0iP3DY8WzP31j4g8WAv4atII7CDw9Jbp73TJTzq', '2024-07-27 04:37:27', '2024-07-27 04:37:27'),
(44, 2, 'Leah Pacheco', 'piqaxuk@mailinator.com', NULL, '$2y$12$2CaA/l7VFn4bfYwBhAZXWuc/bagb/k1YB8JUcg3PJDJUs0LrgDKVe', NULL, '2024-10-07 01:31:17', '2024-10-07 01:31:17'),
(45, 2, 'Leah Pacheco', 'pisqaxuk@mailinator.com', NULL, '$2y$12$FQ2.6ltV20.0OvucEYcJSuURy6OmkNH4Rz.h6kaAfKAJvfCqOyGga', NULL, '2024-10-07 01:31:48', '2024-10-07 01:31:48'),
(46, 2, 'Tyrone Castaneda', 'zecsejaxo@mailinator.com', NULL, '$2y$12$EJVj04sRbpjg3cxm9BlbvOEYWJDGlX8no0BodjbKuR19/IRjkdxDS', NULL, '2024-10-07 01:47:38', '2024-10-07 01:47:38'),
(47, 2, 'Tyrone Castaneda', 'zz@mailinator.com', NULL, '$2y$12$E3H7ZOCYiP1Pj9A9KkEZsudnUOHTTYgpronLrNTtH7aFK/Y6dAKrm', NULL, '2024-10-07 01:48:03', '2024-10-07 01:48:03'),
(48, 2, 'Aileen Grant', 'bysefucuwe@mailinator.com', NULL, '$2y$12$pYCzYuv/kTA7pTTzDvEvPeMXyncb8XIjFr1PcQkZxCGoREO3Jd6j6', NULL, '2024-10-08 03:24:35', '2024-10-08 03:24:35'),
(49, 2, 'Aileen Grant', 'bysefsucuwe@mailinator.com', NULL, '$2y$12$zYUfujcXB8MBsqbjx3eG/uLuSlXKwJU7o8LV51GjEhfSSWu.JQ7sy', NULL, '2024-10-08 03:26:47', '2024-10-08 03:26:47'),
(50, 2, 'Maite Huff', 'jixi@mailinator.com', NULL, '$2y$12$3mKufd9giqdnA/mV2Z.G8umoFXT64sIhqaLHH38Mu4V7deIsL4l6a', NULL, '2024-10-08 03:31:32', '2024-10-08 03:31:32'),
(51, 2, 'Maite Huff', 'jsixi@mailinator.com', NULL, '$2y$12$WuAnKEUPy9nA3TIvenbNvOi.2ppiq/DD6TwH8piBNqYdhm7INSCXa', NULL, '2024-10-08 03:33:14', '2024-10-08 03:33:14'),
(52, 2, 'Donovan Collins', 'lyhonusa@mailinator.com', NULL, '$2y$12$Uga/jwsslx1TLhBJo.igAeMI5cXu7SHBlDQN78rYMZxaKOrnDC3mO', NULL, '2024-10-08 06:18:47', '2024-10-08 06:18:47'),
(53, 2, 'Donovan Collins', 'lyhoanusa@mailinator.com', NULL, '$2y$12$9cLpHtvpjMoCahYB3pKBW.s/Xin0WQD34UJFxVZ7L22BNOGDbBVLO', NULL, '2024-10-08 06:19:14', '2024-10-08 06:19:14'),
(60, 2, 'Karyn Mcgee', 'hasix@mailinator.com', NULL, '$2y$12$Lof0H24L.pEDOWH0Gb6to.aDTrMNSK2ARyKHyyFsc30fIjhEI2FJO', NULL, '2024-10-08 06:45:57', '2024-10-08 06:45:57'),
(61, 2, 'Ruth Jenkins', 'kacufuqo@mailinator.com', NULL, '$2y$12$dhWxH8f2/FmcOJFZpgYAA.pxRaRYOqFTXvZtx1ArBApADClzoYFxO', NULL, '2024-10-08 06:46:27', '2024-10-08 06:46:27'),
(63, 2, 'Pandora Woodardhhh', 'bufuj@mailinator.com', NULL, '$2y$12$ZnZK9N6F2tCvJerDbxi8U.RQb5QPB3xt4eYK1SFLJO6imgPEhNf8e', NULL, '2024-10-08 08:00:42', '2024-10-21 04:27:53'),
(64, 2, 'Nitesh Kumar Verma', 'ram21@gmail.com', NULL, '$2y$12$jv41bWRUF12K5u0UWKUfJezg8K.E4I2pQAZ19DVDWDmtn1zdIV9Oe', NULL, '2024-10-19 04:01:51', '2024-10-19 04:01:51'),
(66, 2, 'Nitesh Kumar Verma', 'equiconsultings@gmail.com', NULL, '$2y$12$AglKtcr6Zd4rg0Ilsvw2nu7zyMY8cX3ddXbrEK6J89YcbZ/QnmLhK', NULL, '2024-10-19 11:00:57', '2024-10-19 11:00:57'),
(68, 2, 'Nitesh Kumar Verma', 'niteshsunny73@gmail.com', NULL, '$2y$12$fmNWckGVQCqxwIVSy0L9WObAvj3aZSjf5CNWM4r2lQ3Hx9nDt5zMe', NULL, '2024-10-19 11:05:37', '2024-10-19 11:05:37'),
(69, 2, 'Nitesh Kumar Verma', 'niteshsunny7355@gmail.com', NULL, '$2y$12$RSrnew70PodaMBSj5ts28uKt6D4DA3NuPbZs6.vKJfuBWmrpngCZm', NULL, '2024-10-20 22:43:39', '2024-10-20 22:43:39'),
(70, 2, 'Nitesh Kumar Verma', 'gftsolution.root@gmail.com', NULL, '$2y$12$.HTwBOaM7gCASgqQaVPcseJUbqr2/6y/yT1G3MdTjleh4BVBJsqui', NULL, '2024-10-20 22:49:31', '2024-10-20 22:49:31'),
(71, 2, 'Nitesh Kumar Verma', 'equiconsultings77@gmail.com', NULL, '$2y$12$LqPK1Rcb2szLzvtIWwGZ3uJqPhGG0p9pc2K1tUgMUynQZiXvucgTi', NULL, '2024-10-21 03:25:32', '2024-10-21 03:25:32');

-- --------------------------------------------------------

--
-- Table structure for table `warranty_extend`
--

CREATE TABLE `warranty_extend` (
  `id` int NOT NULL,
  `warranty_no` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `customer_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` bigint NOT NULL,
  `service_partner` int NOT NULL,
  `pin` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `distributer_name1` int NOT NULL,
  `source_material` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `purchase` date NOT NULL,
  `sl_no` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `invoice_no` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `invoice_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `warranty_extend`
--

INSERT INTO `warranty_extend` (`id`, `warranty_no`, `customer_name`, `address`, `phone`, `service_partner`, `pin`, `distributer_name1`, `source_material`, `model`, `purchase`, `sl_no`, `invoice_no`, `invoice_date`, `created_at`, `updated_at`) VALUES
(2, 'W23102024/1', 'Nitesh Kumar Verma', 'Sihodih(Kodambari)', 8210365137, 6, '12345', 1, 'MMM', 'M2', '2024-10-23', '2', 'dd', '2024-10-23', '2024-10-23 11:55:00', '2024-10-23 17:25:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amcs`
--
ALTER TABLE `amcs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `amc_details`
--
ALTER TABLE `amc_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `amc_details_service_id_foreign` (`service_id`);

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attendances_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `brances`
--
ALTER TABLE `brances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `call_allocation`
--
ALTER TABLE `call_allocation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `call_log`
--
ALTER TABLE `call_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_master`
--
ALTER TABLE `category_master`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `daily_statuses`
--
ALTER TABLE `daily_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delars`
--
ALTER TABLE `delars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `d_istributers`
--
ALTER TABLE `d_istributers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expense_items`
--
ALTER TABLE `expense_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expense_items_service_id_index` (`service_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `holiday_assigns`
--
ALTER TABLE `holiday_assigns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `holiday_assigns_holiday_id_foreign` (`holiday_id`),
  ADD KEY `holiday_assigns_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `intervals`
--
ALTER TABLE `intervals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_management`
--
ALTER TABLE `leave_management`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_types`
--
ALTER TABLE `leave_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payslips`
--
ALTER TABLE `payslips`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_category`
--
ALTER TABLE `products_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_assigns`
--
ALTER TABLE `project_assigns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quatation_account_tax`
--
ALTER TABLE `quatation_account_tax`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_account_tax_ibfk_1` (`quation_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_centers`
--
ALTER TABLE `service_centers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `spare_part`
--
ALTER TABLE `spare_part`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_task_type_id_foreign` (`task_type_id`),
  ADD KEY `tasks_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `task_assigns`
--
ALTER TABLE `task_assigns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_categories`
--
ALTER TABLE `task_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_statuses`
--
ALTER TABLE `task_statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_types`
--
ALTER TABLE `task_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_account_tax_rates`
--
ALTER TABLE `tbl_account_tax_rates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_client_history`
--
ALTER TABLE `tbl_client_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_company_detail`
--
ALTER TABLE `tbl_company_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_expenses`
--
ALTER TABLE `tbl_expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `tbl_quotation`
--
ALTER TABLE `tbl_quotation`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `tbl_quotation_history`
--
ALTER TABLE `tbl_quotation_history`
  ADD PRIMARY KEY (`quotation_history_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `timesheets`
--
ALTER TABLE `timesheets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `timesheets_project_id_foreign` (`project_id`),
  ADD KEY `timesheets_task_id_foreign` (`task_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `warranty_extend`
--
ALTER TABLE `warranty_extend`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amcs`
--
ALTER TABLE `amcs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `amc_details`
--
ALTER TABLE `amc_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `brances`
--
ALTER TABLE `brances`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `call_allocation`
--
ALTER TABLE `call_allocation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `call_log`
--
ALTER TABLE `call_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category_master`
--
ALTER TABLE `category_master`
  MODIFY `cat_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `daily_statuses`
--
ALTER TABLE `daily_statuses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delars`
--
ALTER TABLE `delars`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `d_istributers`
--
ALTER TABLE `d_istributers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `expense_items`
--
ALTER TABLE `expense_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holidays`
--
ALTER TABLE `holidays`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `holiday_assigns`
--
ALTER TABLE `holiday_assigns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `intervals`
--
ALTER TABLE `intervals`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `leave_management`
--
ALTER TABLE `leave_management`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `leave_types`
--
ALTER TABLE `leave_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `payslips`
--
ALTER TABLE `payslips`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products_category`
--
ALTER TABLE `products_category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `project_assigns`
--
ALTER TABLE `project_assigns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `quatation_account_tax`
--
ALTER TABLE `quatation_account_tax`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `service_centers`
--
ALTER TABLE `service_centers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `spare_part`
--
ALTER TABLE `spare_part`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `task_assigns`
--
ALTER TABLE `task_assigns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=316;

--
-- AUTO_INCREMENT for table `task_categories`
--
ALTER TABLE `task_categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `task_statuses`
--
ALTER TABLE `task_statuses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `task_types`
--
ALTER TABLE `task_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_account_tax_rates`
--
ALTER TABLE `tbl_account_tax_rates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_client_history`
--
ALTER TABLE `tbl_client_history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_company_detail`
--
ALTER TABLE `tbl_company_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_expenses`
--
ALTER TABLE `tbl_expenses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_quotation`
--
ALTER TABLE `tbl_quotation`
  MODIFY `quotation_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_quotation_history`
--
ALTER TABLE `tbl_quotation_history`
  MODIFY `quotation_history_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `timesheets`
--
ALTER TABLE `timesheets`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `warranty_extend`
--
ALTER TABLE `warranty_extend`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `amc_details`
--
ALTER TABLE `amc_details`
  ADD CONSTRAINT `amc_details_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `attendances`
--
ALTER TABLE `attendances`
  ADD CONSTRAINT `attendances_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `holiday_assigns`
--
ALTER TABLE `holiday_assigns`
  ADD CONSTRAINT `holiday_assigns_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `holiday_assigns_holiday_id_foreign` FOREIGN KEY (`holiday_id`) REFERENCES `holidays` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_task_type_id_foreign` FOREIGN KEY (`task_type_id`) REFERENCES `task_types` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `timesheets`
--
ALTER TABLE `timesheets`
  ADD CONSTRAINT `timesheets_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `timesheets_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
