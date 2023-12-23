<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Aqui você deve realizar o cadastro do usuário no banco de dados
    // Em um ambiente de produção, utilize técnicas seguras como hash para armazenar senhas

    // Exemplo de redirecionamento após o cadastro bem-sucedido
    header("Location: index.html");
    exit();
}
?>