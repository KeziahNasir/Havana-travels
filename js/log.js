// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // // Example validation: Check if username and password are not empty
//     // if (username.trim() === '' || password.trim() === '') {
//     //     document.getElementById('error-message').textContent = 'Username and password are required.';
//     // } else {
//     //     // Here you can perform further validation or submit the form
//     //     // For simplicity, let's just alert the entered username and password
//     //     alert('Username: ' + username + '\nPassword: ' + password);
    // }
    const logButton = document.querySelector(".submit");

    logButton.addEventListener("click", function () {
      window.location.href=`${window.location.origin}/Havana-travels/services.html`;
    });
// });