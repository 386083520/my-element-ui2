export default {
    name: 'EllRow',
    props: {
        gutter: Number
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
            class: ['ell-row'],
            style: this.style
        }, this.$slots.default)
    }
}
