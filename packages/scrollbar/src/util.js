export const BAR_MAP = {
    vertical: {
       key: 'vertical',
       size: 'height'
    },
    horizontal: {
        key: 'horizontal',
        size: 'width'
    }
}
export function renderThumbStyle({size, move, bar}) {
    const translate = `translateY(${move}%)`
    const style = {}
    style[bar.size] = size;
    style.transform = translate
    style.webkitTransform = translate
    return style;
}
