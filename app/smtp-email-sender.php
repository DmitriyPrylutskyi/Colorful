<?php
require_once 'libs/smtp-email-sender/swift_required.php';

// Create the Transport
$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
->setUsername('iqstream2017@gmail.com')
->setPassword('iqstream1')
;

/*
You could alternatively use a different transport such as Sendmail or Mail:

// Sendmail
$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');

// Mail
$transport = Swift_MailTransport::newInstance();
*/

// Create the Mailer using your created Transport
$mailer = Swift_Mailer::newInstance($transport);

// Or set it after like this

$userName = array_key_exists('name', $_POST)?$_POST['name']:'';
$userEmail = array_key_exists('mail', $_POST)?$_POST['mail']:'';
$userPhone = array_key_exists('phone', $_POST)?$_POST['phone']:'';

// Create a message
$message = Swift_Message::newInstance('Event')
->setFrom(array('iqstream2017@gmail.com' => 'COLORFUL'))
->setTo(array('dprily@gmail.com'));

$subject = $message->getHeaders()->get('Subject');
$subject->setValue('NEW CUSTOMER FROM COLORFUL!');

$content .= "<h5 style='font-size:14px;margin-bottom:0'> Name : </h5><p style='margin-top:5px'> {$userName} </p>";
$content .= "<h5 style='font-size:14px;margin-bottom:0'> Email: </h5><p style='margin-top:5px'> {$userEmail} </p>";
$content .= "<h5 style='font-size:14px;margin-bottom:0'> Phone: </h5><p style='margin-top:5px'> {$userPhone} </p>";

$message->setBody($content, 'text/html');

// Add alternative parts with addPart()
$message->addPart($content, 'text/plain');

// Send the message
$result = $mailer->send($message);

?>