<?php
function image($path1,$path2,$text1='',$text2=''){
    $im = @imagecreatetruecolor(375, 667);
    $background =imagecolorallocate($im, 255, 255, 255);
    imagefill($im,0,0,$background);
    $image_1 = imagecreatefromjpeg($path1);
    $image_2 = imagecreatefromjpeg($path2);
    list($img1_w, $img1_h, $dst_type) = getimagesize($path1);
    // list($img2_w, $img2_h, $dst_type) = getimagesize($path2);
    imagecopyresized($im, $image_1, 20, 20, 0, 0, 335, 300,$img1_w,$img1_h);
    //imagecopy($im, $image_2, 47, 360, 0, 0, 280, 280);
    imagecopyresized($im, $image_2, 77.5, 400, 0, 0, 200, 200,275,275);
    // $time=time();
    $merge = 'merge.jpg';
    imagejpeg($im,$merge,100);
    $dst = imagecreatefromstring(file_get_contents($merge));
    $font = 'simsun.ttc';//字体
    $black = imagecolorallocate($dst, 0x00, 0x00, 0x00);//字体颜色
    imagefttext($dst, 16, 0, 75, 350, $black, $font, $text1);
    imagefttext($dst, 16, 0, 85, 650, $black, $font, $text2);
    imagejpeg($dst,$merge,100);
    imagedestroy($dst);
    return $merge;
}