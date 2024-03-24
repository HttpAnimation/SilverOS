// Get the elements
const dockItemSettings = document.getElementById('dockItemSettings');

// Function to open settings.html
function openSettingsPage() {
    window.location.href = 'settings.html'; // Redirect to settings.html
}

// Add click event listener
dockItemSettings.addEventListener('click', openSettingsPage);
