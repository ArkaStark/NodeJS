const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }


const start = async() => {
    try{
        //const first = await getText('./content/first.txt')
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/result_promisify.txt', `OK : ${first}, ${second}`)
        //const second = await getText('./content/second.txt')
        console.log(first, second) 
    } catch (error) {
        console.log(error)
    }
}

start()


// getText('./contenut/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
