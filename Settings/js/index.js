        // Get references to the buttons and the iframe
        const accountButton = document.getElementById('accountButton');
        const aboutButton = document.getElementById('aboutButton');
        const bluetoothButton = document.getElementById('bluetoothButton');
        const wifiButton = document.getElementById('wifiButton');
        const mainFrame = document.getElementById('mainFrame');

        // Add click event listeners to the buttons
        accountButton.addEventListener('click', function() {
            // Set the src attribute of the iframe to account.html
            mainFrame.src = 'account.html';
        });

        aboutButton.addEventListener('click', function() {
            // Close the iframe if already displaying content
            if (mainFrame.src !== '') {
                mainFrame.src = '';
            }
            // Set the src attribute of the iframe to about.html
            mainFrame.src = 'about.html';
        });

        bluetoothButton.addEventListener('click', function() {
            // Close the iframe if already displaying content
            if (mainFrame.src !== '') {
                mainFrame.src = '';
            }
            // Set the src attribute of the iframe to bluetooth.html
            mainFrame.src = 'bluetooth.html';
        });

        wifiButton.addEventListener('click', function() {
            // Close the iframe if already displaying content
            if (mainFrame.src !== '') {
                mainFrame.src = '';
            }
            // Set the src attribute of the iframe to wifi.html
            mainFrame.src = 'wifi.html';
        });