let hiddenTextarea;
const HIDDEN_STYLE = `
height:0;
visibility:hidden;
overflow:hidden;
position:absolute;
z-index:-1000;
top:0;
right:0;
`

const CONTEXT_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
];

function calculateNodeStyling(targetElement) {
    const  style = window.getComputedStyle(targetElement)
    const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`)
    return { contextStyle }
}
export default function calcTextareaHeight(targetElement) {
    if(!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea')
        document.body.appendChild(hiddenTextarea)
    }
    let { contextStyle } = calculateNodeStyling(targetElement)
    hiddenTextarea.setAttribute('style', `${contextStyle}`)
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''
    let height = hiddenTextarea.scrollHeight
    const result = {}
    result.height = `${height}px`
    return result
}
