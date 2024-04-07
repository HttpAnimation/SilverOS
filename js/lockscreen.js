const passwordInput = document.getElementById('passwordInput');
const signInButton = document.getElementById('signInButton');
const errorMessage = document.getElementById('errorMessage');

signInButton.addEventListener('click', function() {
    const enteredPassword = passwordInput.value.trim();

    // Read the config file
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            const loginPassword = config[0].LoginPassword;

            // Compare passwords
            if (enteredPassword === loginPassword) {
                // Fade out animation
                document.body.style.animation = 'fadeOut 2s ease-in-out forwards';
                // Successful login after animation
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000); // Change this value to match the duration of your animation
            } else {
                // Incorrect password
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error reading config file:', error);
            // Handle error, such as showing a generic error message
        });
});

// Optional: Allow pressing Enter key to submit form
passwordInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        signInButton.click();
    }
});
