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
<title>�ҵ��ĵ�</title/>
<body><h1>�ƽ��������ٶȿɺķѾ��񶼿�ط���</h1></body>
</head>
</html>
EON;

echo $str;

$i=3;
$n=10;
$a=8999;
echo "��������<br/>\n";
echo "{$i}*{$n}+{$a}=".($i*$n+$a)."<br/>\n";