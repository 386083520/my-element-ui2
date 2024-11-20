export function hasClass(el, cls) {
    if(!el || !cls) return false
    if(el.classList) {
        return el.classList.contains(cls)
    }else {
        return false
    }
}
