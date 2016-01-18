<?php
	echo 'request made';
	if (isset($_POST['email'])) {

		$email = $_POST['email'];
		echo $email; 
		$link = mysqli_connect('localhost','root','',"email_subs");
		$query = "INSERT INTO email_subs (email) VALUE ('$email')";
		mysqli_query($link, $query);

		header('Location: index-thx.html');
		echo 'success';
	}


?> 