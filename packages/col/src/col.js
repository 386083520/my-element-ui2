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
        let style = {}
        if(this.$parent.gutter) {
            style.paddingLeft = this.$parent.gutter/2 + 'px'
            style.paddingRight = style.paddingLeft
        }
        classList.push(`ell-col-${this.span}`)
        return h('div', {
            class: [classList],
            style
        }, this.$slots.default);
    }
}
