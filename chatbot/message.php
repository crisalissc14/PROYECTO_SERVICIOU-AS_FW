<?php
// Establecer la conexión a la base de datos
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "modelos";

// Conectar a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar la conexión
if (!$conn) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Obtener el mensaje del usuario a través de AJAX
$getMesg = mysqli_real_escape_string($conn, $_POST['text']);

// Comprobar la consulta del usuario en la base de datos
$check_data = "SELECT bot_message FROM chatbot_responses WHERE user_message LIKE '%$getMesg%'";
$run_query = mysqli_query($conn, $check_data) or die ("Error al ejecutar la consulta");

// Si la consulta del usuario coincide con la consulta en la base de datos, devolver la respuesta
if(mysqli_num_rows($run_query) > 0) {
    // Recuperar la respuesta
    $fetch_data = mysqli_fetch_assoc($run_query);
    // Almacenar la respuesta en una variable y mostrarla
    $reply = $fetch_data['bot_message'];
    echo $reply;
} else {
    // Si no se encuentra una coincidencia exacta, responder con un mensaje predeterminado
    echo "Lo siento, no puedo responder a eso";
}

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>
