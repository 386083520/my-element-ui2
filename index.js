console.log("my-element-ui2")
import EllButton from "./Button.vue"
import EllCard from "./packages/card/main.vue"
import EllBadge from "./packages/badge/main.vue"

function install(Vue, opts = {}) {
    Vue.component("EllButton", EllButton)
    Vue.component("EllCard", EllCard)
    Vue.component("EllBadge", EllBadge)
}

export default {
    install
}