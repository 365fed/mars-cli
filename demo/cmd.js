/**
 * 
 * 命令行测试
 * $ node demo/cmd.js create abc
 */

const program = require('commander');

program.command('create <name>')
    .description('test....')
    .action((name) => {
        console.log('正在创建项目~项目名称为：',name)
})

// 解析终端指令
program.parse(process.argv);