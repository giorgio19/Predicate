const { app, BrowserWindow } = require('electron')
const path = require('path')
const {ipcMain} = require('electron')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null
let theoremWin = null
let open = false;

const windowsOpt =
{
    width: 1215,
    height: 860,
    maximizable: false,
    title: 'Predicate',
    webPreferences: {
        nodeIntegration: true
    }
}

const macOpt = {
    width: 1200,
    height: 800,
    maximizable: false,
    frame: false,
    webPreferences: {
        nodeIntegration: true
    }
}

const theoremWinOpt = {
    width: 600,
    height: 800,
    maximizable: false,
    show: false,
    webPreferences: {
        nodeIntegration: true
    }
};
const theoremMacOpt = {
    width: 600,
    height: 800,
    maximizable: false,
    show: false,
    frame: false,
    webPreferences: {
        nodeIntegration: true
    }
};

function createWindow () {
  // Create the browser window.
    if (process.platform === "win32") {
      win = new BrowserWindow(windowsOpt);
      theoremWin = new BrowserWindow(theoremWinOpt);
    } else {
      win = new BrowserWindow(macOpt);
      theoremWin = new BrowserWindow(theoremMacOpt);
    }

  win.loadFile('./src/index.html')

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
    })

  theoremWin.loadFile('./src/theorem.html')
  theoremWin.on('closed', () =>
  {
      theoremWin = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('resize', function () {
    theoremWin.show();
    process.platform === "win32" ? win.setSize(775, 675) : win.setSize(775,614);
    open = !open;
})

ipcMain.on('popIn', function(event, arg) {
  theoremWin.hide();
  process.platform === "win32" ? win.setSize(1215,860) : win.setSize(1200,800);
  win.webContents.send('popIn');
  open = !open;
})
