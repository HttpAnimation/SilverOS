const { app, BrowserWindow, globalShortcut, shell } = require('electron');
const express = require('express');
const fetch = require('node-fetch');

const appExpress = express();
const PORT = 3000;

let mainWindow;

// Proxy server setup
appExpress.use('/', async (req, res) => {
    try {
        const url = 'https://vscode.dev' + req.originalUrl;
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('text/html')) {
            const html = await response.text();
            res.send(html);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

appExpress.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 1500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load URL from proxy server
    mainWindow.loadURL('http://localhost:3000/');

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
