var render = require('json-templater/string')
var fs = require('fs')
var path = require('path')
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
var includeComponentTemplate = [
    'import EllButton from "../Button.vue"',
    'import EllCard from "../packages/card/index.js"',
    'import EllBadge from "../packages/badge/index.js"'
]
var installTemplate = [
    'EllCard',
    'EllBadge'
]
var template = render(MAIN_TEMPLATE, {
    include: includeComponentTemplate.join('\n'),
    install: installTemplate.join(',\n')
})
fs.writeFileSync(OUTPUT_PATH, template)
