const componentname = process.argv[2]
console.log(componentname)
const fileSave = require('file-save')
const path = require('path')
const uppercamelcase = require('uppercamelcase')
const PackagePath = path.resolve(__dirname, '../../packages', componentname)
const ComponentName = uppercamelcase(componentname)

const fileInfo =  {
    filename: 'index.js',
    content: `
    import ${ComponentName} from './src/main.vue'
    ${ComponentName}.install = function(Vue) {
        Vue.component(${ComponentName}.name, ${ComponentName})
    }
    export default ${ComponentName}
    `
}


fileSave(path.join(PackagePath, fileInfo.filename)).write(fileInfo.content, 'utf8')