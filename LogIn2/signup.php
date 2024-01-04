
<?php
// Database connection variables (modify these with your actual values)
$host = 'localhost';
$db_name = 'AccountDB';
$username = 'your_username';
$password = 'your_password';

// Create a connection
$conn = new mysqli($host, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$fullname = $_POST['fullname'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$repeat_password = $_POST['repeat_password'];

// Basic validations (you might want to add more)
if (empty($fullname) || empty($username) || empty($email) || empty($password) || empty($repeat_password)) {
    die("All fields are required.");
}

if ($password !== $repeat_password) {
    die("Passwords do not match.");
}

// Check if username or email already exists
$sql_check = "SELECT * FROM users WHERE username='$username' OR email='$email'";
$result = $conn->query($sql_check);

if ($result->num_rows > 0) {
    die("Username or Email already exists.");
}

// Hash the password securely
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert the user into the database
$sql_insert = "INSERT INTO users (fullname, username, email, password) VALUES ('$fullname', '$username', '$email', '$hashed_password')";

if ($conn->query($sql_insert) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql_insert . "<br>" . $conn->error;
}

$conn->close();
?>
