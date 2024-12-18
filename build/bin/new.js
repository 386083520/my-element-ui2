const componentname = process.argv[2]
console.log(componentname)
const fileSave = require('file-save')
const path = require('path')
const uppercamelcase = require('uppercamelcase')
const PackagePath = path.resolve(__dirname, '../../packages', componentname)
const ComponentName = uppercamelcase(componentname)


const Files = [
    {
        filename: 'index.js',
        content: `import ${ComponentName} from './src/main.vue'
${ComponentName}.install = function(Vue) {
    Vue.component(${ComponentName}.name, ${ComponentName})
}
export default ${ComponentName}`
    },
    {
        filename: 'src/main.vue',
        content: `<template>
    <div class="ell-${componentname}">
    </div>
</template>
<script>
    export default {
        name: 'Ell${ComponentName}'
    }
</script>`
    },
    {
       filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
       content: `@import "./common/var.scss";
@import "./mixins/mixins.scss";
@include b(${componentname}) {    
}`
    }
]


const componentsFile = require('../../components.json')
if(componentsFile[componentname]) {
    console.error(`${componentname} 已存在。`)
    process.exit(1)
}
componentsFile[componentname] = '11'
fileSave(path.join(__dirname, '../../components.json')).write(JSON.stringify(componentsFile, null, '  '))


Files.forEach(file => {
    fileSave(path.join(PackagePath, file.filename)).write(file.content, 'utf8')
})
