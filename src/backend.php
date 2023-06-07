<?php
header('Access-Control-Allow-Origin: *');

$connect = mysqli_connect('localhost', 'root', '', 'Members');
if ($connect === false)
{
    die("Cant connect to database");
}
$sql = "SELECT * FROM member;";
if ($result=mysqli_query($connect,$sql))
{

    $helloResult = [];
    foreach($result as $item)
    {
        array_push($helloResult, $item);
    }

    header('Content-Type: application/json');
    echo json_encode($helloResult);
}
else
{
    header('Content-Type: application/json');
    echo json_encode("ошибка");
}