// Ensure this code runs in an environment where Electron's APIs are available
if (window.require) {
    const { ipcRenderer } = require('electron');

    const shutdownLink = document.getElementById('shutdown');
    shutdownLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        ipcRenderer.send('shutdown-app'); // Send an IPC message to the main process
    });
}
