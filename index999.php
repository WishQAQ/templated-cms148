<?php
header("content-type:text/html;charset=GBK");

echo __LINE__;
echo "<hr/>";
echo __FILE__;
echo "<hr/>";
echo PHP_VERSION;
echo "<hr/>";
echo PHP_OS;
echo "<hr/>";

$a='1545';
print($a);
print("<hr/>");
$a='king';
print_r($a);
echo '<hr/>';
$c='54';
var_dump($c);


$str=<<<EON
<html>
<head>
<title>我的文档</title/>
<body><h1>黄金大幅回落速度可耗费精神都快回房间</h1></body>
</head>
</html>
EON;

echo $str;

$i=3;
$n=10;
$a=8999;
echo "变量测试<br/>\n";
echo "{$i}*{$n}+{$a}=".($i*$n+$a)."<br/>\n";