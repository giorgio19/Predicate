const {ipcRenderer} = require('electron')

const selectDirBtn = document.getElementById('select-directory')

selectDirBtn.addEventListener('click', (event) => {
    console.log('you clicked it');
  ipcRenderer.send('open-file-dialog')
})

ipcRenderer.on('selected-directory', (event, path) => {
  document.getElementById('selected-file').innerHTML = `You selected: ${path}`
})
