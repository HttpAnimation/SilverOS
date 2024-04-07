if (window.require) {
    console.log('Renderer: Node integration is enabled.');
    const { ipcRenderer } = require('electron');

    const shutdownLink = document.getElementById('shutdown');
    if (!shutdownLink) {
        console.error('Shutdown link not found!');
    } else {
        console.log('Shutdown link found. Adding event listener.');
        shutdownLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior
            console.log('Sending shutdown-app message to main process.');
            ipcRenderer.send('shutdown-app'); // Send an IPC message to the main process
        });
    }
} else {
    console.error('Renderer: Node integration is disabled.');
}
