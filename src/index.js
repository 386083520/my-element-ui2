
import Card from "../packages/card/index.js"
import Badge from "../packages/badge/index.js"
import Row from "../packages/row/index.js"
import Col from "../packages/col/index.js"
import Button from "../packages/button/index.js"
import ButtonGroup from "../packages/button-group/index.js"
import Link from "../packages/link/index.js"

const components = [
   Card,
   Badge,
   Row,
   Col,
   Button,
   ButtonGroup,
   Link
]
function install(Vue, opts = {}) {
   components.forEach(component => {
    Vue.component(component.name, component)
   })
}

export default {
    install
}