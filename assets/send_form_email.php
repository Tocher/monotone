<?php
if(isset($_POST['contact'])) {
    $email_to = "info@monotone.by";
    $email_subject = "Заказ c сайта";
    
    $email_message .= "Имя: ".$_POST['contact']."\n";
    $email_message .= "Компания: ".$_POST['company']."\n";
    $email_message .= "Телефон: ".$_POST['phone']."\n";
    $email_message .= "Почта: ".$_POST['email']."\n";
    $email_message .= "Бюджет: ".$_POST['budget']."\n";
    $email_message .= "Вложения: ".$_POST['attachment']."\n";
    $email_message .= "Разработка сайта: ".$_POST['services0']."\n";
    $email_message .= "Фирменный стиль: ".$_POST['services1']."\n";
    $email_message .= "Логотип: ".$_POST['services2']."\n";
    $email_message .= "Дизайн полиграфии: ".$_POST['services3']."\n";
    $email_message .= "Outdoor: ".$_POST['services4']."\n";
    $email_message .= "Продакшн: ".$_POST['services5']."\n";
    $email_message .= "Пожелания: ".$_POST['desires']."\n";
    

    $name_of_uploaded_file = basename($_FILES['uploaded_file']['name']);
    $email_message .= "Имя файла".$name_of_uploaded_file."\n";

    $headers = 'From: monotone'."\r\n".
		"Reply-To: monotone <info@monotone.by>"."\r\n".
		'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);
}
?>