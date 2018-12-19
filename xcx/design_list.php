<?php
//连接数据库方式1
$conn = new mysqli('localhost', 'root', '', 'wx_xcx_zx');

//连接数据库方式2
// $conn = new mysqli();
// $conn -> connect('localhost', 'root', 'password', 'test');

//check connection (检查PHP是否连接上MYSQL)
if ($conn -> connect_errno) {
    printf("Connect failed: %s\n", $conn->connect_error);
    exit();
}

//查询代码
$sql = 'SELECT * FROM  design';
$query = $conn->query($sql);
$result=[];
while($row = $query->fetch_array()){
    $result[]=$row;
}
//查询代码

//释放结果集+关闭MySQL连接
$query -> free_result();
$conn -> close();
echo json_encode($result) 





?>