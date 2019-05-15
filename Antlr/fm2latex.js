const SlickCompiler = require('./SlickCompiler').SlickCompiler;
const fs = require('fs');
const filename = process.argv[2];
if (filename) {
  let compiler = new SlickCompiler();
  let code = fs.readFileSync(filename).toString();
  let results = compiler.compile(code);
  process.stdout.write(results);
} else {
  console.log("Missing filename");
}
