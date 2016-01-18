<?php

	if (isset($_POST['email'])) {
		$email = $_POST['email'];

		$link = mysqli_connect('localhost','root','',"email_subs");
		$query = "INSERT INTO email_subs (email) VALUE ('$email')";
		mysqli_query($link, $query);

		header('Location: index.html');

	} else {
		echo 'success';
	}

?> 