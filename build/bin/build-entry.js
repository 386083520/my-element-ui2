var render = require('json-templater/string')
var fs = require('fs')
var path = require('path')
var MAIN_TEMPLATE = `
import EllButton from "./Button.vue"
import EllCard from "./packages/card/index.js"
import EllBadge from "./packages/badge/index.js"`
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js')
var template = render(MAIN_TEMPLATE, {

})
fs.writeFileSync(OUTPUT_PATH, template)
