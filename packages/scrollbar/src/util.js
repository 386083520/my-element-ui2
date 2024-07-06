export const BAR_MAP = {
    vertical: {
       key: 'vertical',
       size: 'height',
        client: 'clientY',
        direction: 'top',
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        axis: 'Y'
    },
    horizontal: {
        key: 'horizontal',
        size: 'width',
        client: 'clientX',
        direction: 'left',
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        axis: 'X'
    }
}
export function renderThumbStyle({size, move, bar}) {
    const translate = `translate${bar.axis}(${move}%)`
    const style = {}
    style[bar.size] = size;
    style.transform = translate
    style.webkitTransform = translate
    return style;
}
