<?php
// $mysqli = new mysqli("localhost", "root", "", "test");

// /* check connection */
// if (mysqli_connect_errno()) {
//     printf("Connect failed: %s\n", mysqli_connect_error());
//     exit();
// }

// $query = "SELECT id,a FROM test ORDER by id DESC LIMIT 0,5";
// $data = [];
// if ($stmt = $mysqli->prepare($query)) {

//     /* execute statement */
//     $stmt->execute();

//     /* bind result variables */
//     $stmt->bind_result($name, $code);

//     /* fetch values */
//     while ($stmt->fetch()) {
//         $data[] = [$name, $code];
//        // printf ("%s (%s)\n", $name, $code);
//     }

//     /* close statement */
//     $stmt->close();
// }

// /* close connection */
// $mysqli->close();
// echo json_encode($data);

//echo file_put_contents("path","Runoob");
function _requestPost($url, $data, $ssl=true) {
    //curl完成
    $curl = curl_init();
    //设置curl选项
    curl_setopt($curl, CURLOPT_URL, $url);//URL
    $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '
Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0 FirePHP/0.7.4';
    curl_setopt($curl, CURLOPT_USERAGENT, $user_agent);//user_agent，请求代理信息
    curl_setopt($curl, CURLOPT_AUTOREFERER, true);//referer头，请求来源
    curl_setopt($curl, CURLOPT_TIMEOUT, 30);//设置超时时间
    //SSL相关
    if ($ssl) {
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);//禁用后cURL将终止从服务端进行验证
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);//检查服务器SSL证书中是否存在一个公用名(common name)。
    }
    // 处理post相关选项
    curl_setopt($curl, CURLOPT_POST, true);// 是否为POST请求
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);// 处理请求数据
    // 处理响应结果
    curl_setopt($curl, CURLOPT_HEADER, false);//是否处理响应头
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);//curl_exec()是否返回响应结果

    // 发出请求
    $response = curl_exec($curl);
    if (false === $response) {
        echo '<br>', curl_error($curl), '<br>';
        return false;
    }
    curl_close($curl);
    return $response;
}

$appId='wx36f66757564195a9';
$secret='2a3fb080ae3e486a5cbab1fd7b646b9b';
// $token = _requestPost('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appId.'&secret='.$secret);

$token = file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx36f66757564195a9&secret=2a3fb080ae3e486a5cbab1fd7b646b9b');
echo json_encode($token);


// $url = $_REQUEST['url'];
// $a = json_encode(array('path'=>$url));
// $content = _requestPost('https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token='.$token, $a);
// $img= "code.png";
// $file = fopen($img,"w+");
// fwrite($file,$content);
// fclose($file);
// $rs = ['path' => 'http://www.test.com/'.$img];
// echo json_encode($rs);
?>