<?php

    function getGoods($connection){
        $query = "SELECT goods.id, goods.price, goods.type, goods.description, goods.name, goods.img, shop.brand FROM goods LEFT JOIN shop ON goods.shop_id = shop.id;";
        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

        }

        echo json_encode($goodsList);
    }

    function getSortGoods($connection,$brand,$type){
        $query = "SELECT * FROM goods LEFT JOIN shop ON goods.shop_id = shop.id WHERE shop.brand = '".$brand."' AND goods.type = '".$type."';";
        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

        }

        echo json_encode($goodsList);
    }

    function getBrands($connection){
        $query = "SELECT * FROM shop;";
        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

        }

        echo json_encode($goodsList);
    }

    function getTypes($connection){
        $query = "SELECT DISTINCT type FROM goods;";
        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

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

        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

        }

        echo json_encode($goodsList);
    }

    function getFav($connection,$session_id){

        #$query = "SELECT favorite.user_id, favorite.goods_id, users.username, goods.name, shop.brand FROM favorite LEFT JOIN users ON favorite.user_id = users.id JOIN goods ON favorite.goods_id = goods.id JOIN shop ON shop.id = goods.shop_id WHERE users.username = '".$username."';";
        $query = "SELECT * FROM session WHERE id = ".$session_id.";";
        $result = $connection->query($query);
        $username = $result->fetch_row();

        $query = "SELECT favorite.user_id, favorite.goods_id, users.username, goods.name, shop.brand, goods.img FROM favorite LEFT JOIN users ON favorite.user_id = users.id JOIN goods ON favorite.goods_id = goods.id JOIN shop ON shop.id = goods.shop_id WHERE users.username = '".$username[2]."';";
        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

        }

        echo json_encode($goodsList);
    }

    function getAdmin($connection,$username){
        $query = "SELECT username, admin FROM users WHERE username = '".$username."';";
        $result = $connection->query($query);

        $goodsList = [];

        for ($row = 0; $row < $result->num_rows; $row++) {

            $goodsList[] = $result->fetch_assoc();

        }

        echo json_encode($goodsList);
    }

    function getAuth($connection,$username,$password){
        $query = "SELECT * FROM users WHERE username = '".$username."' AND password = '".$password."';";
        $result = $connection->query($query);

        $goodsList = [];
        if(($result->num_rows) > 0){
            $query = "INSERT INTO session(session, user) VALUES(1,'".$username."');";
            $result = $connection->query($query);
            $query = "SELECT id FROM session WHERE user = '".$username."' AND session = 1;";
            $result = $connection->query($query);

            $goodsList = [];

            for ($row = 0; $row < $result->num_rows; $row++) {

                $goodsList[] = $result->fetch_assoc();

            }

            echo json_encode($goodsList);
        }else{
            echo 'login or password are incorrect';
        }
    }

    function getAuthById($connection,$id){
        $query = "SELECT * FROM session WHERE id = ".$id." AND session = 1;";
        $result = $connection->query($query);
        if(($result->num_rows)>0){
            echo 'Already auth';
        }else{
            echo 'Token invalid';
        }
    }

    function breakAuthById($connection,$id){
        $query = "UPDATE session SET session = 0 WHERE id = ".$id.";";
        $result = $connection->query($query);
        echo 'Logout successful';
    }

    function postReg($connection,$username,$password){

        $query = "INSERT INTO users(username,password) VALUES('".$username."','".$password."')";
        $result = $connection->query($query);
        echo 'registration successful';

    }

    function postGoods($connection,$data){
        $brand = $data['brand'];
        $price = $data['price'];
        $type = $data['type'];
        $description = $data['description'];
        $name = $data['name'];
        $img = $data['img'];

        $query = "SELECT id FROM shop WHERE brand = '".$brand."';";
        $result = $connection->query($query);
        $shop_id = $result->fetch_row();

        $query = "INSERT INTO goods(shop_id,price,type,description,name,img) VALUES(".$shop_id[0].",".$price.",'".$type."','".$description."','".$name."','".$img."')";
        $result = $connection->query($query);

    }

    function postFav($connection,$goods_id,$session_id){
        #$goods_name = $data['name'];

        $query = "SELECT * FROM session WHERE id = ".$session_id.";";
        $result = $connection->query($query);
        $username = $result->fetch_row();

        #$query = "SELECT * FROM goods WHERE name = '".$goods_name."';";
        #$result = $connection->query($query);
        #$goods_id = $result->fetch_result(0, 'id');

        $query = "SELECT id FROM users WHERE username = '".$username[2]."';";
        $result = $connection->query($query);
        $user_id = $result->fetch_row();

        $query = "SELECT * FROM favorite WHERE user_id = ".$user_id[0]." AND goods_id =".$goods_id.";";
        $result = $connection->query($query);

        if($result->num_rows < 1){
            $query = "INSERT INTO favorite VALUES(".$user_id[0].",".$goods_id.");";
            $result = $connection->query($query);
            echo "Added in fav";
        } else {
            echo "Already in fav";
        }

    }

    function updateGoods($connection,$data){
      $brand = $data['brand'];
      $price = $data['price'];
      $type = $data['type'];
      $description = $data['description'];
      $name = $data['name'];

      $query = "SELECT id FROM shop WHERE brand = '".$brand."';";
      $result = $connection->query($query);
      $shop_id = $result->fetch_row();

      echo $brand;

      $query = "UPDATE goods SET shop_id = ".$shop_id[0].",price = ".$price.",type = '".$type."',description = '".$description."', name = '".$name."' WHERE name = '".$name."';";
      $result = $connection->query($query);
    }

?>
