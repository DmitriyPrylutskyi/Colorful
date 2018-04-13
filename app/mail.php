<?
$admine_mail="dprily@gmail.com";
$date=date("d.m.y");
$time=date("H:i");

$headers = "From: Colorful";
 
$name=htmlspecialchars($_POST["name"]);
$email=htmlspecialchars($_POST["mail"]);
$phone=htmlspecialchars($_POST["phone"]);

$msg=" 
Name: $name 
E-mail: $email
Phone number: $phone
";

mail($admine_mail, "$date $time Reply", $msg, $headers);

exit;
?>