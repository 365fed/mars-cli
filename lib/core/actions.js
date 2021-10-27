/**
 * action 回调函数统一封装
 * 用于 create.js文件 调用
 */
const { promisify } = require('util');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const downloadRepo = promisify(require('download-git-repo'));

const { ejsCompile, writeFile, mkdirSync } = require('../utils/file');
const figlet = require('../utils/figlet');
const repoConfig = require('../config/repo-config');

const init = require('../questions/init');

// 执行 mars create 初始化项目
const initProject = async (name) => {
  // 用户人机交互选项
  let res = init()
  res.then(async res => {
    // 1.提示信息loading
    const spinner = ora(chalk.blue('mars-cli is generating project for you')).start()
    const handleError = (info) => {
      if (info) {
        console.log(chalk.red('下载失败,请稍后重试')) 
      } else {
        spinner.succeed(chalk.green('下载完成'))
        figlet()
      }
    }
    // 2.clone项目从仓库
    try {
      const type = res.type
      switch (Number(type)) {
        case 1:
          // pc
          downloadRepo(repoConfig.vueGitRepo, name, { clone: true }, handleError);
          break;
        case 2:
          // h5
          downloadRepo(repoConfig.vueH5GitRepo, name, { clone: true }, handleError);
          break;
        case 3:
          // ssr
          downloadRepo(repoConfig.vueSsrGitRepo, name, { clone: true }, handleError);
          break;
        case 4:
          // anything
          spinner.fail(chalk.red('此项目暂未开发，敬请期待！'))
          break;
        default:
          downloadRepo(repoConfig.vueGitRepo, name, { clone: true }, handleError);
      }
    } catch (err) {
      spinner.stop()
    }

  })
}

const handleEjsToFile = async (name, dest, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template);
  const result = await ejsCompile(templatePath, {name, lowerName: name.toLowerCase()});

  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  mkdirSync(dest);
  const targetPath = path.resolve(dest, filename);
  writeFile(targetPath, result);
}

const addComponent = async (name, dest, num) => {
  handleEjsToFile(name, dest, `../template/component${num}.vue.ejs`, `${name}.vue`);
}

const addPage = async (name, dest) => {
  addComponent01(name, dest);
  handleEjsToFile(name, dest, '../template/vue-router.js.ejs', 'router.js')
}

module.exports = {
  initProject,
  addComponent,
  addPage
}