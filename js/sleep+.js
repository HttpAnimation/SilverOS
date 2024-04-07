        // Function to redirect to desktop.html with fade-out animation
        function redirectToDesktop() {
            document.body.classList.add('fade-out'); // Add fade-out class to trigger animation
            setTimeout(() => {
                window.location.href = "lockscreen.html"; // Redirect after animation completes
            }, 1000); // Wait for 1 second (same duration as the CSS transition)
        }
    
        // Event listeners for click, mousemove, and keydown
        document.addEventListener("click", redirectToDesktop);
        document.addEventListener("mousemove", redirectToDesktop);
        document.addEventListener("keydown", redirectToDesktop);
