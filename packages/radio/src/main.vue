<template>
    <label class="ell-radio">
        <span class="ell-radio__input">
            <span class="ell-radio__inner"></span>
            <input type="radio" :value="label" :checked="value == label" @change="handleChange"/>
        </span>
        <span class="ell-radio__label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'EllRadio',
        props: {
            label: {},
            value: {}
        },
        methods: {
            handleChange(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>
