const program = require('commander');

const {
  createProject,
  addComponent01,
  addComponent02,
  addPage,
} = require('./actions');

const createCommands = () => {
  // 创建项目指令
  program
    .command('create <project> [otherArgs...]')
    .description('clone a repository into a newly created directory')
    .action(createProject);

  // 生成base-table 的布局
  program
    .command('addcmt01 <name>')
    .description('add vue component, 例如: oc addcmt NavBar [-d src/components]')
    .action(name => addComponent01(name, program.dest || 'src/components'))
 
  // 生成base-table + base-drawer 的布局  
  program
    .command('addcmt02 <name>')
    .description('add vue component, 例如: oc addcmt NavBar [-d src/components]')
    .action(name => addComponent02(name, program.dest || 'src/components'))   

  program
    .command('addpage <name>')
    .description('add vue page, 例如: oc addpage Home [-d dest]')
    .action(name => {
      addPage(name, program.dest || `src/pages/${name.toLowerCase()}`)
    })

  program.command('test').action(() => {
    console.log(12345)
    // terminal.spawn("npm", ['--version']);
    // terminal.exec("npm --version");
    // open('http://localhost:8080/');`
  })
}

module.exports = createCommands;
