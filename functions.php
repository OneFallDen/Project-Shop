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

?>
