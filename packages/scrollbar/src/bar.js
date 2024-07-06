import { renderThumbStyle } from "./util";

export default {
    name: 'Bar',
    props: {
        size: String,
        move: Number
    },
    computed: {
        wrap() {
            return this.$parent.wrap
        }
    },
    render(h) {
        const { size, move } = this;
        return (
            <div class={['ell-scrollbar__bar', 'is-vertical']} onMousedown={this.clickTrackHandler}>
                <div class='ell-scrollbar__thumb' style={ renderThumbStyle({size, move}) }>
                </div>
            </div>
        )
    },
    methods: {
        clickTrackHandler(e) {
            console.log(e)
            this.wrap.scrollTop = 500
        }
    }
}
