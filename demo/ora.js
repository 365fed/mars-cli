/**
 * loading效果
*/
const ora = require('ora');
const spinner = ora('Loading').start()
setTimeout(()=> {
  spinner.color = "yellow"
  spinner.text = "mars-cli loading"
  setTimeout(()=> {
    spinner.stop()
  }, 2000)
  // spinner.stop()
},1000)