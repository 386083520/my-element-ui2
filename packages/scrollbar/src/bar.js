export default {
    name: 'Bar',
    render(h) {
        return (
            <div class={['ell-scrollbar__bar', 'is-vertical']}>
                <div class='ell-scrollbar__thumb'>
                </div>
            </div>
        )
    }
}
