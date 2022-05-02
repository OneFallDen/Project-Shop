<?php

    function getGoods($connection){
        $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id;";
        $result = pg_exec($connection, $query);

        $goodsList = [];

        for ($row = 0; $row < pg_numrows($result); $row++) {

            $goodsList[] = pg_fetch_assoc($result);

        }

        echo json_encode($goodsList);
    }

    function getSortGoods($connection,$brand,$type){
        $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id WHERE shop.brand = '".$brand."' AND goods.type = '".$type."';";
        $result = pg_exec($connection, $query);

        $goodsList = [];

        for ($row = 0; $row < pg_numrows($result); $row++) {

            $goodsList[] = pg_fetch_assoc($result);

        }

        echo json_encode($goodsList);
    }

    function getHalfSortGoods($connection,$type){
        switch ($type) {
          case 'Smartphone':
              $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id WHERE goods.type = 'Smartphone';";
              break;

          case 'Laptop':
              $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id WHERE goods.type = 'Laptop';";
              break;

          case 'Tablet':
              $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id WHERE goods.type = 'Tablet';";
              break;

          default:
              $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id WHERE shop.brand = '".$type."';";
              break;
        }

        $result = pg_exec($connection, $query);

        $goodsList = [];

        for ($row = 0; $row < pg_numrows($result); $row++) {

            $goodsList[] = pg_fetch_assoc($result);

        }

        echo json_encode($goodsList);
    }

    function getFav($connection,$username){

        $query = "SELECT favorite.user_id, favorite.goods_id, users.username, goods.name, shop.brand FROM favorite LEFT JOIN users ON favorite.user_id = users.id JOIN goods ON favorite.goods_id = goods.id JOIN shop ON shop.id = goods.shop_id WHERE users.username = '".$username."';";
        $result = pg_exec($connection, $query);

        $favsList = [];

        for ($row = 0; $row < pg_numrows($result); $row++) {

            $favsList[] = pg_fetch_assoc($result);

        }

        echo json_encode($favsList);
    }

    function getAdmin($connection,$username){
        $query = "SELECT username, admin FROM users WHERE username = '".$username."';";
        $result = pg_exec($connection, $query);

        $adminList = [];

        for ($row = 0; $row < pg_numrows($result); $row++) {

            $adminList[] = pg_fetch_assoc($result);

        }

        echo json_encode($adminList);
    }

    function getAuth($connection,$username){
        $query = "SELECT username, password FROM users WHERE username = '".$username."';";
        $result = pg_exec($connection, $query);

        $authList = [];

        for ($row = 0; $row < pg_numrows($result); $row++) {

            $authList[] = pg_fetch_assoc($result);

        }

        echo json_encode($authList);
    }

    function postReg($connection,$data){
        $username = $data['username'];
        $password = $data ['password'];
        $repassword = $data ['repassword'];

        if($password === $repassword){
            $query = "INSERT INTO users(username,password) VALUES('".$username."','".$password."')";
            $result = pg_exec($connection, $query);
            echo 'registration successful';
        } else {
          echo 'login or password uncorrect';
        }

    }

    function postGoods($connection,$data){
        $brand = $data['brand'];
        $price = $data['price'];
        $type = $data['type'];
        $description = $data['description'];
        $name = $data['name'];

        $query = "SELECT * FROM shop WHERE brand = '".$brand."';";
        $result = pg_exec($connection, $query);
        $shop_id = pg_fetch_result($result, 0, 'id');

        $query = "INSERT INTO goods(shop_id,price,type,description,name) VALUES(".$shop_id.",".$price.",'".$type."','".$description."','".$name."')";
        $result = pg_exec($connection, $query);

    }

    function postFav($connection,$data,$username){
        $goods_name = $data['name'];

        $query = "SELECT * FROM goods WHERE name = '".$goods_name."';";
        $result = pg_exec($connection, $query);
        $goods_id = pg_fetch_result($result, 0, 'id');

        $query = "SELECT * FROM users WHERE username = '".$username."';";
        $result = pg_exec($connection, $query);
        $user_id = pg_fetch_result($result, 0, 'id');

        $query = "SELECT * FROM favorite WHERE user_id = ".$user_id." AND goods_id =".$goods_id.";";
        $result = pg_exec($connection, $query);

        if(pg_numrows($result) < 1){
            $query = "INSERT INTO favorite VALUES(".$user_id.",".$goods_id.");";
            $result = pg_exec($connection, $query);
            echo "Added in fav";
        } else {
            echo "Already in fav";
        }

    }

  /*  function updateGoods($connection,$data){

  }*/

?>
