export default {
    name: 'EllRow',
    props: {
        gutter: Number,
        type: String,
        justify: {
            type: String,
            default: 'start'
        },
        align: String
    },
    computed: {
        style() {
            const ret = {}
            if(this.gutter) {
                ret.marginLeft = `-${this.gutter/2}px`
                ret.marginRight = ret.marginLeft
            }
            return ret
        }
    },
    render(h) {
        return h('div', {
            class: ['ell-row',
                this.justify !== 'start' ? 'is-justify-' + this.justify: '',
                this.align ? `is-align-${this.align}`: '',
                {
                'ell-row--flex': this.type === 'flex'
            }],
            style: this.style
        }, this.$slots.default)
    }
}
