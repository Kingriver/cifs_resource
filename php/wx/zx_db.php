<?php
header("Content-type:text/html;charset=utf-8");

//// 准许跨域请求。
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
/**
 * 浏览器第一次在处理复杂请求的时候会先发起OPTIONS请求。路由在处理请求的时候会导致PUT请求失败。
 * 在检测到option请求的时候就停止继续执行
 */
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
    exit;
}

//连接数据库方式1
$zxdb = new mysqli('localhost', 'root', '', 'wx_xcx_zx');
$zxdb->query("set names utf8");

//连接数据库方式2
// $conn = new mysqli();
// $conn -> connect('localhost', 'root', 'password', 'test');

//check connection (检查PHP是否连接上MYSQL)
if ($zxdb -> connect_errno) {
    printf("Connect failed: %s\n", $zxdb->connect_error);
    exit();
}