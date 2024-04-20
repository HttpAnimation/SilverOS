const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

function createWindowForApp(appPath) {
  const { name, photo, file } = require(path.join(appPath, 'package.json'));
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(file);
  win.setTitle(name);
  win.setIcon(photo);
}

function createWindowsForApps() {
  const appsDir = path.join(__dirname, 'apps');
  fs.readdir(appsDir, (err, files) => {
    if (err) {
      console.error('Error reading apps directory:', err);
      return;
    }

    files.forEach(file => {
      const appPath = path.join(appsDir, file);
      fs.stat(appPath, (err, stats) => {
        if (err) {
          console.error('Error reading file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          const packageJsonPath = path.join(appPath, 'package.json');
          fs.access(packageJsonPath, fs.constants.F_OK, (err) => {
            if (!err) {
              createWindowForApp(appPath);
            }
          });
        }
      });
    });
  });
}

app.whenReady().then(createWindowsForApps);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindowsForApps();
  }
});
