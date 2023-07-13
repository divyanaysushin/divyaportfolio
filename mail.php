
<?php

  $name = $_POST['name'];
  $phone = $_POST['email'];
  $email = $_POST['sub'];
  $message = $_POST['message'];
  
  $formcontent ="name: $name  \n \n phone:$phone \n\n  email:$email \n \n message:$message ";
  $recipient ="divya4sushin@gmail.com";
  $subject  ="enquiry from website";
  $mailheader ="from: $name \r\n";
  mail($recipient, $subject,  $formcontent,  $mailheader  ) or die("error!");
  echo "";



?>
