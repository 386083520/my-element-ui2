import { renderThumbStyle } from "./util";

export default {
    name: 'Bar',
    props: {
        size: String,
        move: Number
    },
    render(h) {
        const { size, move } = this;
        return (
            <div class={['ell-scrollbar__bar', 'is-vertical']}>
                <div class='ell-scrollbar__thumb' style={ renderThumbStyle({size, move}) }>
                </div>
            </div>
        )
    }
}
