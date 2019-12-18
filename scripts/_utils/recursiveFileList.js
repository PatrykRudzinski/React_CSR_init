const fs = require('fs');
const path = require('path');

const recursiveFileList = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const isDir = fs.statSync(filePath).isDirectory();
    if (isDir) recursiveFileList(filePath, fileList);
    else fileList.push(filePath);
  });
  return fileList;
};

module.exports = recursiveFileList;
