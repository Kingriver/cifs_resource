<?php
include('image.php');

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


    // include('user_token.php');
    // var_dump($data);
    // echo $data;

    $path =$_POST['path'];
    $token = $_POST['token'];
    $imgSrc = $_POST['imgSrc'];
    $title = $_POST['title'];
    $width=280;
    $params = json_encode(['path'=>$path,'width'=>$width]);
    $content = _requestPost('https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token='.$token, $params);

    $img= "code.jpg";
    $file = fopen($img,"w+");
    fwrite($file,$content);
    fclose($file);
    $target= "target.jpg";
    $ff = fopen($target,"w+");
    fwrite($ff,file_get_contents($imgSrc));
    fclose($ff);

    $codeImg=image($target,$img,$title,'长按扫码，查看原图');

    $rs = ['codeImg' => 'http://www.wx.com/xcx/'.$codeImg,'success'=>true];
    echo json_encode($rs);

  

 















?>