// Get the input elements for fullname and username
const fullnameInput = document.getElementById('fullname');
const usernameInput = document.getElementById('username');

// Add an event listener to the username input that checks if its value matches the fullname input
usernameInput.addEventListener('blur', () => {
  if (usernameInput.value === fullnameInput.value) {
    alert('The fullname and username cannot be the same.');
    usernameInput.value = '';
  }
});


// Get the input element for email
const emailInput = document.getElementById('email');

// Add an event listener to the email input that checks if its value contains a valid email address
emailInput.addEventListener('blur', () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.value = '';
  }
});



// Get the input elements for password and password2
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');

// Function to show a popup
function showAlert(message) {
  alert(message);
}

// Add an event listener to the password2 input that checks if its value matches the password input
password2Input.addEventListener('blur', () => {
  if (passwordInput.value !== password2Input.value) {
    showAlert('Passwords do not match.');
    password2Input.classList.add('invalid-input');
  } else {
    password2Input.classList.remove('invalid-input');
  }
});

// Add an event listener to the password input that removes the 'invalid-input' class from the password2 input when the user changes the value
passwordInput.addEventListener('input', () => {
  password2Input.classList.remove('invalid-input');
});
function checkPasswords() {
  if (passwordInput.value !== password2Input.value) {
    password2Input.setCustomValidity('Password does not match');
    password2Input.style.color = 'red';
  } else {
    password2Input.setCustomValidity('');
    password2Input.style.color = '';
  }
}

// Add an event listener to the password2 input that checks if its value matches the password input
password2Input.addEventListener('input', checkPasswords);

// Add an event listener to the password input that checks if its value matches the password2 input
passwordInput.addEventListener('input', checkPasswords);



//new section


// Get the Register button element
const registerBtn = document.getElementById('registerBtn');

// Function to show a popup
function showAlert(message) {
  alert(message);
}

// Function to check if all required fields are filled in
function checkForm() {
  if (fullnameInput.value === '' || usernameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || password2Input.value === '') {
    showAlert('Something went wrong. Please check if you entered everything correctly and try again.');
    return false;
  } else {
    return true;
  }
}

// Add an event listener to the Register button that checks if all required fields are filled in
registerBtn.addEventListener('click', () => {
  if (!checkForm()) {
    event.preventDefault();
  }
});
function goBack() {
  window.history.back();
}