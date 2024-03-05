console.log("my-element-ui2")
import EllButton from "./Button.vue"
import EllCard from "./packages/card/index.js"
import EllBadge from "./packages/badge/index.js"

function install(Vue, opts = {}) {
    Vue.component("EllButton", EllButton)
    Vue.component("EllCard", EllCard)
    Vue.component("EllBadge", EllBadge)
}

export default {
    install
}