/**
 * 初始化项目选择
 */
const inquirer = require('inquirer');

module.exports = async () => { 
  return inquirer.prompt([
    {
      type:'list',
      name:'type',
      message:'请选择您要生成的项目类型:',
      choices: [
        {
          name:'✨ mars-pc(中后台系统)',
          value:'1'
        },
        {
          name:'✨ mars-h5(h5页面)',
          value:'2'
        },
        {
          name:'✨ mars-ssr(基于Vue服务端渲染)',
          value:'3'
        },
        {
          name:'✨ mars-anything(Vue & React项目)',
          value:'4'
        },
      ],
      default: 0
    }
  ])
};