<?php

$servidor  = "localhost";
$basedatos = "atm";
$usuario   = "root";
$password  = "";

$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

$sql = "SELECT * FROM reformas";
$datos = mysqli_query($conexion,$sql);

$html = '<table class="table table-dark">';
$html .= '<thead><tr><th scope="col">ID</th><th scope="col">Peón</th><th scope="col">Cliente</th></thead>';


while ($linea = mysqli_fetch_array($datos)){
    $html .= '<tr>';
    $html .= '<td scope="row">'.$linea["idReforma"].'</td>';
    $html .= '<td scope="row">'.$linea["peon"].'</td>';
    $html .= '<td scope="row">'.$linea["cliente"].'</td>';
    $html .= '</tr>';
}

$html .= '</table>';

header('Content-Type: text/html');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Fri, 05 Aug 1995 00:00:00 GMT');

echo $html;

mysqli_close($conexion);

?>