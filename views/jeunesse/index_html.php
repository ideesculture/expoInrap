<?php
$expos = $this->getVar("expos");
?>

<h1>Liste des expositions</h1>

<!--<a href="" class="expo-button">Ajouter une nouvelle exposition</a>-->

<table style="width: 100%;border:1px solid #ddd;" class="liste-expos">
    <thead>
        <tr>
            <th style="border:1px solid #ddd;">Modifier</th>
            <th style="border:1px solid #ddd;"> Titre</th>
            <th style="border:1px solid #ddd;">Accès</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <?php

        foreach ($expos as $expo_id => $expo) {
            print "<tr>";
            print '<td style="border:1px solid #ddd;"><a title="Modifier" href="'.__CA_URL_ROOT__.'/index.php/expoInrap/Jeunesse/EditForm/expo_id/' . $expo_id . '"><i class="caIcon fa fa-file editIcon fa-2x" title="Modifier"></i></a></td>';
            print "<td style='border:1px solid #ddd;'>" . $expo[0] . "</td>";
            print "<td style='border:1px solid #ddd;'>" . (($expo[1] == 1) ? "accessible au public" : "non accessible au publique") . "</td>";
            print '<td style="border:1px solid #ddd;"><a title="Supprimer" href="'.__CA_URL_ROOT__.'/index.php/expoInrap/Jeunesse/deleteExpo/expo/id/' . $expo_id . '"><i class="caIcon fa fa-times deleteIcon fa-2x" title="Supprimer"></i></a></td>';
            print "</tr>";
        }


        ?>
    </tbody>
</table>

<style>
    .liste-expos thead th {
        font-family: "Helvetica Neue", Arial, sans-serif;
        font-weight: 700;
        height: 32px;
        background-color: #eee;
        padding: 4px 8px;
    }

    .liste-expos td {
        padding: 4px 8px;
    }

    .expo-button {
        padding: 10px;
        display: inline-block;
        color: white !important;
        background-color: #1ab3c8;
        text-decoration: none !important;
        margin-bottom: 5px;
    }

    .expo-button:hover {
        text-decoration: underline !important;
    }

    td:first-child {
        text-align: center;
    }

    td:last-child {
        text-align: center;
    }
</style>

