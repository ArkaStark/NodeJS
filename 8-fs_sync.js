// Blocking approach : Start read write, finish it and then start next task.
const  {readFileSync, writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './content/result.txt', 
    `Here is the result : ${first}, ${second}.`)

writeFileSync(
    './content/result_append.txt', 
    `${first}, ${second}\n`,
    {flag : 'a'})

console.log('done');
console.log('starting next');