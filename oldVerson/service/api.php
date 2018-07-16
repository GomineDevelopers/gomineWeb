<?php
include "_conn_.php";
include "mobile.php";

$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER["HTTP_USER_AGENT"];
$code = isset($_GET["code"]) ? addslashes($_GET["code"]) : "";

$type = isMobile() == true ? "Mobile" : "PC";

$sql="insert into user_visit(code, ip, agent, type, create_date) VALUES('$code', '$ip', '$userAgent', '$type', NOW())";
$res = mysql_query($sql);
$link = $row["link"];
ob_clean();

$result = "var userAgent = '$type';";
echo $result;
