
import Card from "../packages/card/index.js"
import Badge from "../packages/badge/index.js"
import Abc from "../packages/abc/index.js"

const components = [
   Card,
   Badge,
   Abc
]
function install(Vue, opts = {}) {
   components.forEach(component => {
    Vue.component(component.name, component)
   })
}

export default {
    install
}