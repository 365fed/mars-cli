/**
 * 终端打印插件
 */
const figlet = require('figlet');
const fig = () => {
    figlet('Mars  Cli', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    }); 
}
module.exports = fig