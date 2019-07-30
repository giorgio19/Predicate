const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const ipc = electron.ipcRenderer
const open = false;

function myFunction(x) {
  x.classList.toggle("change");
  if (!open){
    const modalPath = path.join('file://',__dirname, 'theorem.html')
    let win = new BrowserWindow({
        frame: false,
        width: 600,
        height: 800,
        alwaysOnTop: true,
        webPreferences:{nodeIntegration:true}
    })
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
  } else {
    console.log('not opened')
  }
}
