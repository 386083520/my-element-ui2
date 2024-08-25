<template>
    <label class="ell-checkbox">
        <span class="ell-checkbox__input">
            <span class="ell-checkbox__inner"></span>
            <input
                class="ell-checkbox__original"
                type="checkbox"
                v-model="model"
            />
        </span>
        <span class="ell-checkbox__label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    export default {
        name: 'EllCheckbox',
        props: {
            value: {}
        },
        computed: {
            model: {
                get() {
                   return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            }
        },
        methods: {
            handleChange(e) {
                this.$emit('input', e.target.checked)
            }
        }
    }
</script>
