const { app, BrowserWindow, globalShortcut, shell } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

let mainWindow;

function createWindow() {
    // Load configuration from config.json
    const configPath = path.join(app.getAppPath(), 'config.json');
    let fullscreen = false; // Default value
    try {
        const configFile = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(configFile);
        if (config.Fullscreen === true || config.Fullscreen === "true") {
            fullscreen = true;
        }
    } catch (error) {
        console.error('Error reading config file:', error);
    }

    // Create the main window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 1500,
        fullscreen: fullscreen, // Set fullscreen based on config
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

    // Listen for keydown events to navigate to intro.html when "[" key is pressed
    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.key === '[') {
            mainWindow.loadFile('intro.html');
        }
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Unregister all global shortcuts when the app is about to quit
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
