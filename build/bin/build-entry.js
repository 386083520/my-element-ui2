var render = require('json-templater/string')
var fs = require('fs')
var path = require('path')
const uppercamelcase = require('uppercamelcase')
var Components = require('../../components.json')
var ComponentNames = Object.keys(Components)

var INSTALL_COMPONENT_TEMPLATE = '   {{name}}'
var IMPORT_TEMPLATE = 'import {{name}} from "../packages/{{package}}/index.js"'

var MAIN_TEMPLATE = `
{{include}}

const components = [
{{install}}
]
function install(Vue, opts = {}) {
   components.forEach(component => {
    Vue.component(component.name, component)
   })
}

export default {
    install
}`
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js')
var includeComponentTemplate = []
var installTemplate = []
ComponentNames.forEach(name => {
    var componentName = uppercamelcase(name)
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName
    }))

    includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
        name: componentName,
        package: name
    }))
})
var template = render(MAIN_TEMPLATE, {
    include: includeComponentTemplate.join('\n'),
    install: installTemplate.join(',\n')
})
fs.writeFileSync(OUTPUT_PATH, template)
