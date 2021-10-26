// const { promisify } = require('util');
const download = require("download-git-repo");
// downloadRepo('direct:https://github.com/365fed/admin-temp.git','demo1', { clone: true },function (err) {
//     console.log(err ? 'Error' : 'Success')
//   });

// download('direct:https://gitlab.com/flippidippi/download-git-repo-fixture/repository/archive.zip', 'test/tmp', function (err) {
//   console.log(err ? 'Error' : 'Success') 365fed

// })
// download('direct:https://github.com:bear-new/latest-webpack-cli#master', 'app', { clone: true }, err => { console.log(err ? 'Error' : 'Success') })

download(
    // "github:365fed/admin-temp#main", 
    // "github:billmian/react-webpack-template#main", 
    "github:365fed/admin-temp#main", 
    'app',
    { clone: true },
    function (err) {
      console.log(err ? "Error" : "Success", err);
    }
  );