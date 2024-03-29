const program = require('commander');

const {
  initProject,
  addComponent,
  addPage,
} = require('./actions');

const generateTemplate = require('./generate')

const createCommands = () => {
  // 初始化
  program
    .command('create <name>')
    .description('执行 oc create 来创建您的项目')
    .action((name)=>initProject(name));

  // 通过用户选择 - 生成相应模版
  program
  .command('addcmt <name>')
  .description('add vue component, 例如: oc addcmt NavBar [-d src/components]')
  .action(name => generateTemplate(name)) 

  // 通过用户输入命令 - 生成相应模版
  program
    .command('addcmt01 <name>')
    .description('add vue component, 例如: oc addcmt01 NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || 'src/components','01'))
 
  program
    .command('addcmt02 <name>')
    .description('add vue component, 例如: oc addcmt02 NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || 'src/components','02'))

  program
    .command('addcmt03 <name>')
    .description('add vue component, 例如: oc addcmt03 NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || 'src/components','03'))

  program
    .command('addcmt04 <name>')
    .description('add vue component, 例如: oc addcmt04 NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || 'src/components','04'))

  program
    .command('addpage <name>')
    .description('add vue page, 例如: oc addpage Home [-d dest]')
    .action(name => {
      addPage(name, program.dest || `src/pages/${name.toLowerCase()}`)
    })
}

module.exports = createCommands;
