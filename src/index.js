import getClasses from './getClasses'

console.log("ran from index.js")
getClasses()

const obj = {a:'alpha', b:'beta'}
const newObj = {...obj, t: 'teta'}
console.log(newObj)