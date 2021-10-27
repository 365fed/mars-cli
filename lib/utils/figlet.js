/**
 * 终端打印炫酷文字
 */
const figlet = require('figlet');
const chalk = require('chalk');
const fig = () => {
    figlet('Mars  Cli', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.blue(data))
    }); 
}
module.exports = fig