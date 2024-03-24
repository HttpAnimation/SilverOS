// Get the elements
const dockItemSettings = document.getElementById('dockItemSettings');
const popupContainer = document.getElementById('popupContainer');

// Add click event listener
dockItemSettings.addEventListener('click', function() {
    // Show the popup
    popupContainer.style.display = 'block';
});

// Close popup when clicking outside of it
popupContainer.addEventListener('click', function(event) {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});
