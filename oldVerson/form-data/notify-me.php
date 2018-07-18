<?php
$STORE_MODE = "file";
$API_KEY =  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$LIST_ID =  "XXXXXXXXXX";
$STORE_FILE = "subscription.txt";

if($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["email"])) {

	$email = $_POST["email"];
		// The part for the storage in a .txt
		if ($STORE_MODE == "file") {
			
			// SUCCESS SENDING
			if(@file_put_contents($STORE_FILE, strtolower($email)."\r\n", FILE_APPEND)) {
				//echo json_encode(array("status" => "success"));
			// ERROR SENDING
			} else {
				//echo json_encode(array("status" => "error", "type" => "FileAccessError"));
			}
			
			/*
			echo '<script language="javascript" type="text/javascript">
					alert("Thanks for signing up.");
					window.location.href="../index.html";	
		    	</script>';
		    */
			echo json_encode(array(
				"status" => "success"
			));
	// ERROR DURING THE VALIDATION 
	} else {
		echo json_encode(array(
				"status" => "error",
				"type" => "ValidationError"
			));
	}
}
?>