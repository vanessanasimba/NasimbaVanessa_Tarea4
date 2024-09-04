<?php
require_once('../models/Productos.php');

$producto = new Productos();

switch ($_GET["op"]){
//TODO: operaciones de productos
    case 'todos': //TODO: Procedimeinto para cargar todos las datos de los proveedores
        $datos = array(); // Defino un arreglo para almacenar los valores que vienen de la clase proveedores.model.php
        $datos = $producto->todos(); // Llamo al metodo todos de la clase proveedores.model.php
        while ($row = mysqli_fetch_assoc($datos)) //Ciclo de repeticon para asociar los valor almancenados en la variable $datos
        {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;
        //TODO: procedimeinto para obtener un registro de la base de datos
    case 'uno':
        $idProductos = $_POST["idProductos"];
        $datos = array();
        $datos = $producto->uno($idProductos);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;
        //TODO: Procedimeinto para insertar un proveedor en la base de datos
    case 'insertar':
        $Codigo_Barras = $_POST["Codigo_Barras"];
        $Nombre_Producto = $_POST["Nombre_Producto"];
        $Graba_IVA = $_POST["Graba_IVA"];
        $datos = array();
        $datos = $producto->insertar($Codigo_Barras,$Nombre_Producto,$Graba_IVA);
        echo json_encode($datos);
        break;
        //TODO: Procedimeinto para actualziar un proveedor en la base de datos
    case 'actualizar':
        $idProductos = $_POST["idProductos"];
        $Codigo_Barras = $_POST["Codigo_Barras"];
        $Nombre_Producto = $_POST["Nombre_Producto"];
        $Graba_IVA = $_POST["Graba_IVA"];
        $datos = array();
        $datos = $producto->actualizar($idProductos,$Codigo_Barras,$Nombre_Producto,$Graba_IVA);
        echo json_encode($datos);
        break;
        //TODO: Procedimeinto para eliminar un proveedor en la base de datos
    case 'eliminar':
        $idProductos = $_POST["idProductos"];
        $datos = array();
        $datos = $producto->eliminar($idProductos);
        echo json_encode($datos);
        break;
}

?>