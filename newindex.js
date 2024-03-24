// Get the elements
const dockItemSettings = document.getElementById('dockItemSettings');
const contentContainer = document.getElementById('popupContent');

// Function to load settings.html content
function loadSettingsPage() {
    fetch('settings.html') // Load settings.html
        .then(response => response.text())
        .then(data => {
            // Set the content of the content container to the content of settings.html
            contentContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading settings:', error));
}

// Add click event listener
dockItemSettings.addEventListener('click', loadSettingsPage);
