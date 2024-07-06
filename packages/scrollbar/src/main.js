import scrollbarWidth from "../../../src/utils/scrollbar-width";
import Bar from "./bar";
export default {
    name: 'EllScrollbar',
    props: {
        native: Boolean
    },
    data() {
        return {
            sizeHeight: '0',
            moveY: 0,
            sizeWidth: '0',
            moveX: 0
        }
    },
    computed: {
        wrap() {
            return this.$refs.wrap;
        }
    },
    render(h) {
        let gutter = scrollbarWidth()
        const gutterWidth = `-${gutter}px`
        const gutterStyle = `margin-bottom:${gutterWidth};margin-right:${gutterWidth};`
        const  view = h('div', {
            class: ['ell-scrollbar__view']
        }, this.$slots.default)

        const wrap = (
            <div style={gutterStyle} class={['ell-scrollbar__wrap']} ref="wrap" onScroll={ this.handleScroll }>
                {[view]}
            </div>
        )

        let nodes;
        if(!this.native) {
            nodes = ([
                wrap,
                <Bar size={this.sizeWidth} move={this.moveX}></Bar>,
                <Bar vertical size={this.sizeHeight} move={this.moveY}></Bar>
            ])
        }else {
            nodes = ([
                <div style={gutterStyle} class={['ell-scrollbar__wrap']}>
                    { [view] }
                </div>
            ])
        }
        return h('div', { class: 'ell-scrollbar' }, nodes)
    },
    methods: {
        update() {
            let heightPercentage,widthPercentage;
            const  wrap = this.wrap;
            if(!wrap) return;
            heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight)
            widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth)
            this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%'):''
            this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%'):''
        },
        handleScroll() {
            const wrap = this.wrap;
            this.moveY = (wrap.scrollTop*100/wrap.clientHeight)
            this.moveX = (wrap.scrollLeft*100/wrap.clientWidth)
        }
    },
    mounted() {
        this.$nextTick(this.update())
    }
}
