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
export default function calcTextareaHeight(targetElement) {
    if(!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea')
        document.body.appendChild(hiddenTextarea)
    }
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''
    let height = hiddenTextarea.scrollHeight
    const result = {}
    result.height = `${height}px`
    return result
}
