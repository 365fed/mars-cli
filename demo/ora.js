const ora = require('ora');
const spinner = ora('Loading unicorns').start()
setTimeout(()=> {
  spinner.color = "yellow"
  spinner.text = "mars-cli loading"
  setTimeout(()=> {
    spinner.stop()
  },2000)
},2000)
console.log(123)