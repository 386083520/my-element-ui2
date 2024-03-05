const componentName = process.argv[2]
console.log(componentName)
const fileSave = require('file-save')
const path = require('path')
const PackagePath = path.resolve(__dirname, '../../packages', componentName)
fileSave(path.join(PackagePath, "aaa.json")).write("abcd", 'utf8')