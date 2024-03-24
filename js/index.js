// Scraped 

const dockItem = document.getElementById('dockItem');
const settingsFrame = document.getElementById('settingsFrame');

dockItem.addEventListener('click', function() {
    // Show the iframe
    settingsFrame.style.display = 'block';

    // Load settings.html into the iframe
    settingsFrame.src = 'settings.html';
});
