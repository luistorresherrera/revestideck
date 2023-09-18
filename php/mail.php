<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destinatario = "luis.torres@tyzcorp.com"; // Reemplaza con tu dirección de correo electrónico
    $asunto = "REVESTIDECK-COTIZACION";
    $nombre = $_POST["nombre"];
    $remite = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Crear una tabla HTML con los datos del formulario
    $tabla = "<table border='1'>
                <tr>
                    <td><b>Nombre:</b></td>
                    <td>$nombre</td>
                </tr>
                <tr>
                    <td><b>Correo Electrónico:</b></td>
                    <td>$remite</td>
                </tr>
                <tr>
                    <td><b>Mensaje:</b></td>
                    <td>$mensaje</td>
                </tr>
             </table>";

    // Encabezados para el correo electrónico
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $remite" . "\r\n";

    // Enviar el correo electrónico
    if (mail($destinatario, $asunto, $tabla, $headers)) {
        echo "¡Correo electrónico enviado con éxito!";
    } else {
        echo "Error al enviar el correo electrónico. Por favor, inténtalo de nuevo.";
    }
}
?>