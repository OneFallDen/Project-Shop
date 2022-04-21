<?php
    session_start();
    $_SESSION['au'] = false;
    if($_SESSION['au'] == false){
        echo "Logout succesful";
    }
?>
<a href="auth.html">Auth </a>
<a href="reg.html">Reg</a>
