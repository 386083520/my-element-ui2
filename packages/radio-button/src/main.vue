<template>
    <label class="ell-radio-button">
        <input
            class="ell-radio-button__orig-radio"
            type="radio"
            :value="label"
            v-model="value"
        />
        <span class="ell-radio-button__inner">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'EllRadioButton',
        props: {
            label: {}
        },
        computed: {
            value: {
                get() {
                    return this._radioGroup.value
                },
                set(value) {
                    this._radioGroup.$emit('input', value)
                }
            },
            _radioGroup() {
                let parent = this.$parent
                if(parent.$options.name === 'EllRadioGroup') {
                    return parent
                }
                return false
            }
        }
    }
</script>
