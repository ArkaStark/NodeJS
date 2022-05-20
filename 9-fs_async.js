// Non-Blocking approach : Start read, write and paralelly start with  next tasks.
const  {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/first.txt', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})  // <Buffer 46 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
}) // First text file

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        second = result;
        writeFile('./content/result_async.txt',
        `Here is the result : ${first}, ${second}.`,
        (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('done');
        })
    })
}) 

console.log('starting next');