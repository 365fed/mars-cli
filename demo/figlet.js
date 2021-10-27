const figlet = require('figlet');
const chalk = require('chalk');
figlet('Mars  Cli', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data))
}); 