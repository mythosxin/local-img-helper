const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const filesMap = {};
function recordFiles(currentDirPath) {
  if (currentDirPath.includes('node_modules') || currentDirPath.includes('dist') || currentDirPath.includes('.')) return
  const list = fs.readdirSync(currentDirPath, { withFileTypes: true });
  for (const dirent of list) {
    const filePath = path.join(currentDirPath, dirent.name);
    if (dirent.isFile()) {
      if (!(/.*\.(png|jpeg|jpg|svg)/).test(dirent.name)) {
        continue;
      }
      const msg = dirent.name.split('.')
      Array.isArray(filesMap[currentDirPath])
        ? filesMap[currentDirPath].push({ name: dirent.name, type: msg[msg.length - 1], path: `${process.cwd()}/${filePath}` })
        : (filesMap[currentDirPath] = [{ name: dirent.name, type: msg[msg.length - 1], path: `${process.cwd()}/${filePath}` }])
    } else if (dirent.isDirectory()) {
      recordFiles(filePath);
    }
  }
}

function openBrowser() {
  fs.writeFile(`${__dirname}/store.js`, `const imgJson = ${JSON.stringify(filesMap)}`,
    // 写入文件后调用的回调函数
    function (err) {
      if (err) throw err;
      // 如果没有错误
      console.log("Data is written to file successfully.")
    });
  child_process.exec(`open ${__dirname}/index.html`)
}

module.exports = {
  recordFiles,
  openBrowser,
};