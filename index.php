<?php

    header('Access-Control-Allow-Headers:*');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Credentials: true');
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
                        if(isset($params[2])){
                            getAuth($connection,$params[1],$params[2]);
                        }
                    break;

                case 'admin':
                    if(isset($params[1]))
                        getAdmin($connection,$params[1]);
                    break;

                case 'getauth':
                    if(isset($params[1]))
                        getAuthById($connection,$params[1]);
                    break;

                case 'breakauth':
                    if(isset($params[1]))
                        breakAuthById($connection,$params[1]);
                    break;

                case 'type':
                        getTypes($connection);
                    break;

                case 'brand':
                        getBrands($connection);
                    break;

                }
            break;

        case 'POST':
            switch($params[0]){
                case 'favorite':
                    if(isset($params[1])){
                        if(isset($params[2])){
                            postFav($connection,$params[2],$params[1]);
                          }
                    }
                    break;

                case 'reg':
                    if(isset($params[1])){
                        if(isset($params[2])){
                            postReg($connection,$params[1],$params[2]);
                          }
                    }
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
