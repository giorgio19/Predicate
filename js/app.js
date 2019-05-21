// JavaScript Document

//allows for resize of editor and theorems
 $(".panel-left").resizable({
   handleSelector: ".splitter",
   resizeHeight: false
 });

 function print() {
   var text = editor.getText();
   var compiler = new SlickCompiler();
   const input = compiler.compile(text);
   dialog.showSaveDialog({filters: [{name: 'pdf', extensions: ['pdf']},
   ]}, function(filename){
     const output = fs.createWriteStream(filename);
     const pdf = latex(input).pipe(output);
     pdf.on('error', err => console.error(err));
   });
   console.log(text);
   console.log(input);
 }

 function saveFile() {
     if(!loadedfs) {
         dialog.showSaveDialog({ filters: [
 						{ name: 'txt', extensions: ['txt'] }
         ]}, function(filename) {
             if(filename === undefined) return;
             writeToFile(editor, filename);
         });
     }
     else {
         writeToFile(editor, loadedfs);
     }
 }

 function loadFile() {
     dialog.showOpenDialog({ filters: [
         { name: 'txt', extensions: ['txt'] },
     ]}, function(filenames) {
         if(filenames === undefined) return;
         var filename = filenames[0];
         readFromFile(editor, filename);
         loadedfs = filename;
     })
 }

 function writeToFile(editor, filename) {
     var html = editor.getText();
     fs.writeFile(filename, html, function(err) {
         if(err) {
             return console.log(err);
         }
     });
 }

 function readFromFile(editor, filename) {
     fs.readFile(filename, "utf-8", function(err, data) {
         if(err) {
             console.log(err);
         }
         editor.setText(data);
     });
 }
