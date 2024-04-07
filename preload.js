const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    shutdown: () => ipcRenderer.send('shutdown-app')
});
