<?php
$name       = @trim(stripslashes($_POST['name'])); 
$from       = @trim(stripslashes($_POST['email'])); 
$subject    = @trim(stripslashes($_POST['subject'])); 
$message    = @trim(stripslashes($_POST['message'])); 
$to   			= 'tokyomarketing@servcorp.co.jp';
$datetime  = date("Y-m-d H:i:s T e");

$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=\"utf-8\"";
$headers[] = "From: {$name} <{$from}>";
$headers[] = "Reply-To: <{$from}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();

$emessage = "<font face=Verdana>\n\r" .
"<table width='500' cellpadding=1>\n\r" .
"<tr><td width='100' bgcolor='#071F3D'><B><font color='#FFFFFF' style='font-size: 9pt;'> &nbsp; </font></b></td><td width='400' bgcolor='#071F3D'><font color='#FFFFFF' style='font-size: 9pt;'><B>Enquiry</b></font></td></tr>\n\r" .
"<tr><td width='100'><B><font style='font-size: 9pt;'>Name:</font></b></td><td width='400'><font style='font-size: 9pt;'>" . $name . "</font></td></tr>\n\r" .
"<tr><td width='100'><B><font style='font-size: 9pt;'>Email Address:</font></b></td><td width='400'><font style='font-size: 9pt;'><a href='mailto:" . $from . "' style='color: #0095D3; text-decoration: none;'>" . $email . "</a></font></td></tr>\n\r" .
"<tr><td width='100'><B><font style='font-size: 9pt;'>Subject:</font></b></td><td width='400'><font style='font-size: 9pt;'>" . $subject . "</font></td></tr>\n\r" .
"<tr><td width='100'><B><font style='font-size: 9pt;'>Comments:</font></b></td><td width='400'><font style='font-size: 9pt;'>" . $message . "</font></td></tr>\n\r" .
"<tr><td width='100'><B><font style='font-size: 9pt;'>Date time:</font></b></td><td width='400'><font style='font-size: 9pt;'>" . $datetime . "</font></td></tr>\n\r" .
"</table>\n\r";

mail($to, $subject, $emessage, implode("\r\n", $headers));

die;