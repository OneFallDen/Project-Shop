<?php

    header('Content-type: json/application');

    require('connection.php');
    require('functions.php');
    
    $query = "SELECT * FROM users;";
    $result = pg_exec($connection, $query);
    
    $type = $_GET['path'];
    
    echo $type;
    
    if($type === 'users'){
        $user = [];
    
        $usersList = [];
        
        for ($row = 0; $row < pg_numrows($result); $row++) {

            $usersList[] = pg_fetch_assoc($result);

        }   
        
        echo json_encode($usersList);
    }
    
    
   
    
    
?>  
