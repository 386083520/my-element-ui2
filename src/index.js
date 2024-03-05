
import EllButton from "../Button.vue"
import EllCard from "../packages/card/index.js"
import EllBadge from "../packages/badge/index.js"

const components = [
    EllCard,
EllBadge
]
function install(Vue, opts = {}) {
   components.forEach(component => {
    Vue.component(component.name, component)
   })
}

export default {
    install
}