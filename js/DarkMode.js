// Read the DarkMode value from config.json
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const darkMode = config.DarkMode;

        // Function to toggle dark mode
        function toggleDarkMode(isDarkMode) {
            const body = document.body;
            if (isDarkMode) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        }

        // Apply initial dark mode setting
        toggleDarkMode(darkMode);

        // You can add an event listener or any other mechanism to change dark mode dynamically if needed
    })
    .catch(error => {
        console.error('Error reading config.json:', error);
    });
