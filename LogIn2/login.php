
<?php
// Database connection variables (based on the provided information)
$host = '192.168.0.15';
$db_name = 'AccountDB';
$username = 'your_username';  // Please replace with your actual username
$password = 'your_password';  // Please replace with your actual password

// Create a connection
$conn = new mysqli($host, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$username = $_POST['username'];
$password = $_POST['password'];

// Basic validations
if (empty($username) || empty($password)) {
    die("Username and Password are required.");
}

// Check if username exists and fetch the hashed password
$sql_check = "SELECT password FROM users WHERE username='$username'";
$result = $conn->query($sql_check);

if ($result->num_rows === 0) {
    die("Username does not exist.");
}

// Fetch the hashed password from the result
$row = $result->fetch_assoc();
$hashed_password = $row['password'];

// Verify the submitted password with the hashed password
if (password_verify($password, $hashed_password)) {
    echo "Login successful!";
} else {
    echo "Incorrect password.";
}

$conn->close();
?>
