<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

<?php
$dataGet = $_GET['lang'];

// Chemin vers le fichier JSON
$cheminFichier = './langue/langue.json';

// Lire le contenu du fichier JSON
$jsonContenu = file_get_contents($cheminFichier);

// Décoder le JSON en une structure de données PHP (tableau associatif)
$data = json_decode($jsonContenu, true);

$dataGet = json_decode($dataGet);

array_push($data, $dataGet);

$data = json_encode($data);

$myfile = fopen("./langue/langue.json", "w") or die("Unable to open file!");
fwrite($myfile, $data);
fclose($myfile);
?>

</body>

</html>