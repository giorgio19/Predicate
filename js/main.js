// JavaScript Document
'use strict';

const electron = require('electron');
const {remote,ipcRenderer} = require('electron');
const {app,BrowserWindow} = require('electron');


let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	app.quit();
});

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
		title: 'Formal Methods Editor',
	});
	//load the index.html
	mainWindow.loadFile('index.html');

	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})

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
