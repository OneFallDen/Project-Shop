<?php
    session_start();
    if($_SESSION['au'] == true){
        echo 'Authorized';
        echo '<br/>';
        echo '<a href="logout.php">Logout</a>';
    }else {
        $conn = pg_connect("host=localhost dbname=shop user=postgres password=admin");
        $name = $_POST['name'];
        $query = "SELECT username, password FROM users WHERE username = '$name';";
        $result = pg_exec($conn, $query);
        for ($row = 0; $row < pg_numrows($result); $row++) {

            $username = pg_fetch_result($result, $row, 'username');
            $password = pg_fetch_result($result, $row, 'password');

        }
        if(!empty($_POST['name'])&&!empty($_POST['pass'])){
            if($_POST['pass'] == $password){
                $_SESSION['au'] = true;
                echo "Auth succesfull";
            }
            else {
                echo "login or password uncorrect";
            }
        }
    }
?>
