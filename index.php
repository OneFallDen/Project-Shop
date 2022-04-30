<?php

    header('Content-type: json/application');

    require('connection.php');
    require('functions.php');


    $type = $_GET['path'];

    switch($type){
    
        case 'users':
            $query = "SELECT * FROM users;";
            $result = pg_exec($connection, $query);
            $user = [];

            $usersList = [];

            for ($row = 0; $row < pg_numrows($result); $row++) {

                $usersList[] = pg_fetch_assoc($result);

            }

            echo json_encode($usersList);

            break;

        case 'goods':
            getGoods($connection);
            break;

    }

?>  
