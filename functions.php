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

?>
