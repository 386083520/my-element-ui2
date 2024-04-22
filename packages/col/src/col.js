export default {
    name: 'EllCol',
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        push: Number,
        pull: Number
    },
    render(h) {
        let classList = []
        let style = {}
        if(this.$parent.gutter) {
            style.paddingLeft = this.$parent.gutter/2 + 'px'
            style.paddingRight = style.paddingLeft
        }
        ['span', 'offset', 'push', 'pull'].forEach(prop => {
            if(this[prop]) {
                classList.push(prop !== 'span'? `ell-col-${prop}-${this[prop]}`:`ell-col-${this[prop]}`)
            }
        });
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if(typeof this[size] === 'number') {
                classList.push(`ell-col-${size}-${this[size]}`)
            }else  if(typeof this[size] === 'object') {
                let props  = this[size]
                Object.keys(props).forEach(prop  => {
                    classList.push(
                        prop !== 'span' // ell-col-sm-offset-4
                        ? `ell-col-${size}-${prop}-${props[prop]}`
                        : `ell-col-${size}-${props[prop]}`
                    )
                })
            }
        });
        return h('div', {
            class: [classList],
            style
        }, this.$slots.default);
    }
}
