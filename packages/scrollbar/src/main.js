export default {
    name: 'EllScrollbar',
    render(h) {
        const  view = h('div', {
            class: ['ell-scrollbar__view']
        }, this.$slots.default)
        let nodes = ([
            <div class={['ell-scrollbar__wrap']}>
                { [view] }
            </div>
        ])
        return h('div', { class: 'ell-scrollbar' }, nodes)
    }
}
