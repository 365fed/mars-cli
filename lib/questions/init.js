const inquirer =require('inquirer');

module.exports = () => { 
  return inquirer.prompt([
    {
      type:'list',
      name:'template',
      message:'select a template for component',
      choices: [
        '✨ mars-pc(中后台系统)', 
        '✨ mars-h5(h5页面)', 
        '✨ mars-ssr(基于Vue服务端渲染)',
        '✨ mars-anything(Vue & React项目)',],
      default: 0
    }
  ])
};