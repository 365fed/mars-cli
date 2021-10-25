const { promisify } = require('util');
const downloadRepo = require('download-git-repo');
downloadRepo('direct:https://github.com/365fed/admin-temp.git','demo1', { clone: true });