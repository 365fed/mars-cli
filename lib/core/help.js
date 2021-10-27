const program = require('commander');

const helpOptions = () => {
  program.option('-w --oc', 'a oc option');

  program.option('-s --src <src>', 'a source folder');
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/pages, 错误/src/pages');

  program.on('--help', function() {
    console.log("");
    console.log("usage");
    console.log(" oc -V");
    console.log(" oc -version");
  })
}

module.exports = helpOptions;
