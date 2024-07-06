export function renderThumbStyle({size, move}) {
    const translate = `translateY(${move}%)`
    const style = {}
    style.height = size;
    style.transform = translate
    style.webkitTransform = translate
    return style;
}
