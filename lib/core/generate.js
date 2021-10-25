const program = require('commander');
const answer = require('../questions/index');
const { addComponent } = require('./actions');

// 根据用户选择的结果生成不同的模版
module.exports = (name) => {
  answer()
    .then(res => {

      // 生成 base-table 的布局  
      if(res.template === 'BaseTable') {
        addComponent(name,program.dest || 'src/components','01');
      }

      // 生成 BaseTable + BaseDrawer  的布局
      if(res.template === 'BaseTable + BaseDrawer') {
        addComponent(name,program.dest || 'src/components','02');
      }

      // 生成 BaseTable + BaseDialog 的布局 
      if(res.template === 'BaseTable + BaseDialog') {
        addComponent(name,program.dest || 'src/components','03');
      }

      // 生成 BaseTable + BaseDrawer + BaseDialog 的布局
      if(res.template === 'BaseTable + BaseDrawer + BaseDialog') {
        addComponent(name,program.dest || 'src/components','04');
      }
  })
}