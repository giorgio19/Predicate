// JavaScript Document
'use strict';

const {electron, remote,ipcRenderer, app, BrowserWindow, Tray} = require('electron');
var path = require('path');


let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	app.quit();
});

// const appIcon = new Tray('/Users/somebody/images/icon.png')
// let win = new BrowserWindow({ icon: '/Users/somebody/images/window.png' })
//
// const appIcon = new Tray('./css/predicate2.png')
// let win = new BrowserWindow({ icon: '/Users/somebody/images/window.png' })

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function () {
	mainWindow = new BrowserWindow({
		show: false,
		'width': 1200,
		'height': 800,
		'minWidth': 800,
		'minHeight': 600,
		titleBarStyle: '',
		title: 'Predicate',
		icon: path.join(__dirname, 'AppIcon.icns'),
		webPreferences:{
			nodeIntegration: true
	}
});
	//load the index.html
	mainWindow.loadFile("index.html");
	mainWindow.webContents.openDevTools();
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	//emit when the window is closed
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

});


app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});
