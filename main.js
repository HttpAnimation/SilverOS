function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 1500,
        fullscreen: true, // Add this line to enable full-screen mode
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('start.html');

    // Register global shortcut for reloading the page
    globalShortcut.register('CommandOrControl+R', () => {
        mainWindow.reload();
    });

    // Open external links in default browser
    mainWindow.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });

    // Listen for keydown events to navigate to index.html when "]" key is pressed
    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.key === ']') {
            mainWindow.loadFile('index.html');
        }
    });

    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.key === '[') {
            mainWindow.loadFile('intro.html');
        }
    });
}
