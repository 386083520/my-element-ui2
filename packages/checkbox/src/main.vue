<template>
    <label class="ell-checkbox">
        <span
            class="ell-checkbox__input"
            :class="{
                'is-checked': isChecked,
                'is-disabled': isDisabled
            }"
        >
            <span class="ell-checkbox__inner"></span>
            <input
                class="ell-checkbox__original"
                type="checkbox"
                v-model="model"
                :value="label"
                :disabled="isDisabled"
            />
        </span>
        <span class="ell-checkbox__label">
            <slot></slot>
            <template v-if="!$slots.default">
                {{label}}
            </template>
        </span>
    </label>
</template>
<script>
    import Emitter from "../../../src/mixins/emitter";

    export default {
        name: 'EllCheckbox',
        mixins: [Emitter],
        props: {
            value: {},
            disabled: Boolean,
            label: {}
        },
        computed: {
            model: {
                get() {
                   return this.isGroup ? this.store: this.value
                },
                set(val) {
                    if(this.isGroup) {
                        this.dispatch('EllCheckboxGroup', 'input', [val])
                    }else {
                        this.$emit('input', val)
                    }

                }
            },
            isChecked() {
                if({}.toString.call(this.model) === '[object Boolean]') {
                    return this.model
                } else if(Array.isArray(this.model)) {
                    return this.model.indexOf(this.label) > -1
                }
            },
            isGroup() {
                let parent = this.$parent
                if(parent.$options.name === 'EllCheckboxGroup') {
                    this._checkboxGroup = parent
                    return true
                }
                return false
            },
            store() {
                console.log('aaa', this._checkboxGroup.value)
                return this._checkboxGroup ? this._checkboxGroup.value : this.value
            },
            isDisabled() {
                return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled
            }
        },
        methods: {
            handleChange(e) {
                this.$emit('input', e.target.checked)
            }
        }
    }
</script>
