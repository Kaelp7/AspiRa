// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');

// Start Express server
exec('node server.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error starting server: ${error}`);
        return;
    }
    console.log(`Server output: ${stdout}`);
    if (stderr) {
        console.error(`Server error output: ${stderr}`);
    }
});

const createWindow = () => {
    const win = new BrowserWindow({
        title: 'Pengaduan Masyarakat',
        width: 500,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('login.html');
}

app.whenReady().then(() => {
    createWindow();
});
