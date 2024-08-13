<template>
    <div class="ell-radio-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'EllRadioGroup',
        props: {
            value: {}
        },
        created() {
            this.$on('handleChange', value => {
                console.log('change111', value)
                this.$emit('change', value)
            })
        }
    }
</script>
