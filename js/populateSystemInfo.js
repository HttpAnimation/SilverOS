// populateSystemInfo.js

// Function to read systemInfo.conf and populate the display size info
function populateSystemInfo() {
    fetch('systemInfo.conf')
        .then(response => response.text())
        .then(data => {
            const info = data.split('\n')
                .map(line => line.split('='))
                .reduce((acc, [key, value]) => {
                    acc[key.trim()] = value.trim();
                    return acc;
                }, {});

            const displaySizeInfo = document.getElementById('display-size-info');
            displaySizeInfo.innerHTML = `Version: ${info.versionHeader}<br>Code Name: ${info.codeName}`;
        })
        .catch(error => console.error('Error fetching system info:', error));
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', populateSystemInfo);
