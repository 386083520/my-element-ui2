import scrollbarWidth from "../../../src/utils/scrollbar-width";
import Bar from "./bar";
export default {
    name: 'EllScrollbar',
    props: {
        native: Boolean
    },
    render(h) {
        let gutter = scrollbarWidth()
        const gutterWidth = `-${gutter}px`
        const gutterStyle = `margin-right:${gutterWidth};`
        const  view = h('div', {
            class: ['ell-scrollbar__view']
        }, this.$slots.default)

        const wrap = (
            <div style={gutterStyle} className={['ell-scrollbar__wrap']}>
                {[view]}
            </div>
        )

        let nodes;
        if(!this.native) {
            nodes = ([
                wrap,
                <Bar></Bar>
            ])
        }else {
            nodes = ([
                <div style={gutterStyle} class={['ell-scrollbar__wrap']}>
                    { [view] }
                </div>
            ])
        }
        return h('div', { class: 'ell-scrollbar' }, nodes)
    }
}
