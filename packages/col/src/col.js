export default {
    name: 'EllCol',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        xs: Number,
        sm: Number,
        md: Number,
        lg: Number,
        xl: Number
    },
    render(h) {
        let classList = []
        let style = {}
        if(this.$parent.gutter) {
            style.paddingLeft = this.$parent.gutter/2 + 'px'
            style.paddingRight = style.paddingLeft
        }
        ['span', 'offset'].forEach(prop => {
            if(this[prop]) {
                classList.push(prop !== 'span'? `ell-col-${prop}-${this[prop]}`:`ell-col-${this[prop]}`)
            }
        })
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if(typeof this[size] === 'number') {
                classList.push(`ell-col-${size}-${this[size]}`)
            }
        })
        return h('div', {
            class: [classList],
            style
        }, this.$slots.default);
    }
}
