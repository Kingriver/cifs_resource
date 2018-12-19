-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-12-19 17:31:48
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wx_xcx_zx`
--

-- --------------------------------------------------------

--
-- 表的结构 `design`
--

CREATE TABLE `design` (
  `design_id` tinyint(3) UNSIGNED NOT NULL COMMENT '序号',
  `design_type` tinyint(4) NOT NULL COMMENT '类型 ',
  `design_desc` varchar(30) NOT NULL COMMENT '描述',
  `design_browse` int(11) NOT NULL COMMENT '浏览数量',
  `design_share` int(11) NOT NULL COMMENT '分享数量',
  `design_imgs` varchar(60) NOT NULL COMMENT '图片地址'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='设计图数据表';

--
-- 转存表中的数据 `design`
--

INSERT INTO `design` (`design_id`, `design_type`, `design_desc`, `design_browse`, `design_share`, `design_imgs`) VALUES
(1, 0, '描述没什么', 30, 29, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg'),
(2, 2, '啦啦啦啦啦绿绿绿', 11, 16, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg'),
(3, 2, '灌灌灌灌灌过过', 36, 96, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(4, 0, '坎坎坷坷扩扩扩', 23, 11, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `design`
--
ALTER TABLE `design`
  ADD PRIMARY KEY (`design_id`),
  ADD KEY `TYPE` (`design_type`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `design`
--
ALTER TABLE `design`
  MODIFY `design_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '序号', AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
