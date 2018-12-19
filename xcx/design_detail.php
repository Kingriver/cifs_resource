<?php



$id=$_GET['id'];
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("wx_xcx_zx", $con);

$result = mysql_query("SELECT * FROM design
WHERE design_id=$id");
$detail=[];
while($row = mysql_fetch_array($result))
  {
    $detail[]=$row;
  }
echo json_encode($detail);  

?>