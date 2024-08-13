<template>
    <label class="ell-radio">
        <span class="ell-radio__input">
            <span class="ell-radio__inner"></span>
            <input
                class="ell-radio__original"
                type="radio" :value="label" v-model="model"/>
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
        computed: {
            model: {
                set(val) {
                    this.$emit('input', val)
                },
                get() {
                    return this.value
                }
            }
        },
        methods: {
            handleChange(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>
