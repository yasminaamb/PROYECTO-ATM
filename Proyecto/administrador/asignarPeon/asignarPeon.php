<?php
    //Configuramos la BD
    $servidor = "localhost";
    $basedatos = "atm";
    $usuario = "root";
    $password = "";

    //datos de entrada
    $datosJSON = $_POST["datosAsignar"];

    //Decodificamos la categoria
    $categoria = json_decode($datosJSON);

    //Creamos la conexion del servidor
    $conexion = mysqli_connect($servidor,$usuario,$password,$basedatos) or die(mysqli_error($conexion));
    mysqli_set_charset($conexion,"utf8");

    $sql = "INSERT INTO reformas (peon, cliente) VALUES ('$categoria->peon', '$categoria->cliente');";
    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Asignación realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de asignación: ".mysqli_error($conexion);
    }

    mysqli_close($conexion);

    echo json_encode($respuesta);

?>