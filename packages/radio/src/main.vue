<template>
    <label class="ell-radio">
        <span class="ell-radio__input"
              :class="{
                    'is-checked': model === label,
                    'is-disabled': disabled
              }"
        >
            <span class="ell-radio__inner"></span>
            <input
                class="ell-radio__original"
                :disabled="disabled"
                @change="handleChange"
                type="radio" :value="label" v-model="model"/>
        </span>
        <span class="ell-radio__label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
    import Emitter from "../../../src/mixins/emitter";
    export default {
        name: 'EllRadio',
        mixins: [Emitter],
        props: {
            label: {},
            value: {},
            disabled: Boolean
        },
        computed: {
            isGroup() {
                let parent = this.$parent
                console.log('parent',parent.$options.name)
                if(parent.$options.name === 'EllRadioGroup') {
                    this._radioGroup = parent
                    return true
                }
                return false
            },
            model: {
                set(val) {
                    if(this.isGroup) {
                        this.dispatch('EllRadioGroup', 'input', [val])
                    }else {
                        this.$emit('input', val)
                    }

                },
                get() {
                    return this.isGroup? this._radioGroup.value : this.value
                }
            }
        },
        methods: {
            handleChange(e) {
                this.$nextTick(() => {
                    this.$emit('change', this.model)
                    this.isGroup && this.dispatch('EllRadioGroup', 'handleChange', this.model)
                })
            }
        }
    }
</script>
