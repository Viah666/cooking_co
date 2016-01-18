<?php

	if (isset($_POST['title']) && isset($_POST['price'])) {
		$title = $_POST['title'];
		$price = $_POST['price'];

		$link = mysqli_connect('localhost','root','',"books");
		$query = "INSERT INTO book(title, price) VALUE ('$title', $price)";
		mysqli_query($link, $query);

		header('Location: /books');

	} else {
		echo 'Bad request.';
	}
	
	// $link = mysqli_connect('localhost','root','',"books");
	
	// $query = "INSERT INTO book(title, price) VALUE ('English 12', 20)";

	// mysqli_query($link, $query);



?>