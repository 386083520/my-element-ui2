export default {
    name: 'EllRow',
    render(h) {
        return h('div', {
            class: ['ell-row']
        }, this.$slots.default)
    }
}
