<?php
session_start();
$conn=mysql_connect("10.66.114.255","root","#G0mi1e2015");
mysql_select_db("gomine_website", $conn);
mysql_query("set names utf8");
date_default_timezone_set('PRC');
$admin = 'admin';
$password = 'admin';
