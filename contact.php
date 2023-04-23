<?php

$name = $_POST['nombre'];
$email = $_POST['email'];
$celular = $_POST['celular'];
$message = $_POST['mensaje'];

$formcontent="
    Nombre: $name \n
    E-mail: $email \n
    Celular: $celular \n
    Mensaje: $message
";

$recipient = "claralarguia@hotmail.com";

$subject = "Consulta COCCIONS - $name";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>