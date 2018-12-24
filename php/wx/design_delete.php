<?php
include('zx_db.php');
$id=$_REQUEST['id'];
$sql = "DELETE FROM design where design_id=$id";
$query = $zxdb->query($sql);
$sql = "SELECT * FROM design";
$query = $zxdb->query($sql);
$result=[];
while($row = $query->fetch_array(MYSQL_ASSOC)){
    $row['design_imgs'] = explode(',',$row['design_imgs']);
    $row['success']=true;
    $result[]=$row;
}
//查询代码
//释放结果集+关闭MySQL连接
$query -> free_result();
$zxdb -> close();
echo json_encode($result);

?>