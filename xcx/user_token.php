<?php
    $appId='wx36f66757564195a9';
    $secret='2a3fb080ae3e486a5cbab1fd7b646b9b';
    // $data = json_decode(file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appId.'&secret='.$secret),true);
    // $token=$data['access_token'];
    $data = json_decode(file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appId.'&secret='.$secret));
    if(!empty($data->access_token)){
        $data->success=true;
        $data->message='ok';
        $data->expires_in = (time()+($data->expires_in))*1000;
        echo json_encode($data);
    }else{
        $data->success=false;
        $data->message='参数错误';
        echo json_encode($data);
    }
?>
