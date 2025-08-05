<?php
    require_once "Email.php";


    $from = $_POST['email'];
    $to = 'loris.bord23@gmail.com';
    $subject = $_POST['subject'];
    $body = $_POST['message'];

    $email = new Email($to, $from, $subject, $body);

    echo json_encode($email->jsonSerialize());



?>
