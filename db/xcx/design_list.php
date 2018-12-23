<?php
include('zx_db.php');
$type=empty($_GET['type']) ? '' : $_GET['type'];
$sql = 'SELECT * FROM  design where 1=1';
$wh = '';
if($type){
    $wh .= " and design_type=$type";
}
$query = $zxdb->query($sql.$wh);
$result=[];
while($row = $query->fetch_array(MYSQL_ASSOC)){
    $row['design_imgs'] = explode(',',$row['design_imgs']);
    $result[]=$row;
}
//查询代码
//释放结果集+关闭MySQL连接
$query -> free_result();
$zxdb -> close();
echo json_encode($result) 



// include('zx_db.php');
// $type=empty($_GET['type']) ? '' : $_GET['type'];
// $sql = 'SELECT * FROM  design where 1=1';
// $wh = '';
// if($type){
//     $wh .= " and design_type=$type";
// }
// $query = $zxdb->query($sql.$wh);
// $result=[];
// while($row = $query->fetch_array(MYSQL_ASSOC)){
//     $row['design_imgs'] = explode(',',$row['design_imgs']);
//     $result[]=$row;
// }
// //查询代码
// //释放结果集+关闭MySQL连接
// $query -> free_result();
// $zxdb -> close();
// echo json_encode($result) 
?>