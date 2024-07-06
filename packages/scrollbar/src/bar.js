import { renderThumbStyle } from "./util";

export default {
    name: 'Bar',
    props: {
        size: String
    },
    render(h) {
        const { size } = this;
        return (
            <div class={['ell-scrollbar__bar', 'is-vertical']}>
                <div class='ell-scrollbar__thumb' style={ renderThumbStyle({size}) }>
                </div>
            </div>
        )
    }
}
