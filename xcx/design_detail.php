<?php
include('zx_db.php');
$id=$_GET['id'];
$spl="SELECT * FROM design
WHERE design_id=$id";
$query=$zxdb->query($spl);
$detail=[];
while($row = $query->fetch_array(MYSQL_ASSOC)){
    $row['design_imgs'] = explode(',',$row['design_imgs']);
    $detail=$row;
}
//查询代码

//释放结果集+关闭MySQL连接
$query -> free_result();
$zxdb -> close();
echo json_encode($detail);  

?>