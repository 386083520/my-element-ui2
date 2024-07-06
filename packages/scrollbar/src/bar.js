import {BAR_MAP, renderThumbStyle} from "./util";

export default {
    name: 'Bar',
    props: {
        vertical: Boolean,
        size: String,
        move: Number
    },
    computed: {
        wrap() {
            return this.$parent.wrap
        },
        bar() {
            return BAR_MAP[this.vertical? 'vertical' : 'horizontal']
        }
    },
    render(h) {
        const { size, move, bar } = this;
        return (
            <div class={['ell-scrollbar__bar', 'is-' + bar.key]} onMousedown={this.clickTrackHandler}>
                <div
                    onMousedown={ this.clickThumbHandler }
                    ref="thumb" class='ell-scrollbar__thumb' style={ renderThumbStyle({size, move, bar}) }>
                </div>
            </div>
        )
    },
    methods: {
        clickTrackHandler(e) {
            const offset = Math.abs(e[this.bar.client] - e.target.getBoundingClientRect()[this.bar.direction])
            const thumbHalf = (this.$refs.thumb[this.bar.offset]/2)
            const thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset]
            this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100
        },
        clickThumbHandler(e) {
            this.startDrag(e)
            this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction])
        },
        startDrag(e) {
            this.cursorDown = true
            document.addEventListener('mousemove', this.mouseMoveDocumentHandler)
            document.addEventListener('mouseup', this.mouseUpDocumentHandler)
            document.onselectstart = () => false
        },
        mouseMoveDocumentHandler(e) {
            if(this.cursorDown === false) return
            const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1)
            const thumbClickPosition = this.$refs.thumb[this.bar.offset] - this[this.bar.axis]
            const thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]
            this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100
        },
        mouseUpDocumentHandler(e) {
            this.cursorDown = false
            console.log("up")
            document.removeEventListener('mousemove', this.mouseUpDocumentHandler)
            document.onselectstart = null
        }
    },
    destoryed() {
        document.removeEventListener('mouseup', this.mouseUpDocumentHandler)
    }
}
