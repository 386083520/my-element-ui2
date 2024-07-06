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
                <div ref="thumb" class='ell-scrollbar__thumb' style={ renderThumbStyle({size, move}) }>
                </div>
            </div>
        )
    },
    methods: {
        clickTrackHandler(e) {
            const offset = Math.abs(e.clientY - e.target.getBoundingClientRect().top)
            const thumbHalf = (this.$refs.thumb.offsetHeight/2)
            const thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el.offsetHeight
            this.wrap.scrollTop = thumbPositionPercentage * this.wrap.scrollHeight / 100
        }
    }
}
