const dockImg = document.getElementById('dockImg');
const appOverlay = document.getElementById('appOverlay');

dockImg.addEventListener('click', function() {
    appOverlay.style.opacity = '1'; // Show the overlay
    setTimeout(function() {
        appOverlay.style.opacity = '0'; // Hide the overlay after a short delay
    }, 500); // Adjust this delay according to your preference
});
