<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario y asegurarse de que estén definidos
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $subname = isset($_POST["subname"]) ? $_POST["subname"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $number = isset($_POST["number"]) ? $_POST["number"] : "";
    $fecha = isset($_POST["fecha"]) ? $_POST["fecha"] : "";
    $hora = isset($_POST["hora"]) ? $_POST["hora"] : "";

    // Configurar la conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "baseform";

    // Crear conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Preparar la consulta SQL para insertar los datos en la base de datos
    $sql = "INSERT INTO form (name, subname, email, number, fecha, hora) VALUES ('$name', '$subname', '$email', '$number', '$fecha', '$hora')";

    // Ejecutar la consulta SQL
    if ($conn->query($sql) !== TRUE) {
        echo "Error al insertar datos: " . $conn->error;
    }

    // Cerrar conexión
    $conn->close();
}
?>
