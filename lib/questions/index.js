const inquirer = require('inquirer');

module.exports = () => { 
  return inquirer.prompt([
    {
      type:'list',
      name:'template',
      message:'select a template for component',
      choices: [
        'BaseTable', 
        'BaseTable + BaseDrawer', 
        'BaseTable + BaseDialog',
        'BaseTable + BaseDrawer + BaseDialog',
      ],
      default: 0
    }
  ])
};