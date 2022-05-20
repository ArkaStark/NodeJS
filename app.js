const _  = require('lodash')

const item  = [1,[2,[3,[4]]]]
console.log(_.flattenDeep(item)); // [1,2,3,4]