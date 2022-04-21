<?php
session_start();
$conn = pg_connect("host=localhost dbname=shop user=postgres password=admin");

if(!empty($_POST['name'])&&!empty($_POST['pass'])&&!empty($_POST['passr'])){
    if($_POST['pass'] == $_POST['passr']){
        $name = $_POST['name'];
        $pass = $_POST['pass'];
        echo $name;
        echo '<br/>';
        echo $pass;
        echo '<br/>';
        $query = "INSERT INTO users(username, password) VALUES('$name', '$pass');";
        $result = pg_query($conn, $query);
        $_SESSION['au'] = true;
        echo "Registration succesfull";
    }
}

pg_close($conn);
    
?>
<a href="auth.php">BACK</a>
