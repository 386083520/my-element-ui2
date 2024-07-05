export default function () {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width='100px';
    outer.style.height='100px';
    outer.style.position='absolute';
    outer.style.top='-9999px';
    outer.style.background='#f00';
    outer.style.overflow='scroll';
    document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;
    const inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height='100%'
    outer.appendChild(inner)
    const widthWithScroll =  inner.offsetWidth;
    let scrollBarWidth = widthNoScroll - widthWithScroll;
    outer.parentNode.removeChild(outer);
    return scrollBarWidth;
}
