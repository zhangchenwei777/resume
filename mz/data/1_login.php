<?php
header('Content-Type:Text/plain');

$uname = $_REQUEST['uname'];
$upwd = $_REQUEST['upwd'];

$conn = mysqli_connect('127.0.0.1','root','','mz');
//�ύSQL
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

$sql = "SELECT uid FROM mz_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn, $sql);

if($result===false){ //SQL���ִ��ʧ��
	echo 'sqlerr';
}else {  //SQL���ִ�гɹ�
	$row = mysqli_fetch_assoc($result);
	if($row){	//��ȡ��һ�м�¼
		echo 'ok';
	}else{	//δ��ȡ���κμ�¼
		echo 'err';
	}
}