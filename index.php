<?php

    header('Content-type: json/application');

    require('connection.php');
    require('functions.php');

    $method = $_SERVER['REQUEST_METHOD'];


    $q = $_GET['path'];

    $params = explode('/', $q);

    switch($method){

        case 'GET':
            switch($params[0]){

                case 'goods':
                    if(isset($params[1])){
                        if(isset($params[2])){
                            getSortGoods($connection,$params[1],$params[2]);
                        }
                        else{
                            getHalfSortGoods($connection,$params[1]);
                        }
                    }
                    else
                        getGoods($connection);
                    break;

                case 'favorite':
                    if(isset($params[1]))
                        getFav($connection,$params[1]);
                    break;

                case 'auth':
                    if(isset($params[1]))
                        getAuth($connection,$params[1]);
                    break;

                case 'admin':
                    if(isset($params[1]))
                        getAdmin($connection,$params[1]);
                    break;

                }
            break;

        case 'POST':
            switch($params[0]){
                case 'favorite':
                    if(isset($params[1]))
                        postFav($connection,$_POST,$params[1]);
                    break;

                case 'reg':
                    postReg($connection,$_POST);
                    break;

                case 'goods':
                    postGoods($connection,$_POST);
                    break;
            }
            break;

        case 'PATCH':
            switch($params[0]){
                case 'goods':
                    $data = file_get_contents('php://input');
                    $data = json_decode($data,true);
                    updateGoods($connection,$data);
                    break;
            }
            break;
    }

?>
