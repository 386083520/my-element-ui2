export default {
    name: 'EllScrollbar',
    render(h) {
        let gutter = 17
        const gutterWidth = `-${gutter}px`
        const gutterStyle = `margin-right:${gutterWidth};`
        const  view = h('div', {
            class: ['ell-scrollbar__view']
        }, this.$slots.default)
        let nodes = ([
            <div style={gutterStyle} class={['ell-scrollbar__wrap']}>
                { [view] }
            </div>
        ])
        return h('div', { class: 'ell-scrollbar' }, nodes)
    }
}
