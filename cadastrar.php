<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $description = $_POST["description"];
    $contact = $_POST["contact"];

    // Aqui você pode processar e armazenar os dados no banco de dados ou tomar outras medidas necessárias

    // Exemplo de redirecionamento após o processamento
    header("Location: index.html");
    exit();
}
?>