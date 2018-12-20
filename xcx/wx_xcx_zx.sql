-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2018-12-20 10:03:12
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
  `design_imgs` text COMMENT '图片地址'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='设计图数据表';

--
-- 转存表中的数据 `design`
--

INSERT INTO `design` (`design_id`, `design_type`, `design_desc`, `design_browse`, `design_share`, `design_imgs`) VALUES
(1, 5, '简约简约描述没什么', 30, 29, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg,http://winipo.cn/tpl/Public/images/home/yw_b04.jpg,http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(2, 10, '卧室卧室啦啦啦啦啦绿绿绿', 11, 16, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg,http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(3, 18, '窗帘窗帘爽了灌灌灌', 36, 96, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(4, 28, '粉色粉色坎坎坷坷扩扩扩', 23, 11, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg,http://winipo.cn/tpl/Public/images/home/yw_b03.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL COMMENT '装修类型',
  `name` varchar(20) NOT NULL COMMENT '类型名称',
  `parent_id` int(11) NOT NULL COMMENT '类型标识',
  `img` varchar(60) NOT NULL COMMENT '类型图片'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='设计图类型';

--
-- 转存表中的数据 `types`
--

INSERT INTO `types` (`id`, `name`, `parent_id`, `img`) VALUES
(1, '风格', 0, ''),
(2, '空间', 0, ''),
(3, '局部', 0, ''),
(4, '色系', 0, ''),
(5, '简约', 1, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(6, '简欧', 1, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(7, '中式', 1, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(8, '田园', 1, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(9, '地中海', 1, 'http://winipo.cn/tpl/Public/images/home/yw_b05.jpg'),
(10, '卧室', 2, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg'),
(11, '客厅', 2, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg'),
(12, '餐厅', 2, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg'),
(13, '卫生间', 2, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg'),
(14, '厨房', 2, 'http://winipo.cn/tpl/Public/images/home/yw_b04.jpg'),
(15, '背景墙', 3, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg'),
(16, '灯具', 3, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg'),
(17, '收纳', 3, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg'),
(18, '窗帘', 3, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg'),
(19, '过道', 3, 'http://winipo.cn/tpl/Public/images/home/yw_b03.jpg'),
(20, '春色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(21, '白色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(22, '原木色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(23, '绿色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(24, '紫色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(25, '蓝色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(26, '黑白', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(27, '红色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(28, '粉色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg'),
(29, '黄色', 4, 'http://winipo.cn/tpl/Public/images/home/yw_b06.jpg');

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
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`parent_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `design`
--
ALTER TABLE `design`
  MODIFY `design_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '序号', AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '装修类型', AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
