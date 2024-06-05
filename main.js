const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow ({
        title: 'Pengaduan Masyarakat',
        width: 500,
        height: 600
    });

    win.loadFile('login.html');
}

app.whenReady().then(() => {
    createWindow();
});
