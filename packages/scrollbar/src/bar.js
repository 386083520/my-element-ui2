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
            const offset = Math.abs(e.clientY - e.target.getBoundingClientRect().top)
            const thumbHalf = (this.$refs.thumb.offsetHeight/2)
            const thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el.offsetHeight
            this.wrap.scrollTop = thumbPositionPercentage * this.wrap.scrollHeight / 100
        },
        clickThumbHandler(e) {
            this.startDrag(e)
            this.Y = e.currentTarget.offsetHeight - (e.clientY - e.currentTarget.getBoundingClientRect().top)
        },
        startDrag(e) {
            this.cursorDown = true
            document.addEventListener('mousemove', this.mouseMoveDocumentHandler)
            document.addEventListener('mouseup', this.mouseUpDocumentHandler)
            document.onselectstart = () => false
        },
        mouseMoveDocumentHandler(e) {
            if(this.cursorDown === false) return
            const offset = ((this.$el.getBoundingClientRect().top - e.clientY) * -1)
            const thumbClickPosition = this.$refs.thumb.offsetHeight - this.Y
            const thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el.offsetHeight
            this.wrap.scrollTop = thumbPositionPercentage * this.wrap.scrollHeight / 100
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
