<?php
include('zx_db.php');
$sql = 'SELECT * FROM  types';
$query = $zxdb->query($sql);
$detail=[];
while($row = $query->fetch_array(MYSQL_ASSOC)){
    $detail[]=$row;
}
//查询代码
function check($id){
    global $zxdb;
    //echo $id;
    $sqls = "SELECT count(*) as tot FROM  design WHERE design_type=$id";
    $querys=$zxdb->query($sqls);
    $details=[];
    $row = $querys->fetch_array(MYSQL_ASSOC);
    return $count=$row['tot'];
    //释放结果集+关闭MySQL连接
    $querys->free_result();
    $zxdb->close();
}
$arr = [];
foreach($detail as $k=>$v){
    if($v['parent_id'] > 0){
        $v['num']=check($v['id']);
        $arr[$v['parent_id']]['son'][] = $v;
    }else{
        $arr[$v['id']] = $v;
    }
}
//释放结果集+关闭MySQL连接
$query -> free_result();
$zxdb -> close();
//var_dump($arr);
echo json_encode(array_values($arr));  
?>