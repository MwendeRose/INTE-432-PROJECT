document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example validation
    if (email === 'uniquedesign@gmail.com' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password');
    }
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const terms = document.getElementById('terms').checked;

    if (!terms) {
        alert('You must agree to the terms of use.');
        return;
    }

    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return;
    }
    // Example validation for signup
    alert(`Sign up successful!\nName: ${fullName}\nEmail: ${email}\nUsername: ${username}`);
});
//main page 
//logout
document.getElementById('orderButton').addEventListener('click', function() {
    document.getElementById('thankYouAlert').style.display = 'flex'; // Show the alert
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('thankYouAlert').style.display = 'none'; // Hide the alert
});
s