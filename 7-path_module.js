const path = require('path')

console.log(path.sep);

const filePath = path.join('content','sub','test.txt')
console.log(filePath);

const base =  path.basename(filePath)
console.log(base);

const curr = path.resolve(__dirname)
console.log(curr);

const absolute = path.resolve(__dirname,filePath)
console.log(absolute);