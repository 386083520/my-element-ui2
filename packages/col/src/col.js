export default {
    name: 'EllCol',
    props: {
        span: {
            type: Number,
            default: 24
        }
    },
    render(h) {
        let classList = []
        classList.push(`ell-col-${this.span}`)
        return h('div', {
            class: [classList]
        }, this.$slots.default);
    }
}
