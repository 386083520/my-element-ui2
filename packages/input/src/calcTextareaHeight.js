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
    const paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')))
    const boxSizing = style.getPropertyValue('box-sizing')
    const borderSize = (
        parseFloat(style.getPropertyValue('border-bottom-width'))+
        parseFloat(style.getPropertyValue('border-top-width'))
    )
    const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';')
    return { contextStyle, paddingSize, boxSizing, borderSize }
}
export default function calcTextareaHeight(targetElement, minRows = 1, maxRows = null) {
    if(!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea')
        document.body.appendChild(hiddenTextarea)
    }
    let { contextStyle, paddingSize, boxSizing, borderSize } = calculateNodeStyling(targetElement)
    hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''
    let height = hiddenTextarea.scrollHeight
    const result = {}
    hiddenTextarea.value = ''
    let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize
    if(minRows!==null) {
        let minHeight = singleRowHeight * minRows
        minHeight = minHeight + paddingSize + borderSize
        height = Math.max(minHeight, height)
        result.minHeight = `${minHeight}px`
    }
    if(maxRows!==null) {
        let maxHeight = singleRowHeight * maxRows
        maxHeight = maxHeight + paddingSize + borderSize
        height = Math.min(maxHeight, height)
        result.maxHeight = `${maxHeight}px`
    }
    result.height = `${height}px`
    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea)
    hiddenTextarea = null
    return result
}
