/**
 * 拉取远程仓库
 */
const download = require("download-git-repo");

download(
    "github:365fed/admin-temp#main", 
    'app',
    { clone: true },
    function (err) {
      console.log(err ? "Error" : "Success", err);
    }
  );