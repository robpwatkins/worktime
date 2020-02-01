const fs = require('fs');
const md5 = require('md5');
require('log-timestamp');

const buttonPressesLogFile = './button-presses.log';

console.log(`Watching for file changes on ${buttonPressesLogFile}`);

let fsWait = false;

fs.watch(buttonPressesLogFile, (event, filename) => {
  if (filename) {
    if (fsWait) return;
    fsWait = setTimeout(() => {
      fsWait = false;
    }, 100);
    // console.log(`${new Date} ${filename} file changed`);
    console.log(`${new Date().getMinutes()}`);
  }
});
