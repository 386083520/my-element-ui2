console.log("my-element-ui2")
import EllButton from "./Button.vue"

function install(Vue, opts = {}) {
    Vue.component("EllButton", EllButton)
}

export default {
    install
}