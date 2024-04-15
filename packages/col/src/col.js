export default {
    name: 'EllCol',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: Number
    },
    render(h) {
        let classList = []
        let style = {}
        if(this.$parent.gutter) {
            style.paddingLeft = this.$parent.gutter/2 + 'px'
            style.paddingRight = style.paddingLeft
        }
        classList.push(`ell-col-${this.span}`)
        if(this.offset) {
            classList.push(`ell-col-offset-${this.offset}`)
        }
        return h('div', {
            class: [classList],
            style
        }, this.$slots.default);
    }
}
