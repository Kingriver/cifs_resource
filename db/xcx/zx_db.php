<?php
header("Content-type:text/html;charset=utf-8");
//如果需要设置允许所有域名发起的跨域请求，可以使用通配符 *
header("Access-Control-Allow-Origin: *");
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