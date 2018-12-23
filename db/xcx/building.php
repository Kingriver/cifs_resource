<?php
include('zx_db.php');
$time=empty($_GET['time']) ? '' : $_GET['time'];
$sql = 'SELECT * FROM  building where 1=1';
$wh = '';
if($time){
    $wh .= " and building_time=$time";
}
$query = $zxdb->query($sql.$wh);
$result=[];
while($row = $query->fetch_array(MYSQL_ASSOC)){
    $row['building_img'] = explode(',',$row['building_img']);
    $result[]=$row;
}
//查询代码
//释放结果集+关闭MySQL连接
$query -> free_result();
$zxdb -> close();
echo json_encode($result) 


?>