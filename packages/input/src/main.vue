<template>
    <div :class="[
        type === 'textarea' ? 'ell-textarea': 'ell-input',
        {
          'is-disabled': inputDisabled,
          'ell-input--suffix': $slots.suffix || suffixIcon || showPassword || clearable,
          'ell-input--prefix': $slots.prefix || prefixIcon
        }
    ]">
        <template v-if="type !== 'textarea'">
            <input
                ref="input"
                class="ell-input__inner"
                v-bind="$attrs"
                :disabled="inputDisabled"
                @input="handleInput"
                :type="showPassword ? (passwordVisible ? 'text': 'password'): 'text'"
            />
            <span class="ell-input__prefix" v-if="$slots || prefixIcon">
            <slot name="prefix"></slot>
            <i v-if="prefixIcon" :class="prefixIcon" class="ell-input__icon"></i>
        </span>
            <span class="ell-input__suffix" v-if="getSuffixVisible()">
            <span class="ell-input__suffix-inner">
              <template>
                  <slot name="suffix"></slot>
                  <i v-if="suffixIcon" :class="suffixIcon" class="ell-input__icon"></i>
              </template>
              <i
                  v-if="showClear"
                  class="el-icon-circle-close ell-input__icon ell-input__clear"
                  @click="clear"
              ></i>
            <i
                v-if="showPwdVisible"
                class="el-icon-view ell-input__icon ell-input__clear"
                @click="handlePasswordVisible"
            >
            </i>
        </span>
      </span>
        </template>
        <textarea
            v-else
            ref="textarea"
            class="ell-textarea__inner"
            v-bind="$attrs"
            @input="handleInput"
            :style="textareaCalStyle"
        >

        </textarea>

    </div>
</template>
<script>
import calcTextareaHeight from "./calcTextareaHeight";
export default {
    name: 'EllInput',
    props: {
        disabled: Boolean,
        clearable: {
            type: Boolean,
            default: false
        },
        value: [String, Number],
        showPassword: {
            type: Boolean,
            default: false
        },
        suffixIcon: String,
        prefixIcon: String,
        type: {
            type: String,
            default: 'text'
        },
        autosize: {
            type: [Boolean, Object],
            default: false
        }
    },
    data() {
        return {
            passwordVisible: false,
            textareaCalStyle: {}
        }
    },
    computed: {
        inputDisabled() {
            return this.disabled
        },
        showClear() {
            return this.clearable && this.nativeInputValue
        },
        showPwdVisible() {
            return this.showPassword
        },
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : String(this.value)
        }
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value)
        },
        clear() {
            this.$emit('input', '')
        },
        setNativeInputValue() {
            const input = this.$refs.input
            if (!input) return
            input.value = this.nativeInputValue
        },
        handlePasswordVisible() {
            this.passwordVisible = !this.passwordVisible
        },
        getSuffixVisible() {
            return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword
        },
        resizeTextarea() {
            const { autosize } = this;
            if(!autosize) {
                this.textareaCalStyle = {
                    minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
                }
                return
            }
            const minRows = autosize.minRows;
            const maxRows = autosize.maxRows;
            this.textareaCalStyle = calcTextareaHeight(this.$refs.textarea,minRows,maxRows)
            console.log(this.textareaCalStyle)
        }
    },
    watch: {
        nativeInputValue() {
            this.setNativeInputValue()
        },
        value(val) {
            this.$nextTick(this.resizeTextarea)
        }
    }
}
</script>
