<template>
    <div
        class="ell-switch"
        :class="{ 'is-checked': checked }"
        @click.prevent="switchValue"
    >
        <input
            type="checkbox"
            class="ell-switch__input"
            @change="handleChange"
            :true-value="activeValue"
            :false-value="inactiveValue"
        />
        <span class="ell-switch__core"></span>
    </div>
</template>
<script>
    export default {
        name: 'EllSwitch',
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            activeValue: {
                type: [String, Number, Boolean],
                default: true
            },
            inactiveValue: {
                type: [String, Number, Boolean],
                default: false
            }
        },
        computed: {
            checked() {
                return this.value === this.activeValue
            }
        },
        methods: {
            handleChange() {
                const val = this.checked ? this.inactiveValue: this.activeValue
                this.$emit('input', val)
            },
            switchValue() {
                this.handleChange()
            }
        }
    }
</script>
