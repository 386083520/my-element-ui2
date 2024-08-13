
import Card from "../packages/card/index.js"
import Badge from "../packages/badge/index.js"
import Row from "../packages/row/index.js"
import Col from "../packages/col/index.js"
import Button from "../packages/button/index.js"
import ButtonGroup from "../packages/button-group/index.js"
import Link from "../packages/link/index.js"
import Scrollbar from "../packages/scrollbar/index.js"
import Input from "../packages/input/index.js"
import InputNumber from "../packages/input-number/index.js"
import Radio from "../packages/radio/index.js"
import RadioGroup from "../packages/radio-group/index.js"
import RadioButton from "../packages/radio-button/index.js"

const components = [
   Card,
   Badge,
   Row,
   Col,
   Button,
   ButtonGroup,
   Link,
   Scrollbar,
   Input,
   InputNumber,
   Radio,
   RadioGroup,
   RadioButton
]
function install(Vue, opts = {}) {
   components.forEach(component => {
    Vue.component(component.name, component)
   })
}

export default {
    install
}