<?php
include('zx_db.php');
$name=$_REQUEST['name'];
$password=$_REQUEST['password'];
$sql="SELECT * FROM user where user_name='$name' and user_password='$password'";
$query=$zxdb->query($sql);
$result=[];
while($row = $query->fetch_array(MYSQL_ASSOC)){
    // $result['user_avatar']=$row['user_avatar'];
    // $result['user_id']=$row['user_id'];
    // $result['user_name']=$row['user_name'];
    // $result['user_type']=$row['user_type'];
    unset($row['user_password']);
    $row['success']=true;
    $result=$row;
    
}

//查询代码
//释放结果集+关闭MySQL连接
$query -> free_result();
$zxdb -> close();
echo json_encode($result) 
?>