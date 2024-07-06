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
                <div
                    onMousedown={ this.clickThumbHandler }
                    ref="thumb" class='ell-scrollbar__thumb' style={ renderThumbStyle({size, move}) }>
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
        },
        clickThumbHandler(e) {
            this.startDrag(e)
        },
        startDrag(e) {
            this.cursorDown = true
            document.addEventListener('mousemove', this.mouseMoveDocumentHandler)
            document.addEventListener('mouseup', this.mouseUpDocumentHandler)
        },
        mouseMoveDocumentHandler(e) {
            if(this.cursorDown === false) return
            console.log("move")
        },
        mouseUpDocumentHandler(e) {
            this.cursorDown = false
            console.log("up")
        }
    },
    destoryed() {
        document.removeEventListener('mouseup', this.mouseUpDocumentHandler)
    }
}
