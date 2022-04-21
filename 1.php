<?php

$conn = pg_connect("host=localhost dbname=shop user=postgres password=admin");
$query = "SELECT username, password FROM users;";
$result = pg_exec($conn, $query);

for ($row = 0; $row < pg_numrows($result); $row++) {

    $firstname = pg_fetch_result($result, $row, 'username');

    echo $firstname ." ";

    $lastname = pg_fetch_result($result, $row, 'password');

    echo $lastname ."<br>";

}

pg_close($conn);

?>
