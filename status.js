const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  win.loadFile('index.html')

  // Handle navigation link clicks
  win.webContents.on('did-click-link', (event, url) => {
    if (url !== win.webContents.getURL()) {
      // Only load external links
      event.preventDefault()
      win.loadFile(url)
    }
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
